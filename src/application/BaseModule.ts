import type { Page } from '@playwright/test';

export abstract class BaseModule {
  protected constructor(protected readonly page: Page) {}
}
