import type { Page } from '@playwright/test';
import { BaseModule } from '@/application/BaseModule';
import { SearchProductFlow } from '@/catalog/flows';

export class CatalogModule extends BaseModule {
  constructor(page: Page) {
    super(page);
  }

  async search(productName: string): Promise<void> {
    const flow = new SearchProductFlow(this.page);
    await flow.search(productName);
  }
}
