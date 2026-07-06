import { expect } from '@playwright/test';
import type { ProductGridComponent } from '@/catalog/components';
import { BaseAssertions } from '@/core';

export class CatalogAssertions extends BaseAssertions {
  constructor(private readonly productGrid: ProductGridComponent) {
    super();
  }

  async productVisible(productName: string): Promise<void> {
    const exists = await this.productGrid.contains(productName);
    expect(exists, `Expected product "${productName}" to be visible in search results`).toBeTruthy();
  }

  async resultsAreNotEmpty(): Promise<void> {
    const count = await this.productGrid.count();
    expect(count, 'Expected search results to contain at least one product').toBeGreaterThan(0);
  }
}
