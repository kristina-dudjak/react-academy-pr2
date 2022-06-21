/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as Style from './index';
import { Header } from '../../shared/components';
import * as Components from '../../modules/order';
import Topping from 'modules/order/models/Topping';

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
    <Components.ToppingItem
      topping={e}
      onSelect={onSelectTopping}
      key={e.name}
    />
  ));

  return (
    <div css={Style.wrapper}>
      <Header />
      <div css={Style.title}>Toppings! Toppings!</div>
      <div css={Style.toppingsContainer}>{toppingComponents}</div>
      <div css={Style.totalPrice}>Total price +${price}</div>
      <div css={Style.title}>Pizza! Pizza! size</div>
      <Components.PizzaSizePicker />
      <div css={Style.title}>Get the discount</div>
      <Components.DiscountContainer />
      <Components.OrderCheckout />
    </div>
  );
};
export default OrderPage;
