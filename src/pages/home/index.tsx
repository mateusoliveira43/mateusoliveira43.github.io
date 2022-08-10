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
  PT: `Aqui no meu site pessoal você encontra minhas informações de contato, trabalho,
  projetos pessoais, bobbies entre outras coisas.

  Minha motivação inicial para ter um site veio anos atrás, quando
  queria ter um local pra disponibilizar meus modelos LaTeX ao público.
  Hoje em dia minha motivação mudou, e o objetivo com o site é mostrar
  um pouco de mim e minhas habilidades como programador ao mundo.

  O site foi desenvolvido usando React[link] e TypeScript[link] com o objetivo
  de fazer uma SPA (sigla do inglês "Single Page Application", que
  significa uma aplicação/aplicativo de página única, isto é, existe
  apenas uma página web e não uma para cada seção do site).

  O site e logo foram desenvolvidos por mim, apesar de eu não ser da área de Design.
  Em relação as cores, quis ser minimalista e elas foram escolhidas por conta da
  minha paixão pelo meu time de futebol, o Goiás Esporte Clube. Essa paixão também
  influenciou no logo, que é a sobreposição da letra M, inicial do meu nome,com o
  número 43, fazendo alusão ao ano de 1943, quando o Goiás foi fundado.`,
  EN: 'WORK IN PROGRESS',
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
  const day = 10;
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
