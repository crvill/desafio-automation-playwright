import type { Page } from '@playwright/test';
import { SearchRepository } from '@/catalog/repositories';
import { BaseComponent } from '@/core';
import { Click, Enter } from '@/shared/interactions';

export class SearchBarComponent extends BaseComponent {
  private readonly repository: SearchRepository;

  constructor(page: Page) {
    super(page);
    this.repository = new SearchRepository(page);
  }

  async search(productName: string): Promise<void> {
    await Enter.theText(productName).into(this.repository.searchInput(), 'Enter product name');
    await Click.on(this.repository.searchButton(), 'Submit product search');
  }
}
