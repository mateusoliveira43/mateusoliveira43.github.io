import React from 'react';

import * as T from '../../config/types';

function TemplatesPT(): JSX.Element {
  return <div>Templates PT</div>;
}

function TemplatesEN(): JSX.Element {
  return <div>Templates EN</div>;
}

const components: T.sectionsComponents = {
  PT: <TemplatesPT />,
  EN: <TemplatesEN />,
};

export default function Templates(
  properties: T.sectionsProperties,
): JSX.Element {
  return components[properties.language];
}
