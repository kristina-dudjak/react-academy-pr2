/** @jsxImportSource @emotion/react */
import { Topping, toppings } from 'data';
import { ToppingItem } from 'modules';
import { pizzaAtoms } from 'modules/order/state';
import { useRecoilState } from 'recoil';
import styles from './ToppingsList.styles';

export const ToppingsList: React.FC = () => {
  const [toppingsPrice, setToppingsPrice] = useRecoilState(
    pizzaAtoms.toppingsPrice,
  );

  const onSelectTopping = (topping: Topping, selected: boolean) => {
    if (selected) {
      setToppingsPrice(toppingsPrice + topping.price);
    } else {
      setToppingsPrice(toppingsPrice - topping.price);
    }
  };

  const toppingComponents = toppings.map((topping) => (
    <ToppingItem
      topping={topping}
      onSelect={onSelectTopping}
      key={topping.name}
    />
  ));
  return (
    <div>
      <div css={styles.toppingsContainer}>{toppingComponents}</div>
      <div css={styles.totalPrice}>Total price +${toppingsPrice}</div>
    </div>
  );
};
