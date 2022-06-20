/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import Topping from 'modules/order/models/Topping';
import ToppingItem from 'modules/order/components/ToppingItem/ToppingItem';
import {
  wrapper,
  title,
  toppingsContainer,
  totalPrice,
} from './OrderPage.styles';

const OrderPage: React.FC = () => {
  const [price, setPrice] = useState(0.0);

  const toppings = [
    { name: 'Chilli', emoji: '🌶', price: 1 } as Topping,
    { name: 'Corn', emoji: '🌽', price: 1 } as Topping,
    { name: 'Egg', emoji: '🥚', price: 1 } as Topping,
    { name: 'Pineapple', emoji: '🍍', price: 2 } as Topping,
    { name: 'Meat', emoji: '🍢', price: 4 } as Topping,
    { name: 'Shrooms', emoji: '🍄', price: 2 } as Topping,
    { name: 'Bacon', emoji: '🥓', price: 2 } as Topping,
  ];

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
    <div css={wrapper}>
      <span css={title}>Toppings! Toppings!</span>
      <div css={toppingsContainer}>{toppingComponents}</div>
      <div css={totalPrice}>Total price +${price}</div>
    </div>
  );
};
export default OrderPage;
