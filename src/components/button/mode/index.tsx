import React from 'react';

import * as T from '../../../config/types';

export default function ButtonMode(
  properties: T.buttonModeProperties,
): JSX.Element {
  return (
    <button
      onClick={properties.changeMode}
      className="navbar-brand btn btn-outline-light">
      <span className="fas fa-adjust" />
    </button>
  );
}
