export interface Topping {
  name: string;
  emoji: string;
  price: number;
}

export const toppings: Topping[] = [
  { name: 'Chilli', emoji: '🌶', price: 1 },
  { name: 'Corn', emoji: '🌽', price: 1 },
  { name: 'Egg', emoji: '🥚', price: 1 },
  { name: 'Pineapple', emoji: '🍍', price: 2 },
  { name: 'Meat', emoji: '🍢', price: 4 },
  { name: 'Shrooms', emoji: '🍄', price: 2 },
  { name: 'Bacon', emoji: '🥓', price: 2 },
];
