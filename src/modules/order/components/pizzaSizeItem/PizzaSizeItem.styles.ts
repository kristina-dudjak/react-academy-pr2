import { css } from '@emotion/react';

function pizzaItemContainer(selected: boolean) {
  return css({
    border: '1px solid #ececf3',
    borderRadius: '36px',
    margin: '8px',
    padding: '12px 60px',
    cursor: 'pointer',
    backgroundColor: selected ? '#FFFFFF' : '#ececf3',
  });
}

function size(selected: boolean) {
  return css({
    color: selected ? '#383838' : '#8C8C8C',
  });
}

export default { pizzaItemContainer, size };
