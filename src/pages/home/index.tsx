import React from 'react';

import * as S from './styles';
import * as T from '../../config/types';
import Quote from '../../components/quote';
import Logo from '../../images/logo.svg';

function HomePT(): JSX.Element {
  return (
    <React.Fragment>
      {/* <div className="logo m-2 float-left"> */}
      <S.Img src={Logo} alt="deu certo não :(" />
      {/* </div> */}
      <h1>Bem-vindo(a) ao meu site pessoal!</h1>
      <hr className="inlinha" />
      <div className="inlinha">
        <b>Versão 2.02</b> <hr className="fill" /> Atualizado em 13 de dezembro
        de 2020
      </div>
      {/* <p>Nesta versão:</p>
      <ul>
        <li>
          Refatoração do código do site: automatização para implementação de
          novas funcionalidades, aplicando boas práticas de programação e
          melhora na organização dos arquivos dos corpos das seções para
          aumentar a produtividade.
        </li>
        <li>
          Uso do compilador <b>Babel</b> para o site funcionar em navegadores
          mais antigos.
        </li>
        <li>
          Implementação da seção <b>Modelos</b>.
        </li>
      </ul>
      <p>Recursos que desejo implementar na próxima versão:</p>
      <ul>
        <li>Melhorar a aparência visual do site.</li>
        <li>Finalizar as seções em construção.</li>
        <li>
          Colocar mais efeitos de animação (como de transição de seções) no
          site.
        </li>
        <li>
          Definir a língua do site de forma automática, com base na localização
          do usuário.
        </li>
        <li>Implementar recursos de acessibilidade ao site.</li>
      </ul>
      <p>
        Encontrou algum erro de digitação ou algum <i>bug</i>? Entre em contato
        comigo para que eu faça as devidas correções!
      </p>
      <p>
        Gostou do meu site? <b>Você</b> também deseja ter o <b>seu</b> site
        pessoal? Entre em contato comigo para fazermos um orçamento!
      </p> */}
      {/* <div className="destaque">
        <i>
          &quot;If you&apos;re good at something, never do it for free.&quot;
        </i>
        <br />
        <div className="float-right">
          The Joker em THE Dark Knight. Direção de Christopher Nolan.
          WarnerBros. Pictures, 2008.
        </div>
      </div> */}
      <br />
      <br />
      <Quote
        language="PT"
        line={"If you're good at something, never do it for free."}
        character="The Joker"
        title="THE dark knight" // TODO fazer primeira palavra upper case na função Quote
        director="Christopher Nolan"
        company="WarnerBros. Pictures"
        year={2008}
      />
    </React.Fragment>
  );
}

function HomeEN(): JSX.Element {
  return <div>Home EN</div>;
}

const components: T.sectionsComponents = {
  PT: <HomePT />,
  EN: <HomeEN />,
};

export default function Home(properties: T.sectionsProperties): JSX.Element {
  return components[properties.language];
}
