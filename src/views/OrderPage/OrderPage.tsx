/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styles from './OrderPage.styles';
import { Header } from 'shared';
import {
  DiscountContainer,
  OrderCheckout,
  PizzaSizePicker,
  TipCounter,
  ToppingItem,
} from 'modules';
import { pizzas, Topping, toppings } from 'data';
import { useFinalPriceCalculator } from 'hooks';

export const OrderPage: React.FC = () => {
  const [toppingsPrice, setToppingsPrice] = useState(0);
  const [mounted, setMounted] = useState(true);
  const [selectedPizza, setSelectedPizza] = useState(pizzas[1]);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const finalPrice = useFinalPriceCalculator(
    selectedPizza.price,
    toppingsPrice,
    discountPercentage,
    quantity,
  );

  const onSelectTopping = (topping: Topping, selected: boolean) => {
    if (selected) {
      setToppingsPrice(toppingsPrice + topping.price);
    } else {
      setToppingsPrice(toppingsPrice - topping.price);
    }
  };

  const toppingComponents = toppings.map((e) => (
    <ToppingItem topping={e} onSelect={onSelectTopping} key={e.name} />
  ));

  return (
    <div css={styles.wrapper}>
      <Header />
      <div css={styles.title}>Toppings! Toppings!</div>
      <div css={styles.toppingsContainer}>{toppingComponents}</div>
      <div css={styles.totalPrice}>Total price +${toppingsPrice}</div>
      <div css={styles.title}>Pizza! Pizza! size</div>
      <PizzaSizePicker
        selectedPizza={selectedPizza}
        onSelectedPizza={setSelectedPizza}
      />
      <div css={styles.title}>Get the discount</div>
      <DiscountContainer onDiscount={setDiscountPercentage} />
      {mounted && (
        <div css={styles.tipContainer}>
          <TipCounter />
          <button css={styles.button} onClick={() => setMounted(false)}>
            Leave a tip
          </button>
        </div>
      )}
      <OrderCheckout finalPrice={finalPrice} onQuantity={setQuantity} />
    </div>
  );
};
