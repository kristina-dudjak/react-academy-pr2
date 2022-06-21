import { css } from '@emotion/react';

export const container = css({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '24px 0px',
});

export const title = css({
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '800',
  color: '#383838',
  alignSelf: 'center',
});

export const emoji = css({
  fontSize: '28px',
});

export const button = css({
  fontSize: '16px',
  border: '1px solid #dbdbdb',
  borderRadius: '36px',
  padding: '0px 24px',
  cursor: 'pointer',
  backgroundColor: 'white',
  color: '#383838',
});
