import styled from 'styled-components';

import * as colors from '../../styles/colors';

export const Footer = styled.footer`
  color: ${colors.secondaryTextColor};
  background-color: ${colors.primaryColor};

  min-height: 58px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* TODO precisa? */
  a:link,
  a:visited {
    color: ${colors.secondaryTextColor};
  }

  span {
    font-size: 30px;
  }
`;
