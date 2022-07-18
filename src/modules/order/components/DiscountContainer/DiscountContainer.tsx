/** @jsxImportSource @emotion/react */
import { useDiscount } from 'hooks';
import React, { useState } from 'react';
import styles from './DiscountContainer.styles';

export const DiscountContainer: React.FC = () => {
  const [input, setInput] = useState('');
  const [selected, setSelected] = useState(false);
  const applyCode = useDiscount(input, selected);

  return (
    <div css={styles.discountContainer}>
      <input
        placeholder="Enter discount code"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.currentTarget.value);
        }}
        css={styles.discountCode}
      />
      <button
        onClick={() => {
          setSelected(!selected);
          applyCode;
        }}
        css={styles.discountButton}
      >
        Apply
      </button>
    </div>
  );
};
