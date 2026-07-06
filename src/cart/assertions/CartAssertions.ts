import { expect } from '@playwright/test';
import { CartRepository } from '@/cart/repositories';
import { BaseAssertions } from '@/core';

export class CartAssertions extends BaseAssertions {
  constructor(private readonly repository: CartRepository) {
    super();
  }

  async productIsVisible(productName: string): Promise<void> {
    await expect(
      this.repository.productName(productName),
      `Expected product "${productName}" to be visible in the cart`
    ).toBeVisible();
  }

  async cartIsNotEmpty(): Promise<void> {
    const count = await this.repository.cartProductRows().count();
    expect(count, 'Expected cart to contain at least one product').toBeGreaterThan(0);
  }
}
