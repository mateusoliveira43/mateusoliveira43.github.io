import React from 'react';

import * as S from './styles';
import * as E from '../../../config/enums';
import * as T from '../../../config/types';

/**
 * Adds the website's languages options to Bootstrap's dropdown.
 * @param changeLanguage Function to handle the website's change of language.
 * @returns List of li elements with the website's languages labels.
 */
function addLanguages(
  changeLanguage: React.MouseEventHandler<HTMLLIElement>,
): JSX.Element[] {
  const languages: JSX.Element[] = [];
  Object.entries(E.LANGUAGES_LABELS).forEach(([id, label]) => {
    languages.push(
      <li onClick={changeLanguage} className="dropdown-item" id={id} key={id}>
        <a href="#">{label}</a>
      </li>,
    );
  });
  return languages;
}

/**
 * Website's language handler button component.
 * @param properties Button's properties.
 * @returns Button element to handle, and show, website's languages.
 */
export default function ButtonLanguage(
  properties: T.buttonLanguageProperties,
): JSX.Element {
  return (
    <div className="dropdown btn-group">
      <S.Button>
        {/* TODO use font where letters have the same size (when language is changed, the button "moves") */}
        <span className="fas fa-globe-americas" /> {properties.language}
      </S.Button>
      <S.Ul>{addLanguages(properties.changeLanguage)}</S.Ul>
    </div>
  );
}
