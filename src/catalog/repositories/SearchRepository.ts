import type { Locator, Page } from '@playwright/test';
import { BaseRepository } from '@/core';

export class SearchRepository extends BaseRepository {
  constructor(page: Page) {
    super(page);
  }

  searchInput(): Locator {
    return this.page.locator('input[name="search"]');
  }

  searchButton(): Locator {
    return this.page.locator('#search button');
  }
}
