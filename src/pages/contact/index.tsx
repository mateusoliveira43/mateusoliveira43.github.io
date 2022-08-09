import React from 'react';

import * as T from '../../config/types';

const body: T.languagesMap = {
  PT: 'TRABALHO EM ANDAMENTO',
  EN: 'WORK IN PROGRESS',
};

export default function Contact(properties: T.currentLanguage): JSX.Element {
  return (
    <h1 className="d-flex justify-content-center">
      {body[properties.language]}
    </h1>
  );
}
