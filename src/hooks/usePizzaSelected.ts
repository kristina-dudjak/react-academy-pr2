import { Pizza } from 'data';
import { pizzaSelector } from 'modules/order/state';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

export const usePizzaSelected = (pizza: Pizza) => {
  const selectedPizza = useRecoilValue(pizzaSelector.pizza);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(pizza.size === selectedPizza.size);
  }, [selectedPizza]);

  return selected;
};
