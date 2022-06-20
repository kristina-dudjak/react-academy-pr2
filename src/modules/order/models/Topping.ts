interface Topping {
  name: string;
  emoji: string;
  price: number;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default Topping;
