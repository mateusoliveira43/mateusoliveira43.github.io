import React from 'react';

import * as S from './styles';
import * as E from '../../config/enums';

const CURRENT_YEAR = new Date().getFullYear();

function addSocialMedias(): JSX.Element[] {
  const socialMedias: JSX.Element[] = [];
  Object.entries(E.SOCIAL_MEDIAS_LINKS).forEach(([id, link]) => {
    socialMedias.push(
      <a key={id} href={link} target="_blank" rel="noreferrer" className="ml-2">
        <span className={`fab fa-${id}`} />
      </a>,
    );
  });
  return socialMedias;
}

export default function Footer(): JSX.Element {
  return (
    <S.Footer>
      &copy; 2020-{CURRENT_YEAR} Mateus Oliveira
      {addSocialMedias()}
    </S.Footer>
  );
}
