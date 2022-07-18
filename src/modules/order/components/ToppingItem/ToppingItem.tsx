/** @jsxImportSource @emotion/react */
import { Topping } from 'data';
import React, { useState } from 'react';
import styles from './ToppingItem.styles';

interface ToppingItemProps {
  topping: Topping;
  onSelect: (topping: Topping, selected: boolean) => void;
}

export const ToppingItem: React.FC<ToppingItemProps> = ({
  topping,
  onSelect,
}) => {
  const [selected, setSelected] = useState(false);

  function onSelectTopping() {
    onSelect(topping, !selected);
    setSelected(!selected);
  }

  return (
    <div onClick={onSelectTopping} css={styles.toppingContainer(selected)}>
      <div css={styles.emoji}>{topping.emoji}</div>
      <div css={styles.name}>{topping.name}</div>
    </div>
  );
};
