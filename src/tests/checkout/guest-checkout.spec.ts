import { Products } from '@/shared/data';
import { test } from '@/shared/fixtures';

test.describe('Guest Checkout', () => {
  test('Purchase Canon EOS 5D as guest customer', async ({ app }) => {
    await app.checkout.purchaseGuestProduct(Products.canonEOS5D);
  });
});
