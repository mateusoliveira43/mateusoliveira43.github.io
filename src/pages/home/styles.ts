import styled from 'styled-components';

export const Img = styled.img`
  min-width: 100px;
  width: 70%;
`;

export const palette = styled.div.attrs({
  className: 'my-2',
})`
  display: flex;
  height: 30px;
  justify-content: space-between;
`;
