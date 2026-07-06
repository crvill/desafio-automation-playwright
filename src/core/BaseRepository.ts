import type { Page } from '@playwright/test';

export abstract class BaseRepository {
  protected constructor(protected readonly page: Page) {}
}
