import type { Locator, Page } from '@playwright/test';
import { BaseRepository } from '@/core';

export class CheckoutRepository extends BaseRepository {
  constructor(page: Page) {
    super(page);
  }

  guestCheckoutRadio(): Locator {
    return this.page.locator('input[value="guest"]');
  }

  continueAccountButton(): Locator {
    return this.page.locator('#button-account');
  }

  firstNameInput(): Locator {
    return this.page.locator('#input-payment-firstname');
  }

  lastNameInput(): Locator {
    return this.page.locator('#input-payment-lastname');
  }

  emailInput(): Locator {
    return this.page.locator('#input-payment-email');
  }

  telephoneInput(): Locator {
    return this.page.locator('#input-payment-telephone');
  }

  addressInput(): Locator {
    return this.page.locator('#input-payment-address-1');
  }

  cityInput(): Locator {
    return this.page.locator('#input-payment-city');
  }

  postCodeInput(): Locator {
    return this.page.locator('#input-payment-postcode');
  }

  countrySelect(): Locator {
    return this.page.locator('#input-payment-country');
  }

  regionSelect(): Locator {
    return this.page.locator('#input-payment-zone');
  }

  continueBillingButton(): Locator {
    return this.page.locator('#button-guest');
  }

  continueShippingButton(): Locator {
    return this.page.locator('#button-shipping-method');
  }

  termsCheckbox(): Locator {
    return this.page.locator('input[name="agree"]');
  }

  continuePaymentButton(): Locator {
    return this.page.locator('#button-payment-method');
  }

  confirmOrderButton(): Locator {
    return this.page.locator('#button-confirm');
  }

  successTitle(): Locator {
    return this.page.getByRole('heading', { name: /your order has been placed/i });
  }
}
