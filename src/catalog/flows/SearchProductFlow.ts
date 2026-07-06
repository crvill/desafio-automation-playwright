import type { Page } from '@playwright/test';
import { CatalogAssertions } from '@/catalog/assertions';
import { HomePage, SearchResultsPage } from '@/catalog/pages';
import { BaseFlow } from '@/core';

export class SearchProductFlow extends BaseFlow {
  private readonly homePage: HomePage;
  private readonly searchResultsPage: SearchResultsPage;
  private readonly assertions: CatalogAssertions;

  constructor(page: Page) {
    super();
    this.homePage = new HomePage(page);
    this.searchResultsPage = new SearchResultsPage(page);
    this.assertions = new CatalogAssertions(this.searchResultsPage.products);
  }

  async search(productName: string): Promise<void> {
    await this.executeStep('Open OpenCart home page', async () => {
      await this.homePage.open();
    });

    await this.executeStep(`Search product: ${productName}`, async () => {
      await this.homePage.searchBar.search(productName);
    });

    await this.executeStep(`Validate product is visible: ${productName}`, async () => {
      await this.assertions.resultsAreNotEmpty();
      await this.assertions.productVisible(productName);
    });
  }
}
