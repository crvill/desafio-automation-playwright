import { logger } from '@/shared/logger';

export abstract class BaseFlow {
  protected async executeStep(description: string, action: () => Promise<void>): Promise<void> {
    logger.info(description);
    await action();
  }
}
