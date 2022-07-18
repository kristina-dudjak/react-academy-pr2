/** @jsxImportSource @emotion/react */
import { pizzas } from 'data';
import { PizzaSizeItem } from 'modules';
import React from 'react';
import styles from './PizzaSizePicker.styles';

export const PizzaSizePicker: React.FC = () => {
  return (
    <div css={styles.pizzaSizeContainer}>
      {pizzas.map((pizza) => (
        <PizzaSizeItem pizza={pizza} key={pizza.size} />
      ))}
    </div>
  );
};
