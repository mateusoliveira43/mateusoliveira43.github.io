import styled from 'styled-components';

import spaces from '../styles/spaces';

export const Section = styled.section.attrs({
  className: 'container my-4',
})`
  padding-top: ${spaces.headerHeight};
`;
