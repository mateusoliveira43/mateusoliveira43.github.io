import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Button = styled.button.attrs({
  className: 'dropdown-toggle navbar-brand btn btn-outline-light',
  'data-toggle': 'dropdown',
  'aria-haspopup': 'true',
  'aria-expanded': 'false',
})`
  margin-right: 0;
`;

export const Ul = styled.ul.attrs({
  className: 'dropdown-menu dropdown-menu-right',
})`
  background-clip: unset;
  background-color: ${colors.primaryColor};

  .active {
    background-color: unset;
    color: ${colors.secondaryTextColor};
  }

  a:link,
  a:visited,
  a:hover {
    color: unset;
    text-decoration: unset;
  }

  li {
    color: ${colors.shadowTextColor};
    cursor: pointer;
    padding: 0.25rem 0.5rem;

    :hover,
    :active {
      background-color: unset;
      color: ${colors.secondaryTextColor};
    }
  }
`;
