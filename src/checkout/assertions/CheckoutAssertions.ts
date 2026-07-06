import { expect } from '@playwright/test';
import { CheckoutRepository } from '@/checkout/repositories';
import { BaseAssertions } from '@/core';

export class CheckoutAssertions extends BaseAssertions {
  constructor(private readonly repository: CheckoutRepository) {
    super();
  }

  async orderWasPlaced(): Promise<void> {
    await expect(
      this.repository.successTitle(),
      'Expected order confirmation page to be visible'
    ).toBeVisible();
  }
}
