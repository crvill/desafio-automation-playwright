import type { Customer } from '@/shared/types';

export class CustomerBuilder {
  private customer: Customer = {
    firstName: 'Cristian',
    lastName: 'Automation',
    email: `qa.automation.${Date.now()}@mail.com`,
    telephone: '999999999',
    address: 'Automation Street 123',
    city: 'Santiago',
    postCode: '7500000',
    country: 'United States',
    regionIndex: 1
  };

  static create(): CustomerBuilder {
    return new CustomerBuilder();
  }

  static random(): CustomerBuilder {
    return new CustomerBuilder().withRandomEmail();
  }

  withRandomEmail(): CustomerBuilder {
    this.customer = {
      ...this.customer,
      email: `qa.automation.${Date.now()}.${Math.floor(Math.random() * 10000)}@mail.com`
    };

    return this;
  }

  build(): Customer {
    return { ...this.customer };
  }
}
