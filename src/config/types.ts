export interface buttonLanguageProperties {
  changeLanguage: React.MouseEventHandler<HTMLLIElement>;
  languageCode: languagesCode;
}

export interface currentLanguage {
  language: languagesCode;
}

export interface buttonModeProperties {
  changeMode: React.MouseEventHandler<HTMLButtonElement>;
}

export interface headerProperties
  extends buttonLanguageProperties,
    buttonModeProperties {
  changeSection: changeSection;
}

export interface movieQuoteProperties extends currentLanguage {
  line: string;
  character: string;
  title: string;
  director: string;
  company: string;
  year: number;
}

export type changeSection = (section: sections) => void;

export type languages = {
  // TODO nome bosta
  [key in languagesCode]: string;
};

export type languagesCode = 'PT' | 'EN';

export type mode = 'dark-mode' | 'light-mode';

export type sections =
  | 'home'
  | 'about'
  | 'publications'
  | 'templates'
  | 'games'
  | 'contact';

export type sectionsComponents = {
  [key in languagesCode]: JSX.Element;
};

export type sectionsLabels = {
  [key in sections]: languages;
};

export type sectionsLanguagesComponents = {
  [key in sections]: JSX.Element;
};

export type sectionsProperties = {
  language: languagesCode;
};

export type socialMedias = {
  github: string;
  linkedin: string;
  youtube: string;
};
