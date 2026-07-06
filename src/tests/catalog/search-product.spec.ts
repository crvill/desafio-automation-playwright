import { Products } from '@/shared/data';
import { test } from '@/shared/fixtures';

test.describe('Catalog Search', () => {
  test('Search Canon EOS 5D product', async ({ app }) => {
    await app.catalog.search(Products.canonEOS5D.name);
  });
});
