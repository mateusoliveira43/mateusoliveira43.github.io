import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { createGlobalStyle } from 'styled-components';

import * as colors from './colors';

export default createGlobalStyle`
  html {
    height: 100%;
  }
  body, #root {
    color: unset;
    background: unset;

    width: 100%;
    height: 100%;
    min-height: 100%;

    display: flex;
    flex-direction: column;
  }

  .light-mode {
    color: ${colors.primaryTextColor};
    background: ${colors.primaryBackgroundColor};
  }

  .dark-mode {
    color: ${colors.secondaryTextColor};
    background: ${colors.darkerGray};
  }

  a {
    cursor: pointer;
  }

  a:link,
  a:visited {
    color: ${colors.primaryTextColor};
    text-decoration: none;
  }

  a:hover {
    color: ${colors.secondaryTextColor};
  }

  /* ************************* Bootstrap override ************************** */
  .nav-item:hover {
    color: ${colors.secondaryTextColor};
  }

  button:focus,
  .btn-outline-light.focus,
  .btn-outline-light:focus {
    outline: 1px dotted;
    outline: 5px auto ${colors.secondaryTextColor};
  }

  .btn-outline-light:not(:disabled):not(.disabled).active,
  .btn-outline-light:not(:disabled):not(.disabled):active,
  .show > .btn-outline-light.dropdown-toggle {
    color: ${colors.primaryColor};
  }

  .btn-outline-light.focus,
  .btn-outline-light:focus {
    box-shadow: none;
  }

  .btn-outline-light:not(:disabled):not(.disabled).active:focus,
  .btn-outline-light:not(:disabled):not(.disabled):active:focus,
  .show > .btn-outline-light.dropdown-toggle:focus {
    box-shadow: none;
  }

  .navbar-dark .navbar-brand {
    color: ${colors.secondaryTextColor};
  }

  .navbar-dark .navbar-brand:hover,
  .navbar-dark .navbar-brand:active {
    color: ${colors.primaryColor};
    background-color: ${colors.secondaryTextColor};
  }

  .navbar-dark .navbar-nav .nav-link {
    color: ${colors.shadowTextColor};
  }

  .navbar-dark .navbar-nav .nav-link:focus,
  .navbar-dark .navbar-nav .nav-link:hover {
    color: ${colors.secondaryTextColor};
  }

  .navbar-dark .navbar-toggler {
    color: ${colors.secondaryTextColor};
    border-color: ${colors.secondaryTextColor};
  }

  .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }

  .navbar-brand {
    margin-right: 0;
  }
`;
