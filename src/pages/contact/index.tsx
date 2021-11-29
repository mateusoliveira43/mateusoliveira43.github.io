import React from 'react';

import * as T from '../../config/types';

function ContactPT(): JSX.Element {
  return <div>Contact PT</div>;
}

function ContactEN(): JSX.Element {
  return <div>Contact EN</div>;
}

const components: T.sectionsComponents = {
  PT: <ContactPT />,
  EN: <ContactEN />,
};

export default function Contact(properties: T.sectionsProperties): JSX.Element {
  return components[properties.language];
}
