import React from 'react';

import * as E from '../../config/enums';
import * as T from '../../config/types';
import Quote from '../../components/quote';

const PROFESSIONAL: T.sectionsComponents = {
  PT: (
    <React.Fragment>
      <p>
        Sou um desenvolvedor de software e formado em Matemática. A linguagem
        que mais gosto é <b>Python</b>, mas também tenho experiência com{' '}
        <b>JavaScript</b> (e TypeScript), <b>Docker</b>, <b>SQL</b> e, claro,{' '}
        <b>Git</b>. Gosto das áreas de qualidade e automação, e também tenho
        experiência com desenvolvimento Web. Gosto de trabalhar com o sistema
        operacional <b>Linux</b>. Sou pró-ativo, detalhista, determinado e estou
        sempre buscando me aprimorar e aprender mais!
      </p>
      <p>
        Eu queria trabalhar com programação desde o ano anterior ao de início da
        minha graduação, quando tive o sonho de ser desenvolvedor de jogos
        digitais. Por medo de não me dar bem na faculdade da área (não tinha
        contato com computador na época), eu escolhi o caminho mais seguro, que
        foi fazer a faculdade de Matemática, o qual sempre foi minha disciplina
        favorita no colégio. Felizmente, desde o primeiro ano de graduação
        (2014), eu tive contato com programação, tanto com <b>MATLAB</b> quanto
        com <b>LaTeX</b>.
      </p>
      <p>
        Involuntariamente (provavelmente alimentando meu sonho esquecido), eu
        fui trilhando minha carreira de programador na graduação. Sempre peguei
        as matérias voltadas a matemática aplicada e bolsas que envolviam
        programação. Por conta de uma dessas bolsas (2016), eu aprendi a
        importância sobre <b>código limpo</b>. Devia escrever a n-ésima edição
        de uma revista, e a ideia era usar o código da edição anterior, e
        escrever em cima. Isso sendo feito por vários e vários anos. A
        quantidade de duplicação e falta de automação era enorme. Então eu
        decidi escrever um modelo e uma documentação antes de escrever a edição
        daquele ano.
      </p>
      <p>
        Quando me formei em 2020, ainda estava indeciso em o que fazer, e
        decidir fazer o mestrado também em matemática, novamente seguindo o
        caminho seguro. Por conta da pandemia, o mestrado parou por alguns
        meses. Decidi estudar programação nesse período, fazendo cursos de{' '}
        <b>Python</b> e <b>JavaScript</b>. Após tomar coragem, comecei a me
        candidatar a vagas de desenvolvedor de software até conseguir minha
        primeira vaga ainda naquele ano.
      </p>
      <p>
        Também em 2020, instalei o sistema operacional <b>Linux</b> pela
        primeira vez (o qual uso até hoje). Isso foi importante para vencer meu
        medo de usar um interpretador de linha de comando ao invés de interfaces
        gráficas. E isso é algo que levo para minha carreira: não ter medo. Medo
        me impediu de viver meu sonho de ser desenvolvedor antes, e não vou
        deixar ele me atrapalhar novamente.
      </p>
    </React.Fragment>
  ),
  EN: (
    <React.Fragment>
      <p>
        I am a software developer and former mathematician. The language I most
        like is <b>Python</b>, but I also have experience with <b>JavaScript</b>{' '}
        (and TypeScript), <b>Docker</b>, <b>SQL</b> and, of course, <b>Git</b>.
        I like the quality and automation areas, and I also have experience with
        web development. I like to work with the <b>Linux</b> Operation System.
        I am Proactive, detailed, determined and I am always seeking to improve
        myself and learn more!
      </p>
      <p>
        I wanted to work with programming since the year before I started my
        graduation, when I had the dream of becoming a game developer. Afraid I
        would not do well in a graduation of the area (I did not had much
        contact with computers in the time), I chose a secure path, which was
        doing the graduation of Mathematics, which was the class I most liked in
        school. Fortunately, since the beginning of the graduation (2014), I had
        contact with programming, with both <b>MATLAB</b> and <b>LaTeX</b>.
      </p>
      <p>
        Involuntarily (probably feeding my forgotten dream), I started my career
        as a software developer in the graduation. I always took classes focused
        in applied Mathematics and internships that involved programming.
        Because of one these internships (2016), I learned the importance of{' '}
        <b>clean code</b>. I should write the nth edition of a magazine, and the
        idea was to use the code of the previous year, and write above it. This
        being done for several years. The quantity of duplications and the lack
        of automation were enormous. So I decided to write a template and a
        documentation before writing that year&apos;s edition.
      </p>
      <p>
        When I graduated in 2020, I was still undecided in what to do, and I
        decided to take the safe path again, doing the master degree in
        Mathematics. Because of the pandemic, the course stopped for a few
        months. I decided to study programming in this period, doing{' '}
        <b>Python</b> and <b>JavaScript</b> courses. After taking courage, I
        started to apply to software development positions until I got my first
        job in the same year.
      </p>
      <p>
        Also in 2020, I have installed the <b>Linux</b> Operational System for
        the first time (which I use until today). This was important to conquer
        my fear of using command line interpreter instead of a graphic
        interface. And this is something I take to my career: to have no fear.
        Fear has kept me away of my dream of becoming a software developer
        before, and I will not let it get in my way again.
      </p>
    </React.Fragment>
  ),
};

const COMMUNITY: T.sectionsComponents = {
  PT: (
    <React.Fragment>
      <p>
        Já ajudei na organização de eventos online da{' '}
        <a
          href="https://floripa.sc.python.org.br/"
          target="_blank"
          rel="noreferrer">
          Python Floripa
        </a>{' '}
        durante a pandemia. Também já palestrei sobre os seguintes assuntos.
      </p>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/watch?v=WRJGogeSMqU"
            target="_blank"
            rel="noreferrer">
            Construindo uma interface de linha de comando com a biblioteca
            argparse
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=_78stm2WpYM"
            target="_blank"
            rel="noreferrer">
            Configurando o novo site da python Floripa
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=eO1IbmsrcOQ"
            target="_blank"
            rel="noreferrer">
            Em busca da primeira oportunidade como pessoa desenvolvedora
          </a>
        </li>
      </ul>
    </React.Fragment>
  ),
  EN: (
    <React.Fragment>
      <p>
        I have already helped in the organization of the online events of the{' '}
        <a
          href="https://floripa.sc.python.org.br/"
          target="_blank"
          rel="noreferrer">
          Florianópolis Python community
        </a>{' '}
        during the pandemic. I have also already given talks (in Portuguese)
        about the following topics.
      </p>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/watch?v=WRJGogeSMqU"
            target="_blank"
            rel="noreferrer">
            Building a command line interface with the argparse library
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=_78stm2WpYM"
            target="_blank"
            rel="noreferrer">
            Configuring the new Florianópolis Python community website
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=eO1IbmsrcOQ"
            target="_blank"
            rel="noreferrer">
            Searching for the first opportunity as a developer
          </a>
        </li>
      </ul>
    </React.Fragment>
  ),
};

const BOOKS: T.sectionsComponents = {
  PT: (
    <React.Fragment>
      <p>Livros que li e recomendo.</p>
      <ul>
        <li>
          Martin, Robert C.{' '}
          <i>Clean Code: A Handbook of Agile Software Craftsmanship</i>.
          Prentice Hall, 2009.
        </li>
        <li>
          Percival, Harry J.W. <i>Test-Driven Development with Python</i>.
          O&apos;Reilly Media, 2017.
        </li>
      </ul>
    </React.Fragment>
  ),
  EN: (
    <React.Fragment>
      <p>Books I read and recommend.</p>
      <ul>
        <li>
          Martin, Robert C.{' '}
          <i>Clean Code: A Handbook of Agile Software Craftsmanship</i>.
          Prentice Hall, 2009.
        </li>
        <li>
          Percival, Harry J.W. <i>Test-Driven Development with Python</i>.
          O&apos;Reilly Media, 2017.
        </li>
      </ul>
    </React.Fragment>
  ),
};

const SITE: T.sectionsComponents = {
  PT: (
    <React.Fragment>
      <p>
        Minha motivação inicial para ter um site veio anos atrás, durante a
        minha graduação em Matemática, quando queria ter um local pra
        disponibilizar meus modelos escritos em <b>LaTeX</b> ao público. Hoje em
        dia minha motivação é promover a minha carreira e ser um local onde
        tenho acesso fácil a vários links.
      </p>
      <p>
        O site foi desenvolvido usando{' '}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>{' '}
        e{' '}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer">
          TypeScript
        </a>{' '}
        com o objetivo de fazer uma SPA (sigla do inglês &quot;Single Page
        Application&quot;, que significa uma aplicação de página única). A
        motivação por usar React foi aumentar minha produtividade, quando for
        escrever novas atualizações. Já a motivação por trás do TypeScript foi
        em relação a me ajudar a lembrar cada um dos argumentos que cada
        componente recebe, por forçar tipagem. Como sei que não irei atualizar o
        site com muita frequência, isso irá me ajudar bastante.
      </p>
    </React.Fragment>
  ),
  EN: (
    <React.Fragment>
      <p>
        My initial motivation for having a website came years ago, during my
        graduation in Mathematics, when I wanted a place to share my{' '}
        <b>LaTeX</b> templates to the public. Today my motivation is to promote
        my career and be a place that provide easy access to several links.
      </p>
      <p>
        The website was developed using{' '}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>{' '}
        and{' '}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer">
          TypeScript
        </a>{' '}
        with the goal of making a SPA (Single Page Application). The motivation
        to use React was to increase my productivity, when writing new updates.
        On the other hand, the motivation behind using typeScript was related to
        helping me remember each argument of each component, by strong typing.
        As I know I will not be updating the website very often, this will help
        me a lot.
      </p>
    </React.Fragment>
  ),
};

const PERSONAL: T.sectionsComponents = {
  PT: (
    <React.Fragment>
      <p>
        Goiano do pé rachado, modelo 96. Torcedor (ou sofredor) do Goiás Esporte
        Clube. Fã de cultura nerd, como super-heróis, Yu-Gi-Oh! e Star Wars
        (você notou as referências pelo site?). Adoro o sentimento de nostalgia,
        que sinto ouvindo as trilhas sonoras de desenhos antigos, como Digimon e
        Power Rangers. E quem não gosta de LEGO também né?
      </p>
      <p>
        Também gosto de cozinhar, correr, ver séries (tem alguma série mais
        engraçada que The Office?) e filmes e programar. Quero morar um ano fora
        do Brasil, e penso em Portugal, Espanha ou Alemanha. Por isso, tenho
        estudado alemão. Será que na próxima versão do site vai ter a opção de
        alemão nas línguas também?
      </p>
      <p>
        E é claro, também gosto de jogar videogame, que foi o estopim para me
        tornar desenvolvedor de software. Entre todos os jogos que joguei,
        sempre gosto de citar esses:
        <ul>
          <li>Crash Bandicoot</li>
          <li>THE LAST OF US</li>
          <li>inFAMOUS</li>
          <li>STAR WARS THE FORCE UNLEASHED</li>
          <li>MEGAMAN</li>
        </ul>
      </p>
    </React.Fragment>
  ),
  EN: (
    <React.Fragment>
      <p>
        Born in Goiânia, model 96. Fan (or sufferer) of Goiás Esporte Clube. Fan
        of nerd culture, like super heroes, Yu-Gi-Oh! and Star Wars (have you
        noticed the references around the website?). I love the feeling of
        nostalgia, which I feel listening to the soundtracks of old cartoons,
        like Digimon and Power Rangers. And who does not like LEGO?
      </p>
      <p>
        I also like cooking, running, watching shows (is there a show better
        then The Office?) and movies and programming. I want to live a year
        abroad of Brazil, and I think about Portugal, Spain or Germany. Hence, I
        am studying German. Does the next version of the website will also have
        German as a language option?
      </p>
      <p>
        And of course, I also like playing videogame, which was the reason I
        became a software developer. Among all games I have played, I always
        like to cite these ones:
        <ul>
          <li>Crash Bandicoot</li>
          <li>THE LAST OF US</li>
          <li>inFAMOUS</li>
          <li>STAR WARS THE FORCE UNLEASHED</li>
          <li>MEGAMAN</li>
        </ul>
      </p>
    </React.Fragment>
  ),
};

// TODO use clearfix class
// https://getbootstrap.com/docs/5.0/layout/columns/#standalone-column-classes
function addSection(
  // image: string,
  // imageDescription: string,
  title: string,
  content: JSX.Element,
  // right = true,
): JSX.Element {
  return (
    <div className="mb-4">
      {/* <div
        className={`col-sm-4 p-3 d-flex align-items-center justify-content-center${
          right ? '' : 'order-last'
        }`}>
        <S.Image src={image} alt={imageDescription} />
      </div>
      <div className={`col-sm-8 ${right ? '' : 'order-first'}`}> */}
      <h2>{title}</h2> <hr />
      {content}
      {/* </div> */}
    </div>
  );
}

export default function About(properties: T.currentLanguage): JSX.Element {
  return (
    <React.Fragment>
      <h1 className="mb-4">
        {E.SECTIONS_LABELS['about'][properties.language]}
      </h1>
      {addSection(
        properties.language === 'PT'
          ? 'Carreira profissional'
          : 'Professional career',
        PROFESSIONAL[properties.language],
      )}
      {addSection(
        properties.language === 'PT' ? 'Comunidade' : 'Community',
        COMMUNITY[properties.language],
      )}
      {addSection(
        properties.language === 'PT' ? 'Livros' : 'Books',
        BOOKS[properties.language],
      )}
      {addSection(
        properties.language === 'PT'
          ? 'Motivações do site'
          : 'Website Motivations',
        SITE[properties.language],
      )}
      {addSection(
        properties.language === 'PT' ? 'Lado pessoal' : 'Personal side',
        PERSONAL[properties.language],
      )}
      <Quote
        language={properties.language}
        line={"Don't be what they made you..."}
        character="Logan"
        title="LOGAN"
        director="James Mangold"
        company="20th Century Fox"
        year={2017}
      />
    </React.Fragment>
  );
}
