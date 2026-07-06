import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export abstract class BasePage {
  protected constructor(protected readonly page: Page) {}

  protected async goto(path = '/'): Promise<void> {
    await this.page.goto(path);
  }

  protected async waitUntilLoaded(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
  }

  protected async expectUrlContains(value: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(value));
  }
}
