import express, {NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';
import options from './swagger';
import {Server} from 'socket.io';
import http, {createServer} from 'http';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import {urlencoded, json} from 'body-parser';
import cors from 'cors';
import sequelize from './database/config';
import generateKey from './lib/generate_rsa_key';
import redis from './lib/redisClient';
import mail, {TMailConfig} from './lib/mailClient';
import {HttpError, resErr} from './lib/http.exception';
import ChatServer from './socket';
import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import routes from './start/router';
import cookieParser from 'cookie-parser';
import checkWalletEnv from './lib/wallet_env';
import currencyJob from "./sechedules/currency.schedule";

dotenv.config();

async function start(): Promise<http.Server> {
  checkWalletEnv();
  generateKey();
  await sequelize.authenticate();
  await redis.setConfig({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  });
  currencyJob();

  const secure = process.env.EMAIL_SMTP_TYPE !== 'false';
  const mailParam: TMailConfig = {
    host: process.env.EMAIL_SMTP_HOST || 'smtp.v-live.vn',
    port: Number(process.env.EMAIL_SMTP_PORT || 25),
    secure: secure,
    auth: {
      user: process.env.EMAIL_SMTP_USERNAME || '',
      pass: process.env.EMAIL_SMTP_PASSWORD || '',
    },
  };
  if (!secure) {
    mailParam.tls = {
      rejectUnauthorized: false,
    };
  }
  await mail.setConfig(mailParam);

  const limiter = rateLimit({
    windowMs: 60 * 1000, // support 200 = 200(send message) request per 1 minutes
    max: 200,
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers

    // Redis store configuration
    store: new RedisStore({
      // @ts-expect-error - Known issue: the `call` function is not present in @types/ioredis
      sendCommand: (...args: string[]) => redis.client.call(...args),
    }),
  });

  const app = express();
  app.use(limiter);
  app.use(cors());
  app.disable('x-powered-by');
  app.use(urlencoded({extended: true, limit: '10mb'}));
  app.use(json({limit: '10mb'}));
  app.use(cookieParser());
  app.use('/uploads', express.static('uploads'));
  app.use('/images', express.static('images'));

  routes(app);

  const specs = swaggerJsdoc(options);
  if (process.env.NODE_ENV !== 'production')
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

  const httpServer = createServer(app);

  new ChatServer(httpServer);

  //404 handler
  app.use((req, res) => {
    res.status(404).send(resErr('404 Page Not Found !'));
  });

  app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof HttpError) {
      return res
        .status(err.code)
        .send(resErr(err.message, err.errorCode, err.errors));
    }
    res.status(500).send(resErr(String(err)));
  });

  return httpServer;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      fileSub?: {
        fieldname: string;
        originalname: string;
        encoding: string;
        mimetype: string;
        destination: string;
        filename: string;
        path: string;
        size: Number;
      };
      jwtDecode?: {
        sub: string;
        role: number;
        isBlocked?: boolean;
        exp: number;
        iat: number;
      };
    }
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      io: Server;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      connectedUsersToRoom: Array<any>;
    }
  }
}

start()
  .then(server => {
    const port = Number(process.env.PORT || 3000);
    server.listen(port, async () => {
      console.log(`server started at http://localhost:${port}`);
      console.log(`Swagger docs http://localhost:${port}/api-docs`);
    });
  })
  .catch(err => {
    throw new Error('server error: ' + err);
  });
