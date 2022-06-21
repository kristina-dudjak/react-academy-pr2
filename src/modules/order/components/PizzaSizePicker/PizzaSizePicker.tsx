/** @jsxImportSource @emotion/react */
import React from 'react';
import * as Style from './PizzaSizePicker.styles';

export const PizzaSizePicker: React.FC = () => {
  return (
    <div css={Style.pizzaSizeContainer}>
      <span css={Style.pizzaSize}>S</span>
      <span css={Style.pizzaSize}>M</span>
      <span css={Style.pizzaSize}>L</span>
    </div>
  );
};

export default {};
