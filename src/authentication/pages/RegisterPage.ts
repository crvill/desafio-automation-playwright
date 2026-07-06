import type { Page } from '@playwright/test';
import { AuthenticationRepository } from '@/authentication/repositories';
import { BasePage } from '@/core';
import { Click, Enter } from '@/shared/interactions';
import type { Customer } from '@/shared/types';

export class RegisterPage extends BasePage {
  private readonly repository: AuthenticationRepository;

  constructor(page: Page) {
    super(page);
    this.repository = new AuthenticationRepository(page);
  }

  async open(): Promise<void> {
    await this.goto('/');
    await Click.on(this.repository.myAccountDropdown(), 'Open My Account dropdown');
    await Click.on(this.repository.registerLink(), 'Open Register page');
  }

  async fillCustomerInformation(customer: Customer, password: string): Promise<void> {
    await Enter.theText(customer.firstName).into(this.repository.firstNameInput());
    await Enter.theText(customer.lastName).into(this.repository.lastNameInput());
    await Enter.theText(customer.email).into(this.repository.emailInput());
    await Enter.theText(customer.telephone).into(this.repository.telephoneInput());
    await Enter.theText(password).into(this.repository.passwordInput());
    await Enter.theText(password).into(this.repository.confirmPasswordInput());
  }

  async acceptPrivacyPolicy(): Promise<void> {
    await Click.on(this.repository.privacyPolicyCheckbox(), 'Accept Privacy Policy');
  }

  async submit(): Promise<void> {
    await Click.on(this.repository.continueButton(), 'Submit registration form');
  }
}
