import type { Page } from '@playwright/test';
import { AuthenticationAssertions } from '@/authentication/assertions';
import { RegisterPage } from '@/authentication/pages';
import { AuthenticationRepository } from '@/authentication/repositories';
import { BaseFlow } from '@/core';
import { CustomerBuilder } from '@/shared/builders';

export class RegisterCustomerFlow extends BaseFlow {
  private readonly registerPage: RegisterPage;
  private readonly assertions: AuthenticationAssertions;

  constructor(page: Page) {
    super();
    this.registerPage = new RegisterPage(page);
    this.assertions = new AuthenticationAssertions(new AuthenticationRepository(page));
  }

  async register(): Promise<void> {
    const customer = CustomerBuilder.random().build();
    const password = 'Password123!';

    await this.executeStep('Open registration page', async () => {
      await this.registerPage.open();
    });

    await this.executeStep('Fill customer registration information', async () => {
      await this.registerPage.fillCustomerInformation(customer, password);
    });

    await this.executeStep('Accept privacy policy', async () => {
      await this.registerPage.acceptPrivacyPolicy();
    });

    await this.executeStep('Submit registration form', async () => {
      await this.registerPage.submit();
    });

    await this.executeStep('Validate account creation', async () => {
      await this.assertions.accountWasCreated();
    });
  }
}
