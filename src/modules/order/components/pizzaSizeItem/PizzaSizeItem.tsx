/** @jsxImportSource @emotion/react */
import { Pizza } from 'data';
import { pizzaAtoms, pizzaSelector } from 'modules/order/state';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styles from './PizzaSizeItem.styles';

interface PizzaSizeItemProps {
  pizza: Pizza;
}

export const PizzaSizeItem: React.FC<PizzaSizeItemProps> = ({ pizza }) => {
  const setPizzaSize = useSetRecoilState(pizzaAtoms.pizzaSize);
  const setPizzaPrice = useSetRecoilState(pizzaAtoms.pizzaPrice);
  const selectedPizza = useRecoilValue(pizzaSelector.pizza);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (pizza.size === selectedPizza.size) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selectedPizza]);

  const onSelectSize = () => {
    setPizzaSize(pizza.size);
    setPizzaPrice(pizza.price);
  };

  return (
    <div onClick={onSelectSize} css={styles.pizzaItemContainer(selected)}>
      <div css={styles.size(selected)}>{pizza.size}</div>
    </div>
  );
};
