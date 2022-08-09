import React from 'react';

import * as T from '../../config/types';

// TODO alt de imagens descrevendo o que a imagem representa e não erro ao carregar...
// function AboutPT(): JSX.Element {
//   return (
//     <React.Fragment>
//       <h1 className="mb-4">Sobre o autor</h1>
//       <div className="linha mb-4">
//         <div className="img-esquerda m-2">
//           <img
//             src="./public/assets/img/perfil_mateus.jpeg"
//             alt="Erro no carregamento"
//             width="100%"
//           />
//         </div>
//         <div>
//           <h2>Atualmente</h2> <hr className="inlinha" />
//           <p>
//             Sou desenvolvedor de software. Além do meu trabalho, venho estudando
//             programação e áreas correlatadas por conta própria. Atualmente,
//             estou fazendo um curso de <b>JavaScript</b> online e já fiz um curso
//             de <b>Python</b>, também online. Também, já li o livro
//             <b>Clean Code</b> (o qual indico para todos). Além disso, venho
//             trabalhando em meus projetos pessoais e colocando-os no meu perfil
//             do <b>GitHub</b>.
//           </p>
//         </div>
//       </div>
//       <div className="linha mb-4">
//         <div className="img-direita m-2">
//           <img
//             src="./public/assets/img/educaco_mateus.jpeg"
//             alt="Erro no carregamento"
//             width="100%"
//           />
//         </div>
//         <div>
//           <h2>Educação</h2> <hr className="inlinha" />
//           <br />
//           <ul>
//             <li>
//               <i>Matemática - Bacharelado</i>, Universidade Federal de Santa
//               Catarina (UFSC). 2014 - 2020.
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="linha mb-4">
//         <div className="img-esquerda m-2">
//           <img
//             src="./public/assets/img/curiosidades_mateus.jpeg"
//             alt="Erro no carregamento"
//             width="100%"
//           />
//         </div>
//         <div>
//           <h2>Curiosidades</h2> <hr className="inlinha" />
//           <p>
//             Goiano do pé rachado, modelo 96. Torcedor (ou sofredor) do Goiás
//             Esporte Clube. Fã de super-heróis (você notou as referências pelo
//             site?), Yu-Gi-Oh!, sertanejo e videogames. Gosto também de cozinhar
//             e correr (apesar de ainda não ter ganho uma prova), além, é claro,
//             de programar. Fluente em inglês e português, minha língua nativa.
//             Também já estudei alemão.
//           </p>
//         </div>
//       </div>
//       <div className="linha mb-4">
//         <div className="destaque">
//           <i>&quot;Don&apos;t be what they made you...&quot;</i>
//           <br />
//           <div className="float-right">
//             Logan em LOGAN. Direção de James Mangold. 20th Century Fox, 2017.
//           </div>
//         </div>
//       </div>
//       <h1 className="mb-4">Sobre o site</h1>
//       <div className="linha">
//         <div className="img-esquerda m-2">
//           <img
//             src="./public/assets/img/logo-mateus.svg"
//             alt="Erro no carregamento"
//             width="100%"
//           />
//         </div>
//         <div>
//           <h2>
//             Motivação, desenvolvimento e <i>design</i>
//           </h2>
//           <hr className="inlinha" />
//           <p>
//             Minha motivação inicial para ter um site veio anos atrás, quando
//             queria ter um local pra disponibilizar meus modelos <b>LaTeX</b> ao
//             público. Hoje em dia minha motivação mudou, e o objetivo com o site
//             é mostrar um pouco de mim e minhas habilidades como programador ao
//             mundo.
//           </p>
//           <p>
//             O site foi desenvolvido usando <b>HTML</b>, <b>CSS</b> e
//             <b>JavaScript</b> com o objetivo de fazer uma <i>SPA</i> (sigla do
//             inglês &quot;Single Page Application&quot;, que significa uma
//             aplicação/aplicativo de página única, isto é, existe apenas uma
//             página web e não uma para cada seção do site). Vou aprender um pouco
//             sobre a biblioteca <b>React</b> nos próximos meses, e pretendo
//             utilizá-la ou o <i>framework</i> <b>Vue.js</b> na próxima versão do
//             site, para ver as diferenças no desenvolvimento utilizando essas
//             ferramentas.
//           </p>
//           <p>
//             O site foi todo desenvolvido por mim, desde o logo até as cores, com
//             exceção das imagens das rede sociais e de manutenção, os quais
//             peguei pronto ou editei. Em relação as cores, quis ser minimalista.
//             O <i>design</i> do logo do site foi baseado na minha paixão pelo
//             Goiás Esporte Clube.
//           </p>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// function AboutEN(): JSX.Element {
//   return (
//     <React.Fragment>
//       <h1 className="mb-4">About the author</h1>
//       <div className="linha mb-4">
//         <div className="img-esquerda m-2">
//           <img
//             src="./public/assets/img/perfil_mateus.jpeg"
//             alt="Error while loading"
//             width="100%"
//           />
//         </div>
//         <div>
//           <h2>Currently</h2> <hr className="inlinha" />
//           <p>
//             I am a software developer. Beyond my work, I have been studying
//             programming and related areas, by myself. Currently, I am taking a
//             <b>JavaScript</b> online course and I have already done a
//             <b>Python</b> course, online too. Also, I have read the book
//             <b>Clean Code</b> (Which I indicate to everyone). Furthermore, I
//             have been working in my personal projects and posting them in my
//             <b>GitHub</b> profile.
//           </p>
//         </div>
//       </div>
//       <div className="linha mb-4">
//         <div className="img-direita m-2">
//           <img
//             src="./public/assets/img/educaco_mateus.jpeg"
//             alt="Error while loading"
//             width="100%"
//           />
//         </div>
//         <div>
//           <h2>Education</h2> <hr className="inlinha" />
//           <br />
//           <ul>
//             <li>
//               <i>Mathematics - Bachelor degree</i>, Federal University of Santa
//               Catarina (UFSC). 2014 - 2020.
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="linha mb-4">
//         <div className="img-esquerda m-2">
//           <img
//             src="./public/assets/img/curiosidades_mateus.jpeg"
//             alt="Error while loading"
//             width="100%"
//           />
//         </div>
//         <div>
//           <h2>Curiosities</h2> <hr className="inlinha" />
//           <p>
//             Born in Goiânia, model 96. Fan (or sufferer) of Goiás Esporte Clube.
//             Fan of super heroes (have you noticed the references around the
//             website?), Yu-Gi-Oh!, sertanejo and video games. I also like cooking
//             and running (despite the fact that I still have not won a
//             competition), beyond, of course, programming. Fluent in english and
//             portuguese, my native language. I have also already studied germany.
//           </p>
//         </div>
//       </div>
//       <div className="linha mb-4">
//         <div className="destaque">
//           <i>&quot;Don&apos;t be what they made you...&quot;</i>
//           <br />
//           <div className="float-right">
//             Logan in LOGAN. Directed by James Mangold. 20th Century Fox, 2017.
//           </div>
//         </div>
//       </div>
//       <h1 className="mb-4">About the website</h1>
//       <div className="linha">
//         <div className="img-esquerda m-2">
//           <img
//             src="./public/assets/img/logo-mateus.svg"
//             alt="Error while loading"
//             width="100%"
//           />
//         </div>
//         <div>
//           <h2>Motivation, development and design</h2> <hr className="inlinha" />
//           <p>
//             My initial motivation for having a website came years ago, when I
//             wanted a place to post my <b>LaTeX</b>&apos;s templates to the
//             public. Nowadays my motivation has changed, and my goal with the
//             website is to show the world a little of myself and some of my
//             programming skills.
//           </p>
//           <p>
//             The website was developed using <b>HTML</b>, <b>CSS</b> and
//             <b>JavaScript</b> with the goal of making a SPA (Single Page
//             Application, i.e., there is only a web page and not one for each
//             section of the website). I will learn a little about the
//             <b>React</b> library in the next months, and I intend to use it or
//             the <b>Vue.js</b> framework in the next version of the website, to
//             see the differences of the development using these tools.
//           </p>
//           <p>
//             The website was entirely developed by me, from the logo to the
//             colors, with exception of the images from social networks and from
//             maintenance, which I took or edited. Regarding the colors, I wanted
//             to be as simple as possible. The logo&apos;s design was based in my
//             passion for Goiás Esporte Clube.
//           </p>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

const body: T.languagesMap = {
  PT: 'TRABALHO EM ANDAMENTO',
  EN: 'WORK IN PROGRESS',
};

export default function About(properties: T.currentLanguage): JSX.Element {
  return (
    <h1 className="d-flex justify-content-center">
      {body[properties.language]}
    </h1>
  );
}
