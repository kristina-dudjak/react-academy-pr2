export interface Discount {
  code: string;
  discountPercentage: number;
}

export const discounts: Discount[] = [
  { code: 'PIZZA10', discountPercentage: 10 },
  { code: 'PIZZA20', discountPercentage: 20 },
];
