import { discounts } from 'data';
import { pizzaAtoms } from 'modules/order/state';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

export const useDiscount = (input: string, selected: boolean) => {
  const setDiscount = useSetRecoilState(pizzaAtoms.discount);
  useEffect(() => {
    const discount = discounts.find(({ code }) => code === input);
    if (discount) {
      setDiscount(discount.discountPercentage);
    } else {
      setDiscount(0);
    }
  }, [selected]);
};
