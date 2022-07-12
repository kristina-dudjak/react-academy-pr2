/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './OrderCheckout.styles';
import pizzaSlice from '../../../../assets/order/pizzaSlice.png';

interface OrderCheckoutProps {
  finalPrice: number;
  onQuantity: (quantity: number) => void;
}

export const OrderCheckout: React.FC<OrderCheckoutProps> = ({
  finalPrice,
  onQuantity,
}) => {
  return (
    <div css={styles.checkoutContainer}>
      <img src={pizzaSlice}></img>
      <div css={styles.orderInfo}>
        <div css={styles.orderInfoContainer}>
          <input
            type="number"
            defaultValue={1}
            min={1}
            css={styles.quantity}
            onChange={(e) => {
              onQuantity(parseInt(e.target.value));
            }}
          />
          <span css={styles.orderText}>Qty</span>
        </div>
        <div css={styles.line}></div>
        <div css={styles.orderInfoContainer}>
          <span css={styles.price}>${finalPrice}</span>
          <span css={styles.orderText}>Order total</span>
        </div>
      </div>
      <button css={styles.checkoutButton}>Buy Pizza! Pizza!</button>
    </div>
  );
};
