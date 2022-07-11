import { css } from '@emotion/react';

const checkoutContainer = css({
  display: 'flex',
  justifyContent: 'space-evenly',
  border: '1px solid #F2F2F2',
  borderRadius: '56px',
  margin: '12px 0px 0px 0px',
});

const orderInfo = css({
  fontSize: '16px',
  display: 'flex',
  justifyContent: 'space-evenly',
});

const orderInfoContainer = css({
  fontSize: '16px',
  display: 'flex',
  flexDirection: 'column',
  margin: '0px 20px',
  alignSelf: 'center',
});

const quantity = css({
  fontSize: '16px',
  backgroundColor: '#ececf3',
  borderRadius: '20px',
  color: '#383838',
  padding: '8px',
  width: '40px',
  border: '1px solid #ececf3',
});

const orderText = css({
  fontSize: '12px',
  alignSelf: 'center',
  color: '#b9b9b9',
  textTransform: 'uppercase',
  margin: '4px',
});

const price = css({
  fontSize: '32px',
  color: '#b95de4',
  alignSelf: 'center',
  fontWeight: '800',
});

const line = css({
  border: '1px dashed #dbdbdb',
  margin: '84px 0px',
});

const checkoutButton = css({
  fontSize: '16px',
  border: '1px solid #b95de4',
  borderRadius: '48px',
  padding: '16px 32px',
  cursor: 'pointer',
  backgroundColor: '#b95de4;',
  color: 'white',
  margin: '68px 0px',
});

export default {
  checkoutContainer,
  orderInfo,
  orderInfoContainer,
  quantity,
  orderText,
  price,
  line,
  checkoutButton,
};
