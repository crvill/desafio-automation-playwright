import { Products } from '@/shared/data';
import { test } from '@/shared/fixtures';

test.describe('Shopping Cart', () => {
  test('Add Canon EOS 5D product to cart', async ({ app }) => {
    await app.cart.addProductToCart(Products.canonEOS5D);
  });
});
