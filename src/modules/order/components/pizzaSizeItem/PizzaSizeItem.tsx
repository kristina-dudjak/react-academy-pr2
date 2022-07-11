/** @jsxImportSource @emotion/react */
import { Pizza } from 'data';
import React from 'react';
import styles from './PizzaSizeItem.styles';

interface PizzaSizeItemProps {
  pizza: Pizza;
  selected: boolean;
  onSelect: (pizza: Pizza, selected: boolean) => void;
}

export const PizzaSizeItem: React.FC<PizzaSizeItemProps> = (props) => {
  const pizza = props.pizza;
  const selected = props.selected;

  function onSelect() {
    props.onSelect(pizza, !selected);
  }

  return (
    <div onClick={onSelect} css={styles.pizzaItemContainer(selected)}>
      <div css={styles.size(selected)}>{pizza.size}</div>
    </div>
  );
};
