import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  html {
    height: 100%;
  }

  body, #root {
    background: unset;
    color: unset;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
    width: 100%;
  }

  .light-mode {
    background: ${colors.primaryBackgroundColor};
    color: ${colors.primaryTextColor};

    hr {
      border-top: 2px solid ${colors.primaryColor};
    }

    div.quote {
      background-color: ${colors.primaryColor};
      color: ${colors.secondaryTextColor};
    }
  }

  .dark-mode {
    background: ${colors.darkerGray};
    color: ${colors.secondaryTextColor};

    hr {
      border-top: 2px solid ${colors.primaryBackgroundColor};
      box-shadow: 0 2px 10px 2px ${colors.primaryColor},  0 -2px 10px 2px ${colors.primaryColor};
    }

    div.quote {
      border: 2px solid ${colors.primaryBackgroundColor};
      box-shadow: inset 0 0 15px 2px ${colors.primaryColor}, 0 0 15px 2px ${colors.primaryColor};
    }
  }

  a {
    cursor: pointer;
  }

  section {
    a:link,
    a:visited {
      color: ${colors.primaryColor};
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  /* ************************* Bootstrap override ************************** */
  .nav-item:hover {
    color: ${colors.secondaryTextColor};
  }

  button:focus,
  .btn-outline-light.focus,
  .btn-outline-light:focus  {
    outline: 5px solid ${colors.primaryTextColor};
  }

  .btn-outline-light:not(:disabled):not(.disabled).active,
  .btn-outline-light:not(:disabled):not(.disabled):active,
  .show > .btn-outline-light.dropdown-toggle {
    color: ${colors.primaryColor};
  }

  .btn-outline-light.focus,
  .btn-outline-light:focus,
  .btn-outline-light:not(:disabled):not(.disabled).active:focus,
  .btn-outline-light:not(:disabled):not(.disabled):active:focus,
  .show > .btn-outline-light.dropdown-toggle:focus {
    box-shadow: none;
  }

  .navbar-dark .navbar-brand,
  .navbar-dark .navbar-nav .nav-link:hover {
    color: ${colors.secondaryTextColor};
  }

  .navbar-dark .navbar-brand:hover,
  .navbar-dark .navbar-brand:active {
    background-color: ${colors.secondaryTextColor};
    color: ${colors.primaryColor};
  }

  .navbar-dark .navbar-nav .nav-link {
    color: ${colors.shadowTextColor};
  }

  .navbar-dark .navbar-toggler {
    border-color: ${colors.secondaryTextColor};
    color: ${colors.secondaryTextColor};
  }

  .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }

  .navbar-brand {
    margin-right: 0;
  }
`;
