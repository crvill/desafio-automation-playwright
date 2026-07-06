import type { Locator, Page } from '@playwright/test';
import { BaseRepository } from '@/core';

export class CartRepository extends BaseRepository {
  constructor(page: Page) {
    super(page);
  }

  cartButton(): Locator {
    return this.page.locator('#cart button');
  }

  viewCartLink(): Locator {
    return this.page.locator('#cart .dropdown-menu a').filter({ hasText: 'View Cart' });
  }

  cartProductRows(): Locator {
    return this.page.locator('.table-responsive tbody tr');
  }

  productName(productName: string): Locator {
    return this.page.locator('.table-responsive tbody tr').filter({ hasText: productName });
  }

  checkoutButton(): Locator {
    return this.page.getByRole('link', { name: 'Checkout', exact: true });
  }
}
