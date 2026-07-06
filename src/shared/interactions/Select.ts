import type { Locator } from '@playwright/test';
import { logger } from '@/shared/logger';

class SelectOptionInteraction {
  constructor(private readonly optionLabel: string) {}

  async from(locator: Locator, description = 'Select option'): Promise<void> {
    logger.debug({ optionLabel: this.optionLabel }, description);
    await locator.selectOption({ label: this.optionLabel });
  }
}

export class Select {
  static option(optionLabel: string): SelectOptionInteraction {
    return new SelectOptionInteraction(optionLabel);
  }
}
