/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import Topping from 'modules/order/models/Topping';
import { emoji, name, toppingContainer } from './ToppingItem.styles';

interface ToppingItemProps {
  topping: Topping;
  onSelect: (topping: Topping, selected: boolean) => void;
}

const ToppingItem: React.FC<ToppingItemProps> = (props) => {
  const topping = props.topping;

  const [selected, setSelected] = useState(false);

  function onSelect() {
    props.onSelect(topping, !selected);
    setSelected(!selected);
  }

  return (
    <div onClick={onSelect} css={toppingContainer(selected)}>
      <div css={emoji}>{topping.emoji}</div>
      <div css={name}>{topping.name}</div>
    </div>
  );
};

export default ToppingItem;
