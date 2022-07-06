import { css } from '@emotion/react';

const pizzaSizeContainer = css({
  display: 'flex',
  justifyContent: 'space-evenly',
  padding: '24px 0px',
  margin: '24px 160px',
  backgroundColor: '#ececf3',
  borderRadius: '56px',
  textAlign: 'center',
});

const pizzaSize = css({
  color: '#8c8c8c',
  fontSize: '16px',
});

export default { pizzaSizeContainer, pizzaSize };
