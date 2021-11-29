import React, { useEffect, useState } from 'react';

import * as S from './styles';
import Footer from '../components/footer';
import Header from '../components/header';
import * as E from '../config/enums';
import * as T from '../config/types';
import About from '../pages/about';
import Contact from '../pages/contact';
import Games from '../pages/games';
import Home from '../pages/home';
import Publications from '../pages/publications';
import Templates from '../pages/templates';
import GlobalStyle from '../styles/GlobalStyles';

const getSection = (
  language: T.languagesCode,
): T.sectionsLanguagesComponents => ({
  home: <Home language={language} />,
  about: <About language={language} />,
  publications: <Publications language={language} />,
  templates: <Templates language={language} />,
  games: <Games language={language} />,
  contact: <Contact language={language} />,
});

export default function App(): JSX.Element {
  const [activeSection, setActiveSection] = useState<T.sections>('home');
  const [language, setLanguage] = useState<T.languagesCode>('PT');
  const [mode, setMode] = useState<T.mode>('dark-mode');
  const [section, setSection] = useState<JSX.Element>(
    <Home language={language} />,
  );

  function changeSection(section: T.sections): void {
    // TODO ver se precisa refatorar aqui
    document.querySelector('#navbarSupportedContent')?.classList.remove('show');
    document.querySelector(`#${activeSection}`)?.classList.remove('active');
    document.querySelector(`#${section}`)?.classList.add('active');
    setSection(getSection(language)[section]);
    setActiveSection(section);
  }

  function changeMode(): void {
    document.body.classList.remove(`${mode}`);
    const newMode = mode === 'light-mode' ? 'dark-mode' : 'light-mode';
    document.body.classList.add(`${newMode}`);
    setMode(newMode);
  }

  function changeLanguage(event: React.MouseEvent): void {
    event.preventDefault();

    setLanguage(event.currentTarget.id as T.languagesCode);
    document.documentElement.setAttribute(
      'lang',
      E.LANGUAGES_HTML_CODES[event.currentTarget.id as T.languagesCode],
    );
    document.querySelector(`#${language}`)?.classList.remove('active');
    document
      .querySelector(`#${event.currentTarget.id}`)
      ?.classList.add('active');
    changeSection(activeSection);
  }

  useEffect(() => {
    document.querySelector(`#${activeSection}`)?.classList.add('active');
    document.querySelector(`#${language}`)?.classList.add('active');
    document.documentElement.setAttribute(
      'lang',
      E.LANGUAGES_HTML_CODES[language],
    );
    document.body.classList.add(`${mode}`);

    setSection(getSection(language)[activeSection]);
  }, [activeSection, language, mode]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header
        changeSection={changeSection}
        changeMode={changeMode}
        changeLanguage={changeLanguage}
        languageCode={language}
      />
      <main className="mt-auto mb-auto">
        <S.Section className="container mt-4 mb-4">{section}</S.Section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
