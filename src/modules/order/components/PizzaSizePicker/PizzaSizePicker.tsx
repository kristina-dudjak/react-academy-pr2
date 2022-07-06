/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './PizzaSizePicker.styles';

export const PizzaSizePicker: React.FC = () => {
  return (
    <div css={styles.pizzaSizeContainer}>
      <span css={styles.pizzaSize}>S</span>
      <span css={styles.pizzaSize}>M</span>
      <span css={styles.pizzaSize}>L</span>
    </div>
  );
};
