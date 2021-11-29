import styled from 'styled-components';

import * as colors from '../../../styles/colors';

export const Button = styled.button`
  margin-right: 0;
`;

export const Ul = styled.ul`
  background-color: ${colors.primaryColor};

  background-clip: unset;

  .active {
    color: ${colors.secondaryTextColor};
    background-color: unset;
  }

  li {
    color: ${colors.shadowTextColor};

    padding: 0.25rem 0.5rem;

    cursor: pointer;

    :hover,
    :active {
      color: ${colors.secondaryTextColor};
      background-color: unset;
    }
  }
`;
