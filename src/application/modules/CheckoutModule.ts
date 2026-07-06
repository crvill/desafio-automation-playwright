import type { Page } from '@playwright/test';
import { BaseModule } from '@/application/BaseModule';
import { GuestCheckoutFlow } from '@/checkout/flows';
import type { Product } from '@/shared/types';

export class CheckoutModule extends BaseModule {
  constructor(page: Page) {
    super(page);
  }

  async purchaseGuestProduct(product: Product): Promise<void> {
    const flow = new GuestCheckoutFlow(this.page);
    await flow.purchase(product);
  }
}
