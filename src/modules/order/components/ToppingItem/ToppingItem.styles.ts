import { css } from '@emotion/react';

function toppingContainer(selected: boolean) {
  return css({
    border: '1px solid #f2f2f',
    boxShadow: '0px 12px 16px rgb(0 0 0 / 0.1)',
    borderRadius: '56px',
    padding: '8px 8px 28px',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: selected ? '#e5c3f5' : 'white',
  });
}

const emoji = css({
  backgroundColor: 'rgb(255 255 255 / 0.3)',
  boxShadow: '0px 12px 28px rgb(0 0 0 / 0.01)',
  width: '76px',
  height: '76px',
  alignSelf: 'center',
  borderRadius: '40px',
  lineHeight: '4.5',
});

const name = css({
  alignSelf: 'center',
  padding: '10px 0px 0px',
});

export default { toppingContainer, emoji, name };
