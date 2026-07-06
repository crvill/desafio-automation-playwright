import type { Page } from '@playwright/test';
import { ProductRepository } from '@/catalog/repositories';
import { BaseComponent } from '@/core';

export class ProductGridComponent extends BaseComponent {
  private readonly repository: ProductRepository;

  constructor(page: Page) {
    super(page);
    this.repository = new ProductRepository(page);
  }

  async contains(productName: string): Promise<boolean> {
    const productTitles = await this.repository.productTitles().allTextContents();

    return productTitles.some((title) =>
      title.trim().toLowerCase().includes(productName.trim().toLowerCase())
    );
  }

  async count(): Promise<number> {
    return this.repository.productCards().count();
  }

  async openProduct(productName: string): Promise<void> {
    await this.repository.productTitleByName(productName).click();
  }
}
