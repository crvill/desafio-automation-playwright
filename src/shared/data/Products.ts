import type { Product } from '@/shared/types';

export const Products = {
  canonEOS5D: {
    name: 'Canon EOS 5D',
    requiredOption: 'Red'
  }
} satisfies Record<string, Product>;
