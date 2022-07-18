/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './OrderCheckout.styles';
import pizzaSlice from '../../../../assets/order/pizzaSlice.png';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { finalPriceSelector, pizzaAtoms } from 'modules/order/state';

export const OrderCheckout: React.FC = () => {
  const setQuantity = useSetRecoilState(pizzaAtoms.quantity);
  const finalPrice = useRecoilValue(finalPriceSelector.finalPrice);
  return (
    <div css={styles.checkoutContainer}>
      <img src={pizzaSlice} />
      <div css={styles.orderInfo}>
        <div css={styles.orderInfoContainer}>
          <input
            type="number"
            defaultValue={1}
            min={1}
            css={styles.quantity}
            onChange={(e) => {
              setQuantity(parseInt(e.currentTarget.value));
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
