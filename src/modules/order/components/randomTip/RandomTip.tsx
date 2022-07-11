import { useEffect } from 'react';

interface RandomTipProps {
  maxTip: number;
}

export const RandomTip: React.FC<RandomTipProps> = (props) => {
  useEffect(() => {
    console.log(Math.floor(Math.random() * (props.maxTip + 1)));
  }, [props.maxTip]);

  return <div></div>;
};
