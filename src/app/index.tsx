import React, { useEffect, useState } from 'react';

import * as S from './styles';
import Footer from '../components/footer';
import Header from '../components/header';
import * as E from '../config/enums';
import * as T from '../config/types';
import About from '../pages/about';
import Contact from '../pages/contact';
import Home from '../pages/home';
import GlobalStyle from '../styles/GlobalStyles';

const getSection = (
  language: T.languagesCode,
): T.sectionsLanguagesComponents => ({
  home: <Home language={language} />,
  about: <About language={language} />,
  contact: <Contact language={language} />,
});

export default function App(): JSX.Element {
  const [activeSection, setActiveSection] = useState<T.sections>('home');
  const [language, setLanguage] = useState<T.languagesCode>('PT');
  const [mode, setMode] = useState<T.mode>('dark-mode');
  const [section, setSection] = useState<JSX.Element>(
    <Home language={language} />,
  );

  function changeSection(selectedSection: T.sections): void {
    document.querySelector('#navbarSupportedContent')?.classList.remove('show');
    document.querySelector(`#${activeSection}`)?.classList.remove('active');
    document.querySelector(`#${selectedSection}`)?.classList.add('active');
    setSection(getSection(language)[selectedSection]);
    setActiveSection(selectedSection);
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
        language={language}
      />
      <main className="my-auto">
        <S.Section>{section}</S.Section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
