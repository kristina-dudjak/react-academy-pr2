import { useEffect, useState } from 'react';

export const useFinalPriceCalculator = (
  pizzaSizePrice: number,
  toppingsPrice: number,
  discountPercentage: number,
  quantity: number,
) => {
  const [finalPrice, setFinalPrice] = useState(0);
  useEffect(() => {
    setFinalPrice(
      (pizzaSizePrice +
        toppingsPrice -
        (discountPercentage / 100) * (pizzaSizePrice + toppingsPrice)) *
        quantity,
    );
  }, [pizzaSizePrice, toppingsPrice, discountPercentage, quantity]);

  return finalPrice;
};
