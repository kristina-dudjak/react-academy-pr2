/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './OrderCheckout.styles';
import pizzaSlice from '../../../../assets/order/pizzaSlice.png';

export const OrderCheckout: React.FC = () => {
  return (
    <div css={styles.checkoutContainer}>
      <img src={pizzaSlice}></img>
      <div css={styles.orderInfo}>
        <div css={styles.quantityContainer}>
          <span css={styles.quantity}>1</span>
          <span css={styles.orderText}>Qty</span>
        </div>
        <div css={styles.line}></div>
        <div css={styles.priceContainer}>
          <span css={styles.price}>$22.50</span>
          <span css={styles.orderText}>Order total</span>
        </div>
      </div>
      <button css={styles.checkoutButton}>Buy Pizza! Pizza!</button>
    </div>
  );
};
