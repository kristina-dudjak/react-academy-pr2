import { css } from '@emotion/react';

const discountContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px',
  margin: '24px 160px',
  backgroundColor: '#ececf3',
  borderRadius: '56px',
});

const discountCode = css({
  color: '#8c8c8c',
  fontSize: '16px',
  alignSelf: 'center',
  margin: '0px 24px',
});

const discountButton = css({
  fontSize: '16px',
  border: '1px solid #dbdbdb',
  borderRadius: '32px',
  padding: '18px 24px',
  cursor: 'pointer',
  backgroundColor: '#ececf3',
  color: '#383838',
});

export default { discountContainer, discountCode, discountButton };
