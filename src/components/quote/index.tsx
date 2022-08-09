import React from 'react';

import * as S from './styles';
import * as T from '../../config/types';

const preposition: T.languagesMap = {
  PT: 'em ',
  EN: 'in ',
};

const directedBy: T.languagesMap = {
  PT: 'Direção de ',
  EN: 'Directed by ',
};

// TODO find a reference on how to quote character lines and add it here
export default function Quote(properties: T.movieQuoteProperties): JSX.Element {
  return (
    <S.Div>
      <q>{properties.line}</q>
      <p className="pt-2">
        {properties.character} {preposition[properties.language]}
        <cite>{properties.title}</cite>. {directedBy[properties.language]}
        {properties.director}. {properties.company}, {properties.year}.
      </p>
    </S.Div>
  );
}
