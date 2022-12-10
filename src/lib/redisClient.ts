import redis, {RedisOptions, Redis} from 'ioredis';

interface IRedisError extends Error {
  code?: string;
  path?: string;
  syscall?: string;
}

interface Message {
  uid: string;
  publicKey: string;
  createdAt: number;
}

interface IRedisData {
  channel: string;
  message: Message;
}

class RedisClient {
  private static singleton: RedisClient;
  public client: Redis | undefined;

  streamChannel(
    channels: string[],
    callback: (error: any, data: IRedisData | null) => void
  ): void {
    if (this.client)
      this.client
        .subscribe(...channels)
        .then(() => {
          if (this.client)
            this.client.on('message', (ch, ms) => {
              for (const val of channels) {
                if (val !== ch) continue;
                callback(null, {channel: ch, message: JSON.parse(ms)});
              }
            });
        })
        .catch(err => callback(err, null));
  }

  private constructor() {}

  /**
   * RedisClient configuration settings
   * @return {void}
   */
  setConfig(option: RedisOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.client) {
        const code = 'E_CONFIG_REDIS_CLIENT';
        const err: IRedisError = new Error(
          `${code} redisClient configuration is only allowed to be declared once`
        );
        err.code = code;
        reject(err);
      }
      this.client = new redis(option);
      this.client.on('connect', () => {
        console.log('redis connect success');
        resolve();
      });
      this.client.on('error', (err: IRedisError) => {
        console.log(`redis error: ${err.stack}`);
      });
      this.client.on('close', () => {
        console.log('redis close connect');
      });
      this.client.on('reconnecting', () => {
        console.log('redis reconnecting');
      });
      this.client.on('end', () => {
        console.log('redis end');
      });
      this.client.on('select', () => {
        console.log('redis select');
      });
    });
  }

  /**
   *
   */
  public static getInstance(): RedisClient {
    if (!RedisClient.singleton) {
      RedisClient.singleton = new RedisClient();
    }
    return RedisClient.singleton;
  }
}
const redisClient = RedisClient.getInstance();
export default redisClient;
