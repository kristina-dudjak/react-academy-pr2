/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import Topping from 'modules/order/models/Topping';

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
    <div
      onClick={onSelect}
      css={css({
        border: '1px solid #f2f2f',
        boxShadow: '0px 12px 16px rgb(0 0 0 / 0.2)',
        borderRadius: '56px',
        padding: '8px 8px 28px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: selected ? '#e5c3f5' : 'white',
      })}
    >
      <div
        css={css`
          background-color: rgb(255 255 255 / 0.3);
          box-shadow: 0px 12px 28px rgb(0 0 0 / 0.01);
          width: 76px;
          height: 76px;
          align-self: center;
          border-radius: 40px;
          line-height: 4.5;
        `}
      >
        {topping.emoji}
      </div>
      <div
        css={css`
          align-self: center;
          padding: 10px 0px 0px;
        `}
      >
        {topping.name}
      </div>
    </div>
  );
};

export default ToppingItem;
