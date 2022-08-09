import styled from 'styled-components';

import colors from '../../styles/colors';
import spaces from '../../styles/spaces';

export const Header = styled.header.attrs({
  className: 'fixed-top',
})`
  background-color: ${colors.primaryColor};
  min-height: ${spaces.headerHeight};
`;
