import React from 'react';

import * as S from './styles';
import ButtonLanguage from '../button/language';
import ButtonMode from '../button/mode';
import * as E from '../../config/enums';
import * as T from '../../config/types';

/**
 * Adds the website's sections options to Bootstrap's navbar.
 * @param changeSection Function to handle the website's change of section.
 * @param language Current language.
 * @returns List of li elements with the website's sections labels.
 */
function addSections(
  changeSection: T.changeSection,
  language: T.languagesCode,
): JSX.Element[] {
  const sections: JSX.Element[] = [];
  Object.entries(E.SECTIONS_LABELS).forEach(([id, label]) => {
    sections.push(
      <li className="nav-item" id={id} key={id}>
        <a
          href="#"
          className="nav-link ml-0"
          onClick={() => changeSection(id as T.sections)}>
          {label[language]}
        </a>
      </li>,
    );
  });
  return sections;
}

/**
 * Website's header component, with nav and buttons.
 * @param properties Sections and Buttons properties.
 * @returns Header element.
 */
export default function Header(properties: T.headerProperties): JSX.Element {
  return (
    <S.Header>
      <nav className="navbar navbar-expand-md navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded="false"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="order-md-last">
          <ButtonMode changeMode={properties.changeMode} />
          <ButtonLanguage
            changeLanguage={properties.changeLanguage}
            language={properties.language}
          />
        </span>
        <div
          role="navigation"
          className="collapse navbar-collapse"
          id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {addSections(properties.changeSection, properties.language)}
          </ul>
        </div>
      </nav>
    </S.Header>
  );
}
