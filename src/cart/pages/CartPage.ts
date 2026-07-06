import type { Page } from '@playwright/test';
import { CartSummaryComponent } from '@/cart/components';
import { CartRepository } from '@/cart/repositories';
import { BasePage } from '@/core';
import { Click } from '@/shared/interactions';

export class CartPage extends BasePage {
  readonly summary: CartSummaryComponent;
  private readonly repository: CartRepository;

  constructor(page: Page) {
    super(page);
    this.summary = new CartSummaryComponent(page);
    this.repository = new CartRepository(page);
  }

  async proceedToCheckout(): Promise<void> {
    await Click.on(this.repository.checkoutButton(), 'Proceed to checkout');
  }
}
