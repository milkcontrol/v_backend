import io from 'socket.io';
import {Server} from 'http';
import {resOK} from '../lib/http.exception';

global.connectedUsersToRoom = [];

export default class ChatServer {
  constructor(httpServer: Server) {
    this.listen(httpServer);
  }

  private listen(httpServer: Server): void {
    global.io = new io.Server(httpServer, {
      maxHttpBufferSize: 100000000,
      connectTimeout: 5000,
      transports: ['websocket', 'polling'],
      pingInterval: 5 * 1000,
      pingTimeout: 5000,
      allowEIO3: true,
      allowRequest: (req, callback) => {
        callback(null, true);
      },
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });

    global.io.use(async (socket, next) => {
      try {
        const authToken = socket.handshake.headers.authorization;
        if (!authToken) {
          console.log('socket auth be provided !');
          throw new Error('auth must be provided !');
        }
        next();
      } catch (err) {
        console.log('socket cant connect because => ' + err);
        next(Error(String(err)));
      }
    });
    this.onConnect();
  }

  private onConnect(): void {
    global.io.on('connection', async socket => {
      const id: string = socket.id;
      socket.on('USER_ONLINE', async (args, callback) => {
        socket.emit('USER', 'connect success');
        if (callback) callback(resOK(`connect success ! ${id}`));
      });
    });
  }
}
