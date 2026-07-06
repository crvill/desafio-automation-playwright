import type { Page } from '@playwright/test';
import { AuthenticationModule } from '@/application/modules/AuthenticationModule';
import { CartModule } from '@/application/modules/CartModule';
import { CatalogModule } from '@/application/modules/CatalogModule';
import { CheckoutModule } from '@/application/modules/CheckoutModule';

export class Application {
  readonly catalog: CatalogModule;
  readonly cart: CartModule;
  readonly checkout: CheckoutModule;
  readonly authentication: AuthenticationModule;

  constructor(page: Page) {
    this.catalog = new CatalogModule(page);
    this.cart = new CartModule(page);
    this.checkout = new CheckoutModule(page);
    this.authentication = new AuthenticationModule(page);
  }
}
