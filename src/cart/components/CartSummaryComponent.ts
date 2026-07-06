import type { Page } from '@playwright/test';
import { CartRepository } from '@/cart/repositories';
import { BaseComponent } from '@/core';
import { Click } from '@/shared/interactions';

export class CartSummaryComponent extends BaseComponent {
  private readonly repository: CartRepository;

  constructor(page: Page) {
    super(page);
    this.repository = new CartRepository(page);
  }

  async openCartDropdown(): Promise<void> {
    await Click.on(this.repository.cartButton(), 'Open cart dropdown');
  }

  async openCartPage(): Promise<void> {
    await this.openCartDropdown();
    await Click.on(this.repository.viewCartLink(), 'Open cart page');
  }
}
