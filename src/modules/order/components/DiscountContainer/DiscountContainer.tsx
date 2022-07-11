/** @jsxImportSource @emotion/react */
import { discounts } from 'data';
import React, { useState } from 'react';
import styles from './DiscountContainer.styles';

interface DiscountContainerProps {
  onDiscount: (percentage: number) => void;
}

export const DiscountContainer: React.FC<DiscountContainerProps> = (props) => {
  const [input, setInput] = useState('');

  function applyCode() {
    const discount = discounts.find((discount) => discount.code === input);
    if (discount) {
      props.onDiscount(discount.discountPercentage);
    } else {
      props.onDiscount(0);
    }
  }

  return (
    <div css={styles.discountContainer}>
      <input
        placeholder="Enter discount code"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        css={styles.discountCode}
      />
      <button onClick={applyCode} css={styles.discountButton}>
        Apply
      </button>
    </div>
  );
};
