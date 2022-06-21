/** @jsxImportSource @emotion/react */
import React from 'react';
import * as Style from './index';

export const DiscountContainer: React.FC = () => {
  return (
    <div css={Style.discountContainer}>
      <span css={Style.discountCode}>Enter discount code</span>
      <button css={Style.discountButton}>Apply</button>
    </div>
  );
};

export default {};
