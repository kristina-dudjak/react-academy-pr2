import { css } from '@emotion/react';

const container = css({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '24px 0px',
});

const title = css({
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '800',
  color: '#383838',
  alignSelf: 'center',
});

const emoji = css({
  fontSize: '28px',
});

const button = css({
  fontSize: '16px',
  border: '1px solid #dbdbdb',
  borderRadius: '36px',
  padding: '0px 24px',
  cursor: 'pointer',
  backgroundColor: 'white',
  color: '#383838',
});

export default { container, title, emoji, button };
