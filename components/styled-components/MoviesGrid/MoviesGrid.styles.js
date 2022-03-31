import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, 268px);
  grid-template-rows: auto;
  column-gap: 24px;
  row-gap: 16px;
  max-width: 1200px;
  margin: 72px auto;
  background: #15141a;
`;
