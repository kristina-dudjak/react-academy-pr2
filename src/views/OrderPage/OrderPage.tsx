/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './OrderPage.styles';
import { Header } from 'shared';
import {
  DiscountContainer,
  OrderCheckout,
  PizzaSizePicker,
  ToppingsList,
} from 'modules';

export const OrderPage: React.FC = () => {
  return (
    <div css={styles.wrapper}>
      <Header />
      <div css={styles.title}>Toppings! Toppings!</div>
      <ToppingsList />
      <div css={styles.title}>Pizza! Pizza! size</div>
      <PizzaSizePicker />
      <div css={styles.title}>Get the discount</div>
      <DiscountContainer />
      <OrderCheckout />
    </div>
  );
};
