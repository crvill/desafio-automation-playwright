import type { Locator } from '@playwright/test';

class WaitUntilInteraction {
  constructor(private readonly locator: Locator) {}

  async isVisible(): Promise<void> {
    await this.locator.waitFor({ state: 'visible' });
  }

  async isHidden(): Promise<void> {
    await this.locator.waitFor({ state: 'hidden' });
  }
}

export class Wait {
  static until(locator: Locator): WaitUntilInteraction {
    return new WaitUntilInteraction(locator);
  }
}
