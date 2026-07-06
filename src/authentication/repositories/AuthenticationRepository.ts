import type { Locator, Page } from '@playwright/test';
import { BaseRepository } from '@/core';

export class AuthenticationRepository extends BaseRepository {
  constructor(page: Page) {
    super(page);
  }

  myAccountDropdown(): Locator {
    return this.page.locator('#top-links').getByRole('link', { name: /my account/i });
  }

  registerLink(): Locator {
    return this.page.locator('#top-links .dropdown-menu a').filter({ hasText: 'Register' });
  }

  firstNameInput(): Locator {
    return this.page.locator('#input-firstname');
  }

  lastNameInput(): Locator {
    return this.page.locator('#input-lastname');
  }

  emailInput(): Locator {
    return this.page.locator('#input-email');
  }

  telephoneInput(): Locator {
    return this.page.locator('#input-telephone');
  }

  passwordInput(): Locator {
    return this.page.locator('#input-password');
  }

  confirmPasswordInput(): Locator {
    return this.page.locator('#input-confirm');
  }

  privacyPolicyCheckbox(): Locator {
    return this.page.locator('input[name="agree"]');
  }

  continueButton(): Locator {
    return this.page.locator('input[value="Continue"]');
  }

  successTitle(): Locator {
    return this.page.locator('p', { hasText: 'Your new account has been successfully created' });
  }
}
