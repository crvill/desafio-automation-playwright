import type { Locator } from '@playwright/test';
import { logger } from '@/shared/logger';

class EnterTextInteraction {
  constructor(private readonly value: string) {}

  async into(locator: Locator, description = 'Enter text into element'): Promise<void> {
    logger.debug({ value: this.value }, description);
    await locator.fill(this.value);
  }
}

export class Enter {
  static theText(value: string): EnterTextInteraction {
    return new EnterTextInteraction(value);
  }
}
