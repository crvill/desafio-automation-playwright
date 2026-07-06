import type { Locator, Page } from '@playwright/test';
import { BaseRepository } from '@/core';

export class ProductRepository extends BaseRepository {
  constructor(page: Page) {
    super(page);
  }

  productCards(): Locator {
    return this.page.locator('.product-thumb');
  }

  productTitles(): Locator {
    return this.page.locator('.product-thumb h4 a');
  }

  productTitleByName(productName: string): Locator {
    return this.page.locator('.product-thumb h4 a').filter({ hasText: productName }).first();
  }

  requiredSelectOption(): Locator {
    return this.page.locator('select[id^="input-option"]').first();
  }

  addToCartButton(): Locator {
    return this.page.locator('#button-cart');
  }

  successMessage(): Locator {
    return this.page.locator('.alert-success');
  }
}
