import pino from 'pino';
import { Config } from '@/config';

export const logger = pino({
  level: Config.logLevel,
  transport:
    process.env.CI === 'true'
      ? undefined
      : {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname'
          }
        }
});
