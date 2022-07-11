import { css } from '@emotion/react';

const tipContainer = css({
  display: 'flex',
  justifyContent: 'center',
  margin: '8px',
});

const tip = css({
  fontSize: '20px',
});

const maxTipInput = css({
  color: '#383838',
  fontSize: '16px',
  border: '1px solid #ececf3',
  borderRadius: '32px',
  backgroundColor: '#ececf3',
  margin: '12px 4px',
  padding: '8px',
});

const button = css({
  margin: '16px',
  fontSize: '16px',
  border: '1px solid #dbdbdb',
  borderRadius: '24px',
  padding: '0px 12px',
  cursor: 'pointer',
  backgroundColor: '#ececf3',
  color: '#383838',
});

export default { tipContainer, tip, button, maxTipInput };
