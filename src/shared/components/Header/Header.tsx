/** @jsxImportSource @emotion/react */
import React from 'react';
import { button, container, emoji, title } from './Header.styles';

export const Header: React.FC = () => {
  return (
    <div css={container}>
      <span css={title}>Pizz-á-tron</span>
      <span css={emoji}>🍕</span>
      <button css={button}>Log out</button>
    </div>
  );
};

export default {};
