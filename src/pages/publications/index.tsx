import React from 'react';

import * as T from '../../config/types';

function PublicationsPT(): JSX.Element {
  return <div>Publications PT</div>;
}

function PublicationsEN(): JSX.Element {
  return <div>Publications EN</div>;
}

const components: T.sectionsComponents = {
  PT: <PublicationsPT />,
  EN: <PublicationsEN />,
};

export default function Publications(
  properties: T.sectionsProperties,
): JSX.Element {
  return components[properties.language];
}
