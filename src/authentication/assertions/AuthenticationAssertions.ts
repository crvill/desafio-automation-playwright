import { expect } from '@playwright/test';
import { AuthenticationRepository } from '@/authentication/repositories';
import { BaseAssertions } from '@/core';

export class AuthenticationAssertions extends BaseAssertions {
  constructor(private readonly repository: AuthenticationRepository) {
    super();
  }

  async accountWasCreated(): Promise<void> {
    await expect(
      this.repository.successTitle(),
      'Expected account creation confirmation page to be visible'
    ).toBeVisible();
  }
}
