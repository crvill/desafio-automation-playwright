import type { Page } from '@playwright/test';
import { CartAssertions } from '@/cart/assertions';
import { CartPage } from '@/cart/pages';
import { CartRepository } from '@/cart/repositories';
import { CatalogAssertions } from '@/catalog/assertions';
import { HomePage, ProductPage, SearchResultsPage } from '@/catalog/pages';
import { BaseFlow } from '@/core';
import type { Product } from '@/shared/types';

export class AddProductToCartFlow extends BaseFlow {
  private readonly homePage: HomePage;
  private readonly searchResultsPage: SearchResultsPage;
  private readonly productPage: ProductPage;
  private readonly cartPage: CartPage;
  private readonly catalogAssertions: CatalogAssertions;
  private readonly cartAssertions: CartAssertions;

  constructor(page: Page) {
    super();
    this.homePage = new HomePage(page);
    this.searchResultsPage = new SearchResultsPage(page);
    this.productPage = new ProductPage(page);
    this.cartPage = new CartPage(page);
    this.catalogAssertions = new CatalogAssertions(this.searchResultsPage.products);
    this.cartAssertions = new CartAssertions(new CartRepository(page));
  }

  async addProduct(product: Product): Promise<void> {
    await this.executeStep('Open OpenCart home page', async () => {
      await this.homePage.open();
    });

    await this.executeStep(`Search product: ${product.name}`, async () => {
      await this.homePage.searchBar.search(product.name);
    });

    await this.executeStep(`Validate product is visible: ${product.name}`, async () => {
      await this.catalogAssertions.productVisible(product.name);
    });

    await this.executeStep(`Open product details: ${product.name}`, async () => {
      await this.searchResultsPage.products.openProduct(product.name);
    });

    if (product.requiredOption !== undefined) {
      await this.executeStep(`Select required option: ${product.requiredOption}`, async () => {
        await this.productPage.selectRequiredOption(product.requiredOption as string);
      });
    }

    await this.executeStep(`Add product to cart: ${product.name}`, async () => {
      await this.productPage.addToCart();
    });

    await this.executeStep('Open cart page', async () => {
      await this.cartPage.summary.openCartPage();
    });

    await this.executeStep(`Validate product exists in cart: ${product.name}`, async () => {
      await this.cartAssertions.cartIsNotEmpty();
      await this.cartAssertions.productIsVisible(product.name);
    });
  }
}
