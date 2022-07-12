/** @jsxImportSource @emotion/react */
import { RandomTip } from 'modules';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './TipCounter.styles';

export const TipCounter: React.FC = () => {
  const [tip, setTip] = useState(0);
  const tipRef = useRef(0);
  const [tempTip, setTempTip] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    tipRef.current = tip;
  }, [tip]);

  useEffect(() => {
    setTimeout(() => {
      alert('TipCounter mounted');
    }, 100);
    return () => {
      console.log('Tip: ', tipRef.current);
    };
  }, []);

  function recommend() {
    for (let i = 0; i < 1000000000; i++) {}
    return tempTip;
  }

  const maxTip = useMemo(() => recommend(), [clicked]);

  return (
    <div css={styles.tipContainer}>
      <p css={styles.tip}>Tip: {tip}$</p>
      <button css={styles.button} onClick={() => setTip(tip + 1)}>
        +1$
      </button>
      <input
        type="number"
        min={0}
        css={styles.maxTipInput}
        placeholder="Enter max tip"
        onChange={(e) => {
          setTempTip(parseInt(e.target.value));
          setClicked(false);
        }}
      />
      <button css={styles.button} onClick={() => setClicked(true)}>
        Recommend tip
      </button>
      {clicked && <RandomTip maxTip={maxTip} />}
    </div>
  );
};
