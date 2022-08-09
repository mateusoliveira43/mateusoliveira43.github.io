export interface buttonLanguageProperties extends currentLanguage {
  changeLanguage: React.MouseEventHandler<HTMLLIElement>;
}

export interface buttonModeProperties {
  changeMode: React.MouseEventHandler<HTMLButtonElement>;
}

export interface currentLanguage {
  language: languagesCode;
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

export type languagesMap = {
  [key in languagesCode]: string;
};

export type months = {
  [key in languagesCode]: string[];
};

export type languagesCode = 'PT' | 'EN';

export type mode = 'dark-mode' | 'light-mode';

export type sections = 'home' | 'about' | 'contact';

export type sectionsComponents = {
  [key in languagesCode]: JSX.Element;
};

export type sectionsLabels = {
  [key in sections]: languagesMap;
};

export type sectionsLanguagesComponents = {
  [key in sections]: JSX.Element;
};

export type socialMedias = {
  github: string;
  linkedin: string;
  twitter: string;
  // youtube: string;
};
