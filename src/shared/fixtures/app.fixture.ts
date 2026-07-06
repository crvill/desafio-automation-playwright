import { test as base, expect } from '@playwright/test';
import { Application } from '@/application';

type AppFixture = {
  app: Application;
};

export const test = base.extend<AppFixture>({
  app: async ({ page }, use) => {
    await use(new Application(page));
  }
});

export { expect };
