import type { Page } from '@playwright/test';
import { BaseModule } from '@/application/BaseModule';
import { AddProductToCartFlow } from '@/cart/flows';
import type { Product } from '@/shared/types';

export class CartModule extends BaseModule {
  constructor(page: Page) {
    super(page);
  }

  async addProductToCart(product: Product): Promise<void> {
    const flow = new AddProductToCartFlow(this.page);
    await flow.addProduct(product);
  }
}
