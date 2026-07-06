import type { Page } from '@playwright/test';
import { SearchBarComponent } from '@/catalog/components';
import { BasePage } from '@/core';

export class HomePage extends BasePage {
  readonly searchBar: SearchBarComponent;

  constructor(page: Page) {
    super(page);
    this.searchBar = new SearchBarComponent(page);
  }

  async open(): Promise<void> {
    await this.goto('/');
    await this.waitUntilLoaded();
  }
}
