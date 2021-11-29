import React from 'react';

import * as T from '../../config/types';

function GamesPT(): JSX.Element {
  return <div>Games PT</div>;
}

function GamesEN(): JSX.Element {
  return <div>Games EN</div>;
}

const components: T.sectionsComponents = {
  PT: <GamesPT />,
  EN: <GamesEN />,
};

export default function Games(properties: T.sectionsProperties): JSX.Element {
  return components[properties.language];
}
