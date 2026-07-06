import type { Locator } from '@playwright/test';
import { logger } from '@/shared/logger';

export class Click {
  static async on(locator: Locator, description = 'Click on element'): Promise<void> {
    logger.debug(description);
    await locator.click();
  }
}
