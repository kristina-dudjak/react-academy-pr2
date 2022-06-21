/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as Style from './ToppingItem.styles';
import Topping from '../../models/Topping';

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
    <div onClick={onSelect} css={Style.toppingContainer(selected)}>
      <div css={Style.emoji}>{topping.emoji}</div>
      <div css={Style.name}>{topping.name}</div>
    </div>
  );
};

export default {};
