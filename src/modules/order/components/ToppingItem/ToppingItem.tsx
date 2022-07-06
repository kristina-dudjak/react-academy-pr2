/** @jsxImportSource @emotion/react */
import { Topping } from 'data';
import React, { useState } from 'react';
import styles from './ToppingItem.styles';

interface ToppingItemProps {
  topping: Topping;
  onSelect: (topping: Topping, selected: boolean) => void;
}

export const ToppingItem: React.FC<ToppingItemProps> = (props) => {
  const topping = props.topping;
  const [selected, setSelected] = useState(false);

  function onSelect() {
    props.onSelect(topping, !selected);
    setSelected(!selected);
  }

  return (
    <div onClick={onSelect} css={styles.toppingContainer(selected)}>
      <div css={styles.emoji}>{topping.emoji}</div>
      <div css={styles.name}>{topping.name}</div>
    </div>
  );
};
