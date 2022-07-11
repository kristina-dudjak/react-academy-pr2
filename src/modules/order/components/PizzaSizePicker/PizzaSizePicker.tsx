/** @jsxImportSource @emotion/react */
import { Pizza, pizzas } from 'data';
import { PizzaSizeItem } from 'modules';
import React from 'react';
import styles from './PizzaSizePicker.styles';

interface PizzaSizePickerProps {
  selectedPizza: Pizza;
  onSelectedPizza: (pizza: Pizza) => void;
}

export const PizzaSizePicker: React.FC<PizzaSizePickerProps> = (props) => {
  const onSelectPizza = (pizza: Pizza, selected: boolean) => {
    if (selected) {
      props.onSelectedPizza(pizza);
    }
  };
  const pizzaSizeComponents = pizzas.map((e) => (
    <PizzaSizeItem
      pizza={e}
      selected={e === props.selectedPizza}
      onSelect={onSelectPizza}
      key={e.size}
    />
  ));
  return <div css={styles.pizzaSizeContainer}>{pizzaSizeComponents}</div>;
};
