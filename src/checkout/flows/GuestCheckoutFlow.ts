import type { Page } from '@playwright/test';
import { AddProductToCartFlow } from '@/cart/flows';
import { CartPage } from '@/cart/pages';
import { CheckoutAssertions } from '@/checkout/assertions';
import { CheckoutPage } from '@/checkout/pages';
import { CheckoutRepository } from '@/checkout/repositories';
import { BaseFlow } from '@/core';
import { CustomerBuilder } from '@/shared/builders';
import type { Product } from '@/shared/types';

export class GuestCheckoutFlow extends BaseFlow {
  private readonly addProductToCartFlow: AddProductToCartFlow;
  private readonly cartPage: CartPage;
  private readonly checkoutPage: CheckoutPage;
  private readonly assertions: CheckoutAssertions;

  constructor(page: Page) {
    super();
    this.addProductToCartFlow = new AddProductToCartFlow(page);
    this.cartPage = new CartPage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.assertions = new CheckoutAssertions(new CheckoutRepository(page));
  }

  async purchase(product: Product): Promise<void> {
    const customer = CustomerBuilder.random().build();

    await this.executeStep(`Add product to cart: ${product.name}`, async () => {
      await this.addProductToCartFlow.addProduct(product);
    });

    await this.executeStep('Proceed to checkout', async () => {
      await this.cartPage.proceedToCheckout();
    });

    await this.executeStep('Select guest checkout', async () => {
      await this.checkoutPage.selectGuestCheckout();
    });

    await this.executeStep('Complete billing details', async () => {
      await this.checkoutPage.fillBillingDetails(customer);
    });

    await this.executeStep('Continue shipping method', async () => {
      await this.checkoutPage.continueShippingMethod();
    });

    await this.executeStep('Accept terms and continue payment', async () => {
      await this.checkoutPage.acceptTermsAndContinuePayment();
    });

    await this.executeStep('Confirm order', async () => {
      await this.checkoutPage.confirmOrder();
    });

    await this.executeStep('Validate order confirmation', async () => {
      await this.assertions.orderWasPlaced();
    });
  }
}
