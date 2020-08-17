// Fazer um collapse (ver biblioteca como bootstrap) nesta parte depois
const corpoHomePT = '<div class="logo m-2 float-left"><img src="./assets/img/logo-mateus.svg" alt="Logo do meu site pessoal" width="100%" /> </div><h1>Bem-vindo(a) ao meu site pessoal!</h1> <hr class="inlinha" /><div class="inlinha"><b>Versão 1.04</b> <hr class="fill" />Atualizado em 16 de agosto de 2020</div> <p>Nesta versão:</p> <ul> <li>Meu objetivo foi fazer uma <i>SPA</i> (sigla do inglês "Single Page Application", que significa uma aplicação/aplicativo de página única, isto é, existe apenas uma página web e não uma para cada seção do site) usando apenas <b>HTML</b>, <b>CSS</b> e <b>JavaScript</b>. Com isso, quando aprender algum <i>Framework</i>, quero ver quais as diferenças para se obter o mesmo resultado.</li> <li>Refatoração do código do site. </li> <li>Melhoria na versão <i>mobile</i> do site.</li> </ul> <p>Recursos que desejo implementar na próxima versão:</p> <ul> <li>Finalizar as seções em construção.</li> <li>Colocar mais efeitos de animação (como de transição de seções) no site.</li> <li>Definir a língua do site de forma automática, com base na localização do usuário.</li> <li>Implementar recursos de acessibilidade ao site.</li> </ul> <p>Encontrou algum erro de digitação ou algum <i>bug</i>? Entre em contato comigo para que eu faça as devidas correções!</p> <p>Gostou do meu site? <b>Você</b> também deseja ter o <b>seu</b> site pessoal? Entre em contato comigo para fazermos um orçamento!</p> <div class="destaque"><i>"If you\'re good at something, never do it for free."</i> <br /> <div class="float-right">The Joker em THE Dark Knight. Direção de Christopher Nolan. WarnerBros. Pictures, 2008. </div> </div>';
const corpoHomeEN = '<div class="logo m-2 float-left"><img src="./assets/img/logo-mateus.svg" alt="Logo do meu site pessoal" width="100%" /> </div><h1>Welcome to my personal website!</h1><hr class="inlinha" /><div class="inlinha"><b>Version 1.04</b><hr class="fill" />Updated on August 16, 2020</div><p>In this version:</p><ul><li>My goal was to do a SPA (Single Page Application, i.e., there is a single web page and not one for every section of the website) using only <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>. Thereby, when I learn a <i>Framework</i>, I want to see the differences to get the same results.</li><li>Website code refactoring.</li><li>Improvement of the website\'s mobile version.</li></ul><p>Features that I wish to implement in the next version:</p><ul><li>Finish the sections under construction.</li><li>Put more animation effects (like when transitioning between sections) in the website.</li><li>Set the language of the website automatic, based in the user location.</li><li>Implement accessibility features to the website.</li></ul><p>Have you found any typo or bug? Contact me so I can make the properly corrections.</p><p>Have you liked my website? <b>You</b> also wish to have <b>your</b> personal website? Contact me so we can make a budget!</p><div class="destaque"><i>"If you\'re good at something, never do it for free."</i> <br /><div class="float-right">The Joker in THE Dark Knight. Directed by Christopher Nolan. WarnerBros. Pictures, 2008.</div></div>';

const corpoSobrePT = '<h1>Sobre o autor</h1> <div class="linha"> <div class="img-esquerda m-2"><img src="./assets/img/perfil_mateus.jpeg" alt="Não carregou" width="100%" /> </div> <div> <h2>Atualmente</h2> <hr class="inlinha" /> <p>Sou aluno de mestrado no programa de Pós-Graduação em Matemática Pura e Aplicada da Universidade Federal de Santa Catarina (UFSC) e bolsista FAPESC desde de março de 2020. Eu e meu orientador, o professor <a href="http://mtm.ufsc.br/~leo/" target="_blank">Leonardo Koller Sacht</a>, atualmente estamos estudando as áreas da <b>Computação Gráfica</b> com objetivo de definirmos o tema da minha dissertação de mestrado. Nos últimos meses estudamos a área de Processamento de Imagens. Nos próximos meses estudaremos sobre Processamento de Geometria, Modelagem, Visualização e Visão Computacional (com foco em <i>Deep Learning</i>).</p> <p>Além do mestrado, venho estudando, à parte, programação e afins, com intuito de me tornar um desenvolvedor no futuro próximo. Atualmente, estou estudando as linguagens <b>Python</b> e <b>JavaScript</b> (e consequentemente, <b>HTML</b> e <b>CSS</b> também). Além disso, sou usuário <b>Linux</b> (Mint) e possuo experiência com <b>LaTeX</b> e <b>Matlab</b>. Desejo atuar tanto na área de <i>Front-end</i> quanto na de <i>Back-end</i>, até decidir qual das duas áreas me agrada mais.</p> </div> </div> <div class="linha"> <div class="img-direita m-2"><img src="./assets/img/educaco_mateus.jpeg" alt="Não carregou" width="100%" /> </div> <div> <h2>Educação</h2> <hr class="inlinha" /><br /> <ul> <li><i>Pós-Graduação em Matemática Pura e Aplicada (Mestrado)</i>, Universidade Federal de Santa Catarina (UFSC). 2020 - atualmente.</li><br /> <li><i>Matemática - Bacharelado</i>, Universidade Federal de Santa Catarina (UFSC). 2014 - 2020.</li> </ul> </div> </div> <div class="linha"> <div class="img-esquerda m-2"><img src="./assets/img/curiosidades_mateus.jpeg" alt="Não carregou" width="100%" /> </div> <div> <h2>Curiosidades</h2> <hr class="inlinha" /> <p>Goiano do pé rachado, modelo 96. Torcedor (ou sofredor) do Goiás Esporte Clube. Fã de super-heróis (você notou as referências pelo site?), sertanejo e videogames. Gosto também de cozinhar e correr (apesar de não ter ganho nenhuma prova ainda), além, é claro, de programar. Fluente em inglês e português, minha língua nativa. Também já estudei alemão.</p> </div> </div> <div class="linha"> <div class="destaque"><i>"Don\'t be what they made you..."</i><br /> <div class="float-right">Logan em LOGAN. Direção de James Mangold. 20th Century Fox, 2017.</div> </div> </div> <h1>Sobre o site</h1> <div class="linha"> <div class="img-esquerda m-2"><img src="./assets/img/logo-mateus.svg" alt="Não carregou" width="100%" /></div> <div> <h2>Motivação, desenvolvimento e <i>design</i></h2> <hr class="inlinha" /> <p>Minha motivação inicial para ter um site veio anos atrás, quando queria ter um local pra disponibilizar meus modelos <b>LaTeX</b> ao público. Hoje em dia minha motivação mudou, e o objetivo com o site é mostrar um pouco de minhas habilidades como programador ao mundo.</p> <p>O site foi desenvolvido usando <b>HTML</b>, <b>CSS</b> e <b>JavaScript</b> com o objetivo de fazer uma <i>SPA</i> (sigla do inglês "Single Page Application", que significa uma aplicação/aplicativo de página única, isto é, existe apenas uma página web e não uma para cada seção do site). Após aprender algum <i>Framewok</i> (como <b>React</b>), desejo ver as diferenças para se obter o mesmo resultado.</p> <p>O site foi todo desenvolvido por mim, desde o logo até as cores, com exceção das imagens das rede sociais e de manutenção, os quais peguei pronto ou editei. Em relação as cores, quis ser minimalista. </div> </div>';
const corpoSobreEN = '<h1>About the author</h1><div class="linha"><div class="img-esquerda m-2"><img src="./assets/img/perfil_mateus.jpeg"alt="Não carregou"width="100%"/></div><div><h2>Currently</h2><hr class="inlinha" /><p>I am master student in Postgraduation program in Pure and Applied Mathematics at Federal University of Santa Catarina (UFSC) and have a scholarship from FAPESC since March 2020. I and my  advisor, professor <a href="http://mtm.ufsc.br/~leo/" target="_blank">Leonardo Koller Sacht</a>, currently study the areas of <b>Computer Graphics</b> with the goal of defining the topic of my masters thesis. In the last months we have studied the area of Image Processing. In the next months we will be studying about Geometry Processing, Modeling, Rendering and Computer Vision (focusing in Deep Learning).</p><p>Beyond studying for my master\'s degree, I have been studying, apart, programming and related topics, aiming becoming a developer in the near future. Currently, I am studying the <b>Python</b> and <b>JavaScript</b> (as well as <b>HTML</b> and <b>CSS</b>) languages. I am also a <b>Linux</b> (Mint) user and have experience with <b>LaTeX</b> and <b>Matlab</b>. I wish to act both in the Front-end and Back-end areas, until I decide which area I like most.</p></div></div><div class="linha"><div class="img-direita m-2"><img src="./assets/img/educaco_mateus.jpeg"alt="Não carregou"width="100%"/></div><div><h2>Education</h2><hr class="inlinha" /><br /><ul><li><i>Post-Graguation in Pure and Applied Mathematics (Master degree)</i>, Federal University of Santa Catarina (UFSC). 2020 - currently.</li><br /><li><i>Mathematics - Bachelor degree</i>, Federal University of Santa Catarina (UFSC). 2014 - 2020.</li></ul></div></div><div class="linha"><div class="img-esquerda m-2"><img src="./assets/img/curiosidades_mateus.jpeg"alt="Não carregou"width="100%"/></div><div><h2>Curiosities</h2><hr class="inlinha"/><p>Born in Goiânia, model 96. Fan (or sufferer) of Goiás Esporte Clube. Fan of super heroes (have you noticed the references around the website?), sertanejo and video games. I also like cooking and running (dispite the fact that I still have not won a competition), beyond, of course, programming. Fluent in english and portuguese, my native language. I have also already studied germany.</p></div></div><div class="linha"><div class="destaque"><i>"Don\'t be what they made you..."</i><br /><div class="float-right">Logan in LOGAN. Directed by James Mangold. 20th Century Fox, 2017.</div></div></div><h1>About the website</h1><div class="linha"><div class="img-esquerda m-2"><img src="./assets/img/logo-mateus.svg"alt="Não carregou"width="100%"/></div><div><h2>Motivaton, development and design</h2><hr class="inlinha"/><p>My initial motivation for having a website came years ago, when I wanted a place to post my <b>LaTeX</b>\'s templates to the public. Nowadays my motivation has changed, and my goal with the website is to show the world some of my programming skills.</p><p>The website was developed using <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b> with the goal of making a SPA (Single Page Application, i.e., there is only a web page and not one for each section of the website). After learning a <i>Framewok</i> (like <b>React</b>), I wish to see see the differences to get the same results.</p><p>The website was entirely developed by me, from the logo to the colors, with exception of the images from social networks and from maintenance, which I took or edited. Regarding the colors, I wanted to be as simple as possible. </div></div>';

const corpoPublicacoesPT = '<div class="destaque"> <div class="logo m-2 float-left"><img src="./assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" /></div> <div class="logo m-2 float-right"><img src="./assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" /></div> <h1>Seção em construção</h1> <p>Nesta seção de <b>Publicações</b>, pretendo colocar as minhas publicações da graduação e, também agora, do mestrado. Além de divulgar meu conhecimento ao público, desejo também interagir com vocês. Sintam-se à vontade para mandarem correções e sugestões, ou até mesmo tirarem dúvidas!</p> </div>';
const corpoPublicacoesEN = '<div class="destaque"><div class="logo m-2 float-left"><img src="./assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%"/></div><div class="logo m-2 float-right"><img src="./assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%"/></div><h1>Section under construction</h1><p>In this section of <b>Publications</b>, I intend to post my uder graduation and, also now, mastering publications. Beyond spreading my knowledge to the public, I also wish to interact with you. Feel free to send me corrections and suggestions, or even clear up doubts!</p></div>';

const corpoModelosPT = '<div class="destaque"><div class="logo m-2 float-left"><img src="./assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%"/></div><div class="logo m-2 float-right"><img src="./assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%"/></div><h1>Seção em construção</h1><p>Nesta seção de <b>Modelos</b>, pretendo colocar os modelos <b>LaTeX</b> que desenvolvi e utilizo no dia a dia, o qual foi minha motivação inicial para ter um site anos atrás. Apesar de hoje em dia eu utilizar o <b>GitHub</b>, acho que ainda posso usar o site para esse fim, mostrando uma <i>preview</i> do modelo ao usuário interessado, em vez de apenas um arquivo README, por exemplo.</p></div>';
const corpoModelosEN = '<div class="destaque"><div class="logo m-2 float-left"><img src="./assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%"/></div><div class="logo m-2 float-right"><img src="./assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%"/></div><h1>Section under construction</h1><p>In this section of <b>Templates</b>, I intend to post the <b>LaTeX</b>\'s templates that I developed and use daily, which was my initial motivation for having a site years ago. Although nowadays I\'m a <b>GitHub</b> user, still think that the site can be used for this purpose, showing a preview of the template to the interested user, instead of only a README file, for example.</p></div>';

const corpoJogosPT = '<div class="destaque"><div class="logo m-2 float-left"><img src="./assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%"/></div><div class="logo m-2 float-right"><img src="./assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%"/></div><h1>Seção em construção</h1><p>Nesta seção de <b>Jogos</b>, pretendo colocar os jogos que desenvolvo como exercícios de programação para vocês se divertirem. A princípio, o site só irá rodar jogos desenvolvidos em <b>JavaScript</b>.</p><p>Tem alguma ideia interessante de jogo para eu implementar? Entre em contato comigo!</p></div>';
const corpoJogosEN = '<div class="destaque"><div class="logo m-2 float-left"><img src="./assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%"/></div><div class="logo m-2 float-right"><img src="./assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%"/></div><h1>Section under construction</h1><p>In this section of <b>Games</b>, I intend to post the games that I develop as programming training exercises for you to have fun. At first, the site will only run games developed in <b>JavaScript</b>.</p><p>Do you have a interesting idea of a game for me to implement? Contact me!</p></div>';

const corpoContatoPT = '<h1>Contato</h1> <div><a class="linha-contato" onmouseover="hoverAtivo(`email`,`contato`)" onmouseout="hoverDesativo(`email`,`contato`)"><img src="./assets/img/email-desativado.svg" alt="logo email" width="30px" id="email-contato" class="mr-2" /> Me envie um e-mail: matews1943 at gmail.com </a></div> <p class="par-contato">Forma mais simples de se comunicar comigo. Respondo dentro de um dia.</p> <div><a href="https://www.linkedin.com/in/mateus-oliveira-2492851b1/" target="_blank" class="linha-contato" onmouseover="hoverAtivo(`linkedin`,`contato`)" onmouseout="hoverDesativo(`linkedin`,`contato`)"><img src="./assets/img/linkedin-desativado.svg" alt="logo linkedin" width="30px" id="linkedin-contato" class="mr-2" /> Meu perfil no Linkedin </a> </div> <p class="par-contato">Confira meu Linkedin!</p> <div><a href="https://github.com/mateusoliveira43" target="_blank" class="linha-contato" onmouseover="hoverAtivo(`github`,`contato`)" onmouseout="hoverDesativo(`github`,`contato`)"><img src="./assets/img/github-desativado.svg" alt="logo github" width="30px" id="github-contato" class="mr-2" /> Meu perfil no GitHub </a> </div> <p class="par-contato">Confira meu repositório no Github!</p> <div><a href="https://www.youtube.com/channel/UCAXCKVHXg5weD2zqFJ056QQ" target="_blank" class="linha-contato" onmouseover="hoverAtivo(`youtube`,`contato`)" onmouseout="hoverDesativo(`youtube`,`contato`)"><img src="./assets/img/youtube-desativado.svg" alt="logo youtube" width="30px" id="youtube-contato" class="mr-2" /> Meu canal no YouTube </a> </div> <p class="par-contato">Confira meu canal no YouTube!</p> <div><a href="http://lattes.cnpq.br/7572519952454058" target="_blank" class="linha-contato" onmouseover="hoverAtivo(`lattes`,`contato`)" onmouseout="hoverDesativo(`lattes`,`contato`)"> <div class="box30-30"><img src="./assets/img/lattes-desativado.svg" alt="logo lattes" width="30px" id="lattes-contato" class="mr-2" /></div> Meu Currículo Lattes </a> </div> <p class="par-contato">Confira meu Currículo Lattes!</p> <div><a href="./assets/media/CV_Mateus_PT.pdf" target="_blank" class="linha-contato" onmouseover="hoverAtivo(`cv`,`contato`)" onmouseout="hoverDesativo(`cv`,`contato`)"> <div class="box30-30"><img src="./assets/img/cv-desativado.svg" alt="logo cv" width="30px" id="cv-contato" class="mr-2" /> </div> Meu Curriculum Vitae (português) </a> </div> <div><a href="./assets/media/CV_Mateus_EN.pdf" target="_blank" class="linha-contato" onmouseover="hoverAtivo(`cv`,`contato2`)" onmouseout="hoverDesativo(`cv`,`contato2`)"> <div class="box30-30"><img src="./assets/img/cv-desativado.svg" alt="logo cv" width="30px" id="cv-contato2" class="mr-2" /> </div> Meu Curriculum Vitae (inglês) </a> </div> <p class="par-contato">Confira meu Curriculum Vitae!</p>';
const corpoContatoEN = '<h1>Contact</h1> <div><a class="linha-contato" onmouseover="hoverAtivo(`email`,`contato`)" onmouseout="hoverDesativo(`email`,`contato`)"><img src="./assets/img/email-desativado.svg" alt="logo email" width="30px" id="email-contato" class="mr-2" /> Send me an e-mail: matews1943 at gmail.com </a></div> <p class="par-contato">Simplest way of communicating with me. I reply within a day.</p> <div><a href="https://www.linkedin.com/in/mateus-oliveira-2492851b1/" target="_blank" class="linha-contato" onmouseover="hoverAtivo(`linkedin`,`contato`)" onmouseout="hoverDesativo(`linkedin`,`contato`)"><img src="./assets/img/linkedin-desativado.svg" alt="logo linkedin" width="30px" id="linkedin-contato" class="mr-2" /> My Linkedin profile </a></div> <p class="par-contato">Check out my Linkedin!</p> <div><a href="https://github.com/mateusoliveira43" target="_blank" class="linha-contato" onmouseover="hoverAtivo(`github`,`contato`)" onmouseout="hoverDesativo(`github`,`contato`)"><img src="./assets/img/github-desativado.svg" alt="logo github" width="30px" id="github-contato" class="mr-2" /> My GitHub profile </a></div> <p class="par-contato">Check out my Github repository!</p> <div><a href="https://www.youtube.com/channel/UCAXCKVHXg5weD2zqFJ056QQ" target="_blank" class="linha-contato" onmouseover="hoverAtivo(`youtube`,`contato`)" onmouseout="hoverDesativo(`youtube`,`contato`)"><img src="./assets/img/youtube-desativado.svg" alt="logo youtube" width="30px" id="youtube-contato" class="mr-2" /> My YouTube channel </a></div> <p class="par-contato">Check out my YouTube channel!</p> <div><a href="http://lattes.cnpq.br/7572519952454058" target="_blank" class="linha-contato" onmouseover="hoverAtivo(`lattes`,`contato`)" onmouseout="hoverDesativo(`lattes`,`contato`)"> <div class="box30-30"><img src="./assets/img/lattes-desativado.svg" alt="logo lattes" width="30px" id="lattes-contato" class="mr-2" /></div> My Curriculum Lattes </a></div> <p class="par-contato">Check out my Curriculum Lattes!</p> <div><a href="./assets/media/CV_Mateus_EN.pdf" target="_blank" class="linha-contato" onmouseover="hoverAtivo(`cv`,`contato`)" onmouseout="hoverDesativo(`cv`,`contato`)"> <div class="box30-30"><img src="./assets/img/cv-desativado.svg" alt="logo cv" width="30px" id="cv-contato" class="mr-2" /> </div> My Curriculum Vitae (english) </a></div> <div><a href="./assets/media/CV_Mateus_PT.pdf" target="_blank" class="linha-contato" onmouseover="hoverAtivo(`cv`,`contato2`)" onmouseout="hoverDesativo(`cv`,`contato2`)"> <div class="box30-30"><img src="./assets/img/cv-desativado.svg" alt="logo cv" width="30px" id="cv-contato2" class="mr-2" /> </div> My Curriculum Vitae (portuguese) </a></div> <p class="par-contato">Check out my Curriculum Vitae!</p>';


const dictSecoesPT = {
  home: corpoHomePT,
  sobre: corpoSobrePT,
  modelos: corpoModelosPT,
  contato: corpoContatoPT,
  jogos: corpoJogosPT,
  publicacoes: corpoPublicacoesPT
};
const dictSecoesEN = {
  home: corpoHomeEN,
  sobre: corpoSobreEN,
  modelos: corpoModelosEN,
  contato: corpoContatoEN,
  jogos: corpoJogosEN,
  publicacoes: corpoPublicacoesEN
};

function irSecao(secao) {
  const corpo = document.querySelector('.corpo');
  if (lingua === 'portugues') {
    corpo.innerHTML = dictSecoesPT[secao];
  } else {
    corpo.innerHTML = dictSecoesEN[secao];
  }
  window.scrollTo(0, 0);
  ativo(secao);
}

const listadesecoes = ['home', 'sobre', 'modelos', 'contato', 'jogos', 'publicacoes'];

function ativo(novasecao) {
  for (const i of listadesecoes) {
    document.querySelector(`#${i}`).classList.remove('active');
  }
  document.querySelector(`#${novasecao}`).classList.add('active');
}

function hoverAtivo(logo, contato) {
  if (contato) {
    const troca = document.querySelector(`#${logo}-${contato}`);
    troca.src = `./assets/img/${logo}-ativado.svg`;
  } else {
    const troca = document.querySelector(`#${logo}`);
    troca.src = `./assets/img/${logo}-ativado.svg`;
  }
}
function hoverDesativo(logo, contato) {
  if (contato) {
    const troca = document.querySelector(`#${logo}-${contato}`);
    troca.src = `./assets/img/${logo}-desativado.svg`;
  } else {
    const troca = document.querySelector(`#${logo}`);
    troca.src = `./assets/img/${logo}-desativado-rodape.svg`;
  }
}

const trocalingua = document.querySelector('#trocalingua');
let lingua = '';

// Melhorar código dessa função. Ideia: fazer duas listas para percorrer
function trocaLingua() {
  if (lingua === 'portugues') {
    trocalingua.innerHTML = 'versão em português';
    lingua = 'ingles';
    document.querySelector('#home').querySelector('a').innerHTML = 'Home';
    document.querySelector('#sobre').querySelector('a').innerHTML = 'About';
    document.querySelector('#modelos').querySelector('a').innerHTML = 'Templates';
    document.querySelector('#contato').querySelector('a').innerHTML = 'Contact';
    document.querySelector('#jogos').querySelector('a').innerHTML = 'Games';
    document.querySelector('#publicacoes').querySelector('a').innerHTML = 'Publications';
    document.querySelector('.desenvolvido').innerHTML = 'Developed by Mateus Souza Oliveira';
    if (document.querySelector('.active')) {
      const secaoAtual = document.querySelector('.active').id;
      irSecao(secaoAtual);
    }
  } else {
    trocalingua.innerHTML = 'english version';
    lingua = 'portugues';
    document.querySelector('#home').querySelector('a').innerHTML = 'Início';
    document.querySelector('#sobre').querySelector('a').innerHTML = 'Sobre';
    document.querySelector('#modelos').querySelector('a').innerHTML = 'Modelos';
    document.querySelector('#contato').querySelector('a').innerHTML = 'Contato';
    document.querySelector('#jogos').querySelector('a').innerHTML = 'Jogos';
    document.querySelector('#publicacoes').querySelector('a').innerHTML = 'Publicações';
    document.querySelector('.desenvolvido').innerHTML = 'Desenvolvido por Mateus Souza Oliveira';
    if (document.querySelector('.active')) {
      const secaoAtual = document.querySelector('.active').id;
      irSecao(secaoAtual);
    }
  }
}

function margemAutomatica() {
  let alturaCabecalho = document.querySelector('.cabecalho').offsetHeight;
  alturaCabecalho += 50;
  document.querySelector('.corpo').style.marginTop = `${alturaCabecalho}px`;
}

trocaLingua();
irSecao('home');
margemAutomatica();
window.addEventListener('resize', margemAutomatica);

for (const i of listadesecoes) {
  document.querySelector(`#${i}`).addEventListener('click', () => irSecao(`${i}`));
}

const btnTrocaLingua = document.querySelector('#trocalingua');
btnTrocaLingua.addEventListener('click', () => trocaLingua())

const listaredesSociaisRodape = ['linkedin', 'github', 'youtube'];
for (const i of listaredesSociaisRodape) {
  document.querySelector(`#${i}`).addEventListener('mouseover', () => hoverAtivo(`${i}`));
  document.querySelector(`#${i}`).addEventListener('mouseout', () => hoverDesativo(`${i}`));
}
