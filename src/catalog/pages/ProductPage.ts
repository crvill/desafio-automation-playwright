import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { ProductRepository } from '@/catalog/repositories';
import { BasePage } from '@/core';
import { Click, Select } from '@/shared/interactions';

export class ProductPage extends BasePage {
  private readonly repository: ProductRepository;

  constructor(page: Page) {
    super(page);
    this.repository = new ProductRepository(page);
  }

  async selectRequiredOption(optionLabel: string): Promise<void> {
    await Select.option(optionLabel).from(
      this.repository.requiredSelectOption(),
      `Select required product option: ${optionLabel}`
    );
  }

  async addToCart(): Promise<void> {
    await Click.on(this.repository.addToCartButton(), 'Add product to cart');
    await expect(this.repository.successMessage()).toBeVisible();
  }
}
