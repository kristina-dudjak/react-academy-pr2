/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import Topping from 'modules/order/models/Topping';
import ToppingItem from 'modules/order/components/ToppingItem/ToppingItem';
import { css } from '@emotion/react';

const OrderPage: React.FC = () => {
  const [price, setPrice] = useState(0.0);

  const toppings = [
    { name: 'Chilli', emoji: '🌶', price: 1 } as Topping,
    { name: 'Corn', emoji: '🌽', price: 1 } as Topping,
    { name: 'Egg', emoji: '🥚', price: 1 } as Topping,
    { name: 'Pineapple', emoji: '🍍', price: 1 } as Topping,
    { name: 'Meat', emoji: '🍢', price: 1 } as Topping,
    { name: 'Shrooms', emoji: '🍄', price: 1 } as Topping,
    { name: 'Bacon', emoji: '🥓', price: 1 } as Topping,
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
    <div
      css={css`
        max-width: 800px;
        margin: 0 auto;
        //background-color: #e5e5e5;
      `}
    >
      <span
        css={css`
          font-size: 40px;
        `}
      >
        Toppings! Toppings!
      </span>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        {toppingComponents}
      </div>
      <div
        css={css`
          text-align: center;
          padding: 10px;
        `}
      >
        Total price +${price}
      </div>
    </div>
  );
};
export default OrderPage;
