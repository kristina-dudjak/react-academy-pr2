/** @jsxImportSource @emotion/react */
import { Pizza } from 'data';
import { usePizzaSelected } from 'hooks';
import { pizzaAtoms } from 'modules/order/state';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import styles from './PizzaSizeItem.styles';

interface PizzaSizeItemProps {
  pizza: Pizza;
}

export const PizzaSizeItem: React.FC<PizzaSizeItemProps> = ({ pizza }) => {
  const isSelected = usePizzaSelected(pizza);
  const setPizzaSize = useSetRecoilState(pizzaAtoms.pizzaSize);
  const setPizzaPrice = useSetRecoilState(pizzaAtoms.pizzaPrice);

  function onSelectSize() {
    setPizzaSize(pizza.size);
    setPizzaPrice(pizza.price);
  }

  return (
    <div onClick={onSelectSize} css={styles.pizzaItemContainer(isSelected)}>
      <div css={styles.size(isSelected)}>{pizza.size}</div>
    </div>
  );
};
