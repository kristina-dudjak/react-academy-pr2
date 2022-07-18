import { Pizza } from 'data';
import { selector } from 'recoil';
import { pizzaAtoms } from './atoms';

const pizza = selector<Pizza>({
  key: 'order.pizza',
  get: ({ get }) => {
    const size = get(pizzaAtoms.pizzaSize);
    const price = get(pizzaAtoms.pizzaPrice);

    return { size, price };
  },
});

const finalPrice = selector<number>({
  key: 'order.pizza.finalPrice',
  get: ({ get }) => {
    const pizzaPrice = get(pizzaAtoms.pizzaPrice);
    const toppingsPrice = get(pizzaAtoms.toppingsPrice);
    const discount = get(pizzaAtoms.discount);
    const quantity = get(pizzaAtoms.quantity);
    const final =
      (pizzaPrice +
        toppingsPrice -
        (discount / 100) * (pizzaPrice + toppingsPrice)) *
      quantity;

    return final;
  },
});

export const pizzaSelector = { pizza };
export const finalPriceSelector = { finalPrice };
