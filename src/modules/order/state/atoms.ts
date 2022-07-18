import { atom } from 'recoil';

const toppingsPrice = atom<number>({
  key: 'order.pizza.toppingsPrice',
  default: 0,
});

const pizzaSize = atom<string>({
  key: 'order.pizza.size',
  default: 'M',
});

const pizzaPrice = atom<number>({
  key: 'order.pizza.price',
  default: 15,
});

const discount = atom<number>({
  key: 'order.pizza.discount',
  default: 0,
});

const quantity = atom<number>({
  key: 'order.pizza.quantity',
  default: 1,
});

export const pizzaAtoms = {
  pizzaSize,
  pizzaPrice,
  toppingsPrice,
  discount,
  quantity,
};
