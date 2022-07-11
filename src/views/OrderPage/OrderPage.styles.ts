import { css } from '@emotion/react';

const wrapper = css({
  maxWidth: '800px',
  margin: '0 auto',
});

const title = css({
  fontSize: '32px',
  color: '#383838',
  textAlign: 'center',
  fontWeight: '800',
  margin: '24px 0px 0px',
});

const toppingsContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '24px 0px',
});

const totalPrice = css({
  textAlign: 'center',
});

const button = css({
  fontSize: '16px',
  border: '1px solid #dbdbdb',
  borderRadius: '36px',
  padding: '8px 24px',
  cursor: 'pointer',
  color: 'white',
  margin: 'auto',
  backgroundColor: '#b95de4',
});

const tipContainer = css({
  display: 'flex',
  flexDirection: 'column',
});

export default {
  wrapper,
  title,
  toppingsContainer,
  totalPrice,
  button,
  tipContainer,
};
