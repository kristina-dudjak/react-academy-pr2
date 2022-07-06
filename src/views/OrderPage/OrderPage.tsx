/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styles from './OrderPage.styles';
import { Header } from 'shared';
import {
  DiscountContainer,
  OrderCheckout,
  PizzaSizePicker,
  ToppingItem,
} from 'modules';
import { Topping } from 'data';

const toppings: Topping[] = [
  { name: 'Chilli', emoji: '🌶', price: 1 },
  { name: 'Corn', emoji: '🌽', price: 1 },
  { name: 'Egg', emoji: '🥚', price: 1 },
  { name: 'Pineapple', emoji: '🍍', price: 2 },
  { name: 'Meat', emoji: '🍢', price: 4 },
  { name: 'Shrooms', emoji: '🍄', price: 2 },
  { name: 'Bacon', emoji: '🥓', price: 2 },
];

export const OrderPage: React.FC = () => {
  const [price, setPrice] = useState(0);

  const onSelectTopping = (topping: Topping, selected: boolean) => {
    if (selected) {
      setPrice(price + topping.price);
    } else {
      setPrice(price - topping.price);
    }
  };

  const toppingComponents = toppings.map((e) => (
    <ToppingItem topping={e} onSelect={onSelectTopping} key={e.name} />
  ));

  return (
    <div css={styles.wrapper}>
      <Header />
      <div css={styles.title}>Toppings! Toppings!</div>
      <div css={styles.toppingsContainer}>{toppingComponents}</div>
      <div css={styles.totalPrice}>Total price +${price}</div>
      <div css={styles.title}>Pizza! Pizza! size</div>
      <PizzaSizePicker />
      <div css={styles.title}>Get the discount</div>
      <DiscountContainer />
      <OrderCheckout />
    </div>
  );
};
