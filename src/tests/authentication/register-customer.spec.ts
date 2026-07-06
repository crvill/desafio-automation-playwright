import { test } from '@/shared/fixtures';

test.describe('Customer Registration', () => {
  test('Register a new customer successfully', async ({ app }) => {
    await app.authentication.registerNewCustomer();
  });
});
