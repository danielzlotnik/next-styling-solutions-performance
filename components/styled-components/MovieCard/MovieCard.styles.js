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

export const Title = styled.h2`
  font-size: 16px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
