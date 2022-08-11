import React from 'react';

import * as S from './styles';
import * as T from '../../config/types';

const TITLE: T.languagesMap = {
  PT: 'Contato',
  EN: 'Contact',
};

function addSocialMedia(
  link: string,
  icon: string,
  title: string,
  description: string,
  isBrandIcon = true,
): JSX.Element {
  return (
    <React.Fragment>
      <S.Column>
        <S.Anchor href={link} target="_blank" rel="noreferrer">
          <span
            className={`fa${isBrandIcon ? 'b' : '-solid'} fa-${icon} mr-2`}
          />
          {title}
        </S.Anchor>
        <p>{description}</p>
      </S.Column>
    </React.Fragment>
  );
}

export default function Contact(properties: T.currentLanguage): JSX.Element {
  return (
    <React.Fragment>
      <h1 className="mb-4">{TITLE[properties.language]}</h1>

      <div className="row row-cols-2 row-cols-lg-3 p-1">
        {addSocialMedia(
          'https://github.com/mateusoliveira43',
          'github',
          properties.language === 'PT'
            ? 'Meu perfil do GitHub'
            : 'My GitHub profile',
          properties.language === 'PT'
            ? 'Onde você encontra meus projetos pessoais. Dê uma estrela naqueles que gostar!'
            : 'Where you find my personal projects. Give a star on those you like!',
        )}
        {addSocialMedia(
          'https://www.linkedin.com/in/mateusoliveira43/',
          'linkedin',
          properties.language === 'PT'
            ? 'Meu perfil do Linkedin'
            : 'My Linkedin profile',
          properties.language === 'PT'
            ? 'Onde você encontra sobre minha carreira e eventos que participo.'
            : 'Where you find about my career and events I participate.',
        )}
        {addSocialMedia(
          'https://twitter.com/mateusolivei43',
          'twitter',
          properties.language === 'PT'
            ? 'Meu perfil do Twitter'
            : 'My Twitter profile',
          properties.language === 'PT'
            ? 'Onde eu mais falo sobre programação e meus projetos pessoais.'
            : 'Where I most talk about programming and my personal projects.',
        )}
        {addSocialMedia(
          'https://www.youtube.com/channel/UCAXCKVHXg5weD2zqFJ056QQ',
          'youtube',
          properties.language === 'PT'
            ? 'Meu canal do YouTube'
            : 'My YouTube channel',
          properties.language === 'PT'
            ? 'Onde você pode conferir minha indicação para canais incríveis!'
            : 'Where you can check my indication to awesome channels!',
        )}
        {addSocialMedia(
          'http://lattes.cnpq.br/7572519952454058',
          'address-book',
          properties.language === 'PT'
            ? 'Meu Curriculum Lattes'
            : 'My Curriculum Lattes',
          properties.language === 'PT'
            ? 'Onde você encontra sobre minha formação acadêmica e contribuições de pesquisa.'
            : 'Where you find about my academic education and research contributions.',
          false,
        )}
        {addSocialMedia(
          `https://raw.githubusercontent.com/mateusoliveira43/CVs/master/CV_Mateus_${properties.language}.pdf`,
          'address-card',
          properties.language === 'PT' ? 'Meu currículo' : 'My resume',
          properties.language === 'PT'
            ? 'Onde você encontra um resumo da minha experiência profissional no formato PDF.'
            : 'Where you find a summary of my professional experience in PDF format.',
          false,
        )}
      </div>
    </React.Fragment>
  );
}
