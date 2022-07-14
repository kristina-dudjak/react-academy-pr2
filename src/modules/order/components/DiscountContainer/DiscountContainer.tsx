/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styles from './DiscountContainer.styles';
import { discounts } from 'data';
import { pizzaAtoms } from 'modules/order/state/atoms';

export const DiscountContainer: React.FC = () => {
  const [input, setInput] = useState('');
  const setDiscount = useSetRecoilState(pizzaAtoms.discount);

  function applyCode() {
    const discount = discounts.find((discount) => discount.code === input);
    if (discount) {
      setDiscount(discount.discountPercentage);
    } else {
      setDiscount(0);
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
