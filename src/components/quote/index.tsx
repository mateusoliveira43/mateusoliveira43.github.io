import React from 'react';

import * as S from './styles';
import * as T from '../../config/types';

// const quoteLanguage = {
//   PT: 'em',
//   EN: 'in',
// }; // TODO tipar

// TODO fazer return único e lógica de língua nele
export default function Quote(properties: T.movieQuoteProperties): JSX.Element {
  if (properties.language === 'PT') {
    return (
      <S.Div className="p-2">
        <q>{properties.line}</q>
        <p>
          {properties.character} em <cite>{properties.title}</cite>. Direção de{' '}
          {properties.director}. {properties.company}, {properties.year}.
        </p>
      </S.Div>
    );
  }
  return (
    <S.Div className="p-2">
      <q>{properties.line}</q>
      <p>
        {properties.character} in <cite>{properties.title}</cite>. Directed by{' '}
        {properties.director}. {properties.company}, {properties.year}.
      </p>
    </S.Div>
  );
}
