/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './Header.styles';

export const Header: React.FC = () => {
  return (
    <div css={styles.container}>
      <span css={styles.title}>Pizz-á-tron</span>
      <span css={styles.emoji}>🍕</span>
      <button css={styles.button}>Log out</button>
    </div>
  );
};
