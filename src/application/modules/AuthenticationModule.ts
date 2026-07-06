import type { Page } from '@playwright/test';
import { BaseModule } from '@/application/BaseModule';
import { RegisterCustomerFlow } from '@/authentication/flows';

export class AuthenticationModule extends BaseModule {
  constructor(page: Page) {
    super(page);
  }

  async registerNewCustomer(): Promise<void> {
    const flow = new RegisterCustomerFlow(this.page);
    await flow.register();
  }
}
