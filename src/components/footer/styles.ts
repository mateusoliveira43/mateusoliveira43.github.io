import styled from 'styled-components';

import colors from '../../styles/colors';

export const Footer = styled.footer.attrs({
  className: 'px-3',
})`
  align-items: center;
  background-color: ${colors.primaryColor};
  color: ${colors.secondaryTextColor};
  display: flex;
  justify-content: center;
  min-height: 58px;

  a:link,
  a:visited {
    color: ${colors.secondaryTextColor};
  }

  span {
    font-size: 30px;
  }
`;
