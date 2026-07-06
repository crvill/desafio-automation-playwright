import type { Page } from '@playwright/test';
import { ProductGridComponent } from '@/catalog/components';
import { BasePage } from '@/core';

export class SearchResultsPage extends BasePage {
  readonly products: ProductGridComponent;

  constructor(page: Page) {
    super(page);
    this.products = new ProductGridComponent(page);
  }
}
