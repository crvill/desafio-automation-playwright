import type { Page } from '@playwright/test';
import { CheckoutRepository } from '@/checkout/repositories';
import { BasePage } from '@/core';
import { Click, Enter } from '@/shared/interactions';
import type { Customer } from '@/shared/types';

export class CheckoutPage extends BasePage {
  private readonly repository: CheckoutRepository;

  constructor(page: Page) {
    super(page);
    this.repository = new CheckoutRepository(page);
  }

  async selectGuestCheckout(): Promise<void> {
    await Click.on(this.repository.guestCheckoutRadio(), 'Select guest checkout');
    await Click.on(this.repository.continueAccountButton(), 'Continue as guest');
  }

  async fillBillingDetails(customer: Customer): Promise<void> {
    await Enter.theText(customer.firstName).into(this.repository.firstNameInput());
    await Enter.theText(customer.lastName).into(this.repository.lastNameInput());
    await Enter.theText(customer.email).into(this.repository.emailInput());
    await Enter.theText(customer.telephone).into(this.repository.telephoneInput());
    await Enter.theText(customer.address).into(this.repository.addressInput());
    await Enter.theText(customer.city).into(this.repository.cityInput());
    await Enter.theText(customer.postCode).into(this.repository.postCodeInput());

    await this.repository.countrySelect().selectOption({ label: customer.country });
    await this.repository.regionSelect().selectOption({ index: customer.regionIndex });

    await Click.on(this.repository.continueBillingButton(), 'Continue billing details');
  }

  async continueShippingMethod(): Promise<void> {
    await Click.on(this.repository.continueShippingButton(), 'Continue shipping method');
  }

  async acceptTermsAndContinuePayment(): Promise<void> {
    await Click.on(this.repository.termsCheckbox(), 'Accept terms and conditions');
    await Click.on(this.repository.continuePaymentButton(), 'Continue payment method');
  }

  async confirmOrder(): Promise<void> {
    await Click.on(this.repository.confirmOrderButton(), 'Confirm order');
  }
}
