/** @jsxImportSource @emotion/react */
import React from 'react';
import * as Style from './OrderCheckout.styles';
import pizzaSlice from '../../../../shared/images/pizzaSlice.png';

export const OrderCheckout: React.FC = () => {
  return (
    <div css={Style.checkoutContainer}>
      <img src={pizzaSlice}></img>
      <div css={Style.orderInfo}>
        <div css={Style.quantityContainer}>
          <span css={Style.quantity}>1</span>
          <span css={Style.orderText}>Qty</span>
        </div>
        <line css={Style.line}></line>
        <div css={Style.priceContainer}>
          <span css={Style.price}>$22.50</span>
          <span css={Style.orderText}>Order total</span>
        </div>
      </div>
      <button css={Style.checkoutButton}>Buy Pizza! Pizza!</button>
    </div>
  );
};

export default {};
