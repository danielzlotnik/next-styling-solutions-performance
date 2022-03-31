import styled from 'styled-components';

export const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  width: 212px;
  color: white;
  padding: 4px 16px;
  text-decoration: none;
`;

export const Image = styled.div`
  background-size: cover;
  width: 182px;
  height: 268px;
`;

export const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 16px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${p => p.align || 'center'};
  flex-direction: ${p => p.direction || 'row'};
  justify-content: ${p => p.justify || 'center'}; ;
`;
