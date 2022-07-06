/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './DiscountContainer.styles';

export const DiscountContainer: React.FC = () => {
  return (
    <div css={styles.discountContainer}>
      <span css={styles.discountCode}>Enter discount code</span>
      <button css={styles.discountButton}>Apply</button>
    </div>
  );
};
