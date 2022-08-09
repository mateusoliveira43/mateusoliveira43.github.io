import React from 'react';

import * as S from './styles';
import * as T from '../../config/types';
import colors from '../../styles/colors';
import Quote from '../../components/quote';
import Logo from '../../images/logo.svg';

const greeting: T.languagesMap = {
  PT: 'Bem-vindo(a)!',
  EN: 'Welcome!',
};

const body: T.languagesMap = {
  PT: 'TRABALHO EM ANDAMENTO',
  EN: 'WORK IN PROGRESS',
};

const months: T.months = {
  PT: [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ],
  EN: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

// TODO Read version from package.json
function addVersion(language: T.languagesCode): JSX.Element {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  return (
    <h5>
      <b>{language === 'PT' ? 'Versão' : 'Version'} 3.0.0:</b>{' '}
      {language === 'PT'
        ? `atualizado em ${day} de ${months[language][month]} de ${year}.`
        : `updated in ${months[language][month]} ${day}, ${year}.`}
    </h5>
  );
}

function addColorPalette(): JSX.Element[] {
  const colorsForPalette: JSX.Element[] = [];
  Object.values(colors).forEach((color) => {
    colorsForPalette.push(
      <div key={color} style={{ backgroundColor: color, width: '100%' }} />,
    );
  });
  return colorsForPalette;
}

function addWebsiteInfo(language: T.languagesCode): JSX.Element {
  return (
    <p>
      {language === 'PT' ? 'Este site é um site do ' : 'This is a '}
      <a
        href={`https://docs.github.com/${language.toLocaleLowerCase()}/pages`}
        target="_blank"
        rel="noreferrer">
        GitHub Pages
      </a>
      {language === 'PT'
        ? '. Você encontra o código fonte do site '
        : " website. You find the website's source code "}
      <a
        href="https://github.com/mateusoliveira43/mateusoliveira43.github.io"
        target="_blank"
        rel="noreferrer">
        {language === 'PT' ? 'aqui' : 'here'}
      </a>
      .
    </p>
  );
}

export default function Home(properties: T.currentLanguage): JSX.Element {
  return (
    <React.Fragment>
      <div className="row row-cols-1 row-cols-lg-2 p-1">
        <div className="col d-flex justify-content-center p-1">
          <S.Img
            src={Logo}
            alt={
              properties.language === 'PT'
                ? 'Logotipo do site: letra M sobrepondo o número 43, passando a mensagem M43, dentro de um círculo verde'
                : "Website's logo: letter M overlapping the number 43, passing the message M43, inside a green circle"
            }
          />
        </div>
        <div className="col p-2">
          <h1>{greeting[properties.language]}</h1>
          <hr />
          {addVersion(properties.language)}
          <hr />
          <h1>{body[properties.language]}</h1>
          <S.palette>{addColorPalette()}</S.palette>
          {addWebsiteInfo(properties.language)}
        </div>
      </div>
      <Quote
        language={properties.language}
        line={"If you're good at something, never do it for free."}
        character="The Joker"
        title="THE Dark Knight"
        director="Christopher Nolan"
        company="WarnerBros. Pictures"
        year={2008}
      />
    </React.Fragment>
  );
}
