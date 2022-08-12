import React from 'react';

import * as S from './styles';
import * as T from '../../config/types';
import colors from '../../styles/colors';
import Quote from '../../components/quote';
import Logo from '../../images/logo.svg';

const GREETING: T.languagesMap = {
  PT: 'Bem-vindo(a)!',
  EN: 'Hello there!',
};

const BODY: T.sectionsComponents = {
  PT: (
    <React.Fragment>
      <p>
        Aqui no meu site pessoal você encontra minhas informações de contato e
        interesses profissionais e pessoais!
      </p>
      <p>
        O site e o logotipo foram desenvolvidos por mim, apesar de eu não ser da
        área de Design. Em relação as cores, quis ser minimalista e elas foram
        escolhidas por conta da minha paixão pelo meu time de futebol, o Goiás
        Esporte Clube. Esse amor também influenciou no logotipo, que é a
        sobreposição da letra M, inicial do meu nome, com o número 43, fazendo
        alusão ao ano de 1943, quando o time foi fundado.
      </p>
    </React.Fragment>
  ),
  EN: (
    <React.Fragment>
      <p>
        Here in my personal website you find my contact information and my
        professional and personal interests.
      </p>
      <p>
        The site and the logo were developed by me, although I am not from the
        design area. About the colors, I wanted to be minimalist and they were
        chosen because of my passion for my soccer team, Goiás Esporte Clube.
        This love also influenced the logo, which is the overlap of the letter
        M, initial of my name, with the number 43, which refers to the year of
        1943, when the team was founded.
      </p>
    </React.Fragment>
  ),
};

const MONTHS: T.months = {
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
// TODO create test for date
function addVersion(language: T.languagesCode): JSX.Element {
  const day = 11;
  const month = 8;
  const year = 2022;
  return (
    <h5>
      <b>{language === 'PT' ? 'Versão' : 'Version'} 3.0.0:</b>{' '}
      {language === 'PT'
        ? `atualizado em ${day} de ${MONTHS[language][month - 1]} de ${year}.`
        : `updated in ${MONTHS[language][month - 1]} ${day}, ${year}.`}
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
          <h1>{GREETING[properties.language]}</h1>
          <hr />
          {addVersion(properties.language)}
          <hr />
          {BODY[properties.language]}
          <S.palette>{addColorPalette()}</S.palette>
          {addWebsiteInfo(properties.language)}
        </div>
      </div>
      <Quote
        language={properties.language}
        line={'Hello there!'}
        character="Obi-Wan Kenobi"
        title="STAR Wars: Episode III - Revenge of the Sith"
        director="George Lucas"
        company="20th Century Fox"
        year={2005}
      />
    </React.Fragment>
  );
}
