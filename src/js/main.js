import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../bootstrap/js/bootstrap.min';

import '../bootstrap/css/bootstrap.min.css';
import '../css/style.css';

const listaDeSecoes = ['home', 'sobre', 'publicacoes', 'modelos', 'jogos', 'contato'];
const listaDeRedesSociais = ['linkedin', 'github', 'youtube'];

const nomesSecoesPT = {
  home: 'Início',
  sobre: 'Sobre',
  publicacoes: 'Publicações',
  modelos: 'Modelos',
  jogos: 'Jogos',
  contato: 'Contato',
};

const nomesSecoesEN = {
  home: 'Home',
  sobre: 'About',
  publicacoes: 'Publications',
  modelos: 'Templates',
  jogos: 'Games',
  contato: 'Contact',
};

const hrefRedesSociais = {
  linkedin: 'https://www.linkedin.com/in/mateusoliveira43/',
  github: 'https://github.com/mateusoliveira43',
  youtube: 'https://www.youtube.com/channel/UCAXCKVHXg5weD2zqFJ056QQ',
};

const srcImgRedesSociais = {
  linkedin: 'linkedin-desativado-rodape.svg',
  github: 'github-desativado-rodape.svg',
  youtube: 'youtube-desativado-rodape.svg',
};

const corpo = document.querySelector('.corpo');
const cabecalhoNav = document.querySelector('.navbar-nav');
const botaoTrocaLingua = document.querySelector('#trocalingua');
const rodape = document.querySelector('.rodape');
let secaoAtiva = document.querySelector('.corpo');

let lingua = 'EN';

Object.values(listaDeSecoes).forEach((secao) => {
  cabecalhoNav.innerHTML += `
  <li class="nav-item" id="${secao}">
    <a class="nav-link"></a>
  </li>`;
});

Object.values(listaDeRedesSociais).forEach((redeSocial) => {
  rodape.innerHTML += `
  <div class="ml-2">
    <a href="${hrefRedesSociais[redeSocial]}" target="_blank">
      <img id="${redeSocial}" src="./assets/img/${srcImgRedesSociais[redeSocial]}" alt="logo ${redeSocial}" width="30px" />
    </a>
  </div>`;
});

// ----------------EVENTLISTENERS----------------
botaoTrocaLingua.addEventListener('click', () => trocaLingua());
Object.values(listaDeSecoes).forEach((secao) => {
  document.querySelector(`#${secao}`).addEventListener('click', () => irSecao(`${secao}`));
});

document.addEventListener('mouseover', (e) => {
  const idMouseOver = e.target.id;
  if (!idMouseOver) return;
  hoverAtivo(idMouseOver);
});
document.addEventListener('mouseout', (e) => {
  const idMouseOut = e.target.id;
  if (!idMouseOut) return;
  hoverDesativo(idMouseOut);
});

document.addEventListener('mouseover', (e) => {
  const classMouseOver = e.target.className;
  if (!classMouseOver) return;
  if (classMouseOver === 'linha-contato') {
    if (e.target.children[0].id.includes('2')) {
      hoverAtivo(e.target.children[0].id.replace('-contato2', ''), 'contato2');
    } else {
      hoverAtivo(e.target.children[0].id.replace('-contato', ''), 'contato');
    }
  }
});

document.addEventListener('mouseout', (e) => {
  const classMouseOut = e.target.className;
  if (!classMouseOut) return;
  if (classMouseOut === 'linha-contato') {
    if (e.target.children[0].id.includes('2')) {
      hoverDesativo(e.target.children[0].id.replace('-contato2', ''), 'contato2');
    } else {
      hoverDesativo(e.target.children[0].id.replace('-contato', ''), 'contato');
    }
  }
});

// ----------------FUNÇÕES----------------
function irSecao(secao) {
  const caminho = `./view/_${secao}${lingua}.html`;
  fetch(caminho)
    .then((response) => response.text())
    .then((html) => {
      corpo.innerHTML = html;
    });
  window.scrollTo(0, 0);
  ativo(secao);
}

function ativo(novasecao) {
  secaoAtiva.classList.remove('active');
  secaoAtiva = document.querySelector(`#${novasecao}`);
  secaoAtiva.classList.add('active');
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

function trocaLingua() {
  if (lingua === 'PT') {
    botaoTrocaLingua.innerHTML = 'versão em português';
    document.querySelector('.desenvolvido').innerHTML = 'Developed by Mateus Souza Oliveira';
    Object.values(listaDeSecoes).forEach((secao) => {
      document.querySelector(`#${secao}`).querySelector('a').innerHTML = nomesSecoesEN[secao];
    });
    lingua = 'EN';
  } else {
    botaoTrocaLingua.innerHTML = 'english version';
    document.querySelector('.desenvolvido').innerHTML = 'Desenvolvido por Mateus Souza Oliveira';
    Object.values(listaDeSecoes).forEach((secao) => {
      document.querySelector(`#${secao}`).querySelector('a').innerHTML = nomesSecoesPT[secao];
    });
    lingua = 'PT';
  }
  irSecao(secaoAtiva.id);
}

// ----------------INICIALIZANDO O SITE----------------
irSecao('home');
trocaLingua();
