import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../bootstrap/js/bootstrap.min';

import '../bootstrap/css/bootstrap.min.css';
import '../css/style.css';

const listaDeSecoes = ['home', 'sobre', 'publicacoes', 'modelos', 'jogos', 'contato'];
const listaDeRedesSociais = ['linkedin', 'github', 'youtube'];

const secoes = {
  home: {
    PT: '<div class="logo m-2 float-left"> <?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#"  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100%" viewBox="0 0 396.87498 396.87501"  version="1.1" id="svg8" inkscape:version="1.0 (1.0+r73+1)" sodipodi:docname="logo-mateus.svg">  <defs id="defs2" />  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0"   inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="0.24748737" inkscape:cx="671.79721"   inkscape:cy="877.12625" inkscape:document-units="px" inkscape:current-layer="layer1"   inkscape:document-rotation="0" showgrid="false" showguides="true" inkscape:guide-bbox="true"   inkscape:pagecheckerboard="true" units="px" inkscape:window-width="1366" inkscape:window-height="703"   inkscape:window-x="1680" inkscape:window-y="282" inkscape:window-maximized="1" fit-margin-top="0"   fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0">   <sodipodi:guide position="79.375,330.72917" orientation="0,1" id="guide833" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="211.66667,330.72917" orientation="0,1" id="guide835" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="79.375,198.4375" orientation="0,1" id="guide837" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="145.52083,198.4375" orientation="0,1" id="guide839" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="211.66667,198.43751" orientation="0,1" id="guide841" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="211.66667,66.145836" orientation="0,1" id="guide843" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="277.8125,198.43751" orientation="0,1" id="guide845" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="291.04167,198.43751" orientation="0,1" id="guide857" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="251.35417,264.58334" orientation="0,1" id="guide859" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="291.04167,330.72917" orientation="0,1" id="guide861" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="291.04167,66.145836" orientation="0,1" id="guide863" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="251.35417,132.29167" orientation="0,1" id="guide865" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="357.1875,231.51042" orientation="0,1" id="guide867" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="357.1875,165.36459" orientation="0,1" id="guide869" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />  </sodipodi:namedview>  <metadata id="metadata5">   <rdf:RDF>    <cc:Work rdf:about="">     <dc:format>image/svg+xml</dc:format>     <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />     <dc:title />    </cc:Work>   </rdf:RDF>  </metadata>  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(79.375,66.145828)">   <circle    style="fill:#28a745;stroke-width:5.84866;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;fill-opacity:1"    id="path885" cx="119.0625" cy="132.29167" r="198.4375" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 0,132.29167 V 7.792882e-7" id="path847" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 66.145833,132.29167 0,7.792882e-7" id="path849" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 132.29167,7.792882e-7 66.145833,132.29167" id="path851" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 132.29167,264.58333 V 7.792882e-7" id="path853" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="m 198.4375,132.29166 -132.291667,1e-5" id="path855" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 178.59375,66.145833 218.28125,2.3869541e-6" id="path871" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 284.42708,99.218751 218.28125,2.3869541e-6" id="path873" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 218.28125,132.29166 284.42708,99.218749" id="path875" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 284.42708,165.36458 218.28125,132.29166" id="path877" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="m 218.28125,264.58333 66.14583,-99.21875" id="path879" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="m 178.59375,198.4375 39.6875,66.14583" id="path881" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />  </g> </svg></div><h1>Bem-vindo(a) ao meu site pessoal!</h1><hr class="inlinha" /><div class="inlinha"> <b>Versão 2.00</b> <hr class="fill" /> Atualizado em 09 de outubro de 2020</div><p>Nesta versão:</p><ul> <li>Refatoração do código do site: automatização para implementação de novas funcionalidades,  aplicando boas práticas de programação e melhora na organização dos arquivos dos corpos das  seções para aumentar a produtividade.</li> <li>Uso do compilador <b>Babel</b> para o site funcionar em navegadores mais antigos.</li></ul><p>Recursos que desejo implementar na próxima versão:</p><ul> <li>Melhorar a aparência visual do site.</li> <li>Finalizar as seções em construção.</li> <li>Colocar mais efeitos de animação (como de transição de seções) no site.</li> <li>Definir a língua do site de forma automática, com base na localização do usuário.</li> <li>Implementar recursos de acessibilidade ao site.</li></ul><p>Encontrou algum erro de digitação ou algum <i>bug</i>? Entre em contato comigo para que eu faça as devidas correções!</p><p>Gostou do meu site? <b>Você</b> também deseja ter o <b>seu</b> site pessoal? Entre em contato comigo para fazermos um orçamento!</p><div class="destaque"> <i>"If you\'re good at something, never do it for free."</i> <br /> <div class="float-right">  The Joker em THE Dark Knight. Direção de Christopher Nolan. WarnerBros. Pictures, 2008. </div></div>  ',
    EN: '<div class="logo m-2 float-left"> <?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#"  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100%" viewBox="0 0 396.87498 396.87501"  version="1.1" id="svg8" inkscape:version="1.0 (1.0+r73+1)" sodipodi:docname="logo-mateus.svg">  <defs id="defs2" />  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0"   inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="0.24748737" inkscape:cx="671.79721"   inkscape:cy="877.12625" inkscape:document-units="px" inkscape:current-layer="layer1"   inkscape:document-rotation="0" showgrid="false" showguides="true" inkscape:guide-bbox="true"   inkscape:pagecheckerboard="true" units="px" inkscape:window-width="1366" inkscape:window-height="703"   inkscape:window-x="1680" inkscape:window-y="282" inkscape:window-maximized="1" fit-margin-top="0"   fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0">   <sodipodi:guide position="79.375,330.72917" orientation="0,1" id="guide833" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="211.66667,330.72917" orientation="0,1" id="guide835" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="79.375,198.4375" orientation="0,1" id="guide837" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="145.52083,198.4375" orientation="0,1" id="guide839" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="211.66667,198.43751" orientation="0,1" id="guide841" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="211.66667,66.145836" orientation="0,1" id="guide843" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="277.8125,198.43751" orientation="0,1" id="guide845" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="291.04167,198.43751" orientation="0,1" id="guide857" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="251.35417,264.58334" orientation="0,1" id="guide859" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="291.04167,330.72917" orientation="0,1" id="guide861" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="291.04167,66.145836" orientation="0,1" id="guide863" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="251.35417,132.29167" orientation="0,1" id="guide865" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="357.1875,231.51042" orientation="0,1" id="guide867" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />   <sodipodi:guide position="357.1875,165.36459" orientation="0,1" id="guide869" inkscape:label=""    inkscape:locked="false" inkscape:color="rgb(0,0,255)" />  </sodipodi:namedview>  <metadata id="metadata5">   <rdf:RDF>    <cc:Work rdf:about="">     <dc:format>image/svg+xml</dc:format>     <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />     <dc:title />    </cc:Work>   </rdf:RDF>  </metadata>  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(79.375,66.145828)">   <circle    style="fill:#28a745;stroke-width:5.84866;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;fill-opacity:1"    id="path885" cx="119.0625" cy="132.29167" r="198.4375" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 0,132.29167 V 7.792882e-7" id="path847" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 66.145833,132.29167 0,7.792882e-7" id="path849" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 132.29167,7.792882e-7 66.145833,132.29167" id="path851" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 132.29167,264.58333 V 7.792882e-7" id="path853" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="m 198.4375,132.29166 -132.291667,1e-5" id="path855" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 178.59375,66.145833 218.28125,2.3869541e-6" id="path871" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 284.42708,99.218751 218.28125,2.3869541e-6" id="path873" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 218.28125,132.29166 284.42708,99.218749" id="path875" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="M 284.42708,165.36458 218.28125,132.29166" id="path877" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="m 218.28125,264.58333 66.14583,-99.21875" id="path879" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />   <path    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"    d="m 178.59375,198.4375 39.6875,66.14583" id="path881" inkscape:connector-type="polyline"    inkscape:connector-curvature="0" />  </g> </svg></div><h1>Welcome to my personal website!</h1><hr class="inlinha" /><div class="inlinha"> <b>Version 2.00</b> <hr class="fill" /> Updated on October 09, 2020</div><p>In this version:</p><ul> <li>Website code refactoring: automation for implementing new features, applying good  programming practices and better sections\' bodies files organization to increase  productivity.</li> <li> Use of <b>Babel</b>\'s compiler to the website work on old browsers.</li></ul><p>Features that I wish to implement in the next version:</p><ul> <li>Improve the website\'s visual appearance.</li> <li>Finish the sections under construction.</li> <li>Put more animation effects (like when transitioning between sections) in the website.</li> <li>Set the language of the website automatic, based in the user location.</li> <li>Implement accessibility features to the website.</li></ul><p>Have you found any typo or bug? Contact me so I can make the properly corrections.</p><p>Have you liked my website? <b>You</b> also wish to have <b>your</b> personal website? Contact me so we can make a budget!</p><div class="destaque"> <i>"If you\'re good at something, never do it for free."</i> <br /> <div class="float-right">  The Joker in THE Dark Knight. Directed by Christopher Nolan. WarnerBros. Pictures, 2008. </div></div>  ',
  },
  sobre: {
    PT: '<h1 class="mb-4">Sobre o autor</h1><div class="linha mb-4"> <div class="img-esquerda m-2">  <img src="./public/assets/img/perfil_mateus.jpeg" alt="Erro ao carregar imagem" width="100%" /> </div> <div>  <h2>Atualmente</h2>  <hr class="inlinha" />  <p>   Sou aluno de mestrado no programa de Pós-Graduação em Matemática Pura e Aplicada da Universidade Federal de   Santa Catarina (UFSC) desde de março de 2020. Eu e meu orientador, o professor Leonardo Koller Sacht (<a    href="http://mtm.ufsc.br/~leo/" target="_blank">ver site do professor</a>), atualmente estamos estudando   as áreas da <b>Computação Gráfica</b> com objetivo de definirmos o tema da minha dissertação de mestrado.   Nos últimos meses, estudamos as áreas de Processamento de Imagens e Processamento de Geometria. No momento,   estamos estudando sobre Aprendizagem Estatística.  </p>  <p>   Além do mestrado, venho estudando programação e áreas correlatadas. Atualmente, estou fazendo um curso   de <b>JavaScript</b> online. Também, já fiz um curso de <b>Python</b> online e li   o livro <b>Clean Code</b>. Além disso, desde que instalei o sistema operacional <b>Linux</b>   em meu computador pessoal, venho o utilizando diariamente, assim como sistema de controle de versão   <b>git</b>.  </p> </div></div><div class="linha mb-4"> <div class="img-direita m-2">  <img src="./public/assets/img/educaco_mateus.jpeg" alt="Erro ao carregar imagem" width="100%" /> </div> <div>  <h2>Educação</h2>  <hr class="inlinha" /><br />  <ul>   <li><i>Pós-Graduação em Matemática Pura e Aplicada (Mestrado)</i>, Universidade Federal de Santa Catarina    (UFSC). 2020 - atualmente.</li><br />   <li><i>Matemática - Bacharelado</i>, Universidade Federal de Santa Catarina (UFSC). 2014 - 2020.</li>  </ul> </div></div><div class="linha mb-4"> <div class="img-esquerda m-2">  <img src="./public/assets/img/curiosidades_mateus.jpeg" alt="Erro ao carregar imagem" width="100%" /> </div> <div>  <h2>Curiosidades</h2>  <hr class="inlinha" />  <p>   Goiano do pé rachado, modelo 96. Torcedor (ou sofredor) do Goiás Esporte Clube. Fã de super-heróis (você   notou as referências pelo site?), Yu-Gi-Oh!, sertanejo e videogames. Gosto também de cozinhar e correr   (apesar de ainda não ter ganho uma prova), além, é claro, de programar. Fluente em inglês e português,   minha língua nativa. Também já estudei alemão.  </p> </div></div><div class="linha mb-4"> <div class="destaque"><i>"Don\'t be what they made you..."</i><br />  <div class="float-right">Logan em LOGAN. Direção de James Mangold. 20th Century Fox, 2017.</div> </div></div><h1 class="mb-4">Sobre o site</h1><div class="linha"> <div class="img-esquerda m-2">  <img src="./public/assets/img/logo-mateus.svg" alt="Erro ao carregar imagem" width="100%" /> </div> <div>  <h2>Motivação, desenvolvimento e <i>design</i></h2>  <hr class="inlinha" />  <p>   Minha motivação inicial para ter um site veio anos atrás, quando queria ter um local pra disponibilizar meus   modelos <b>LaTeX</b> ao público. Hoje em dia minha motivação mudou, e o objetivo com o site é mostrar um   pouco de mim e minhas habilidades como programador ao mundo.  </p>  <p>   O site foi desenvolvido usando <b>HTML</b>, <b>CSS</b> e <b>JavaScript</b> com o objetivo de fazer uma   <i>SPA</i> (sigla do inglês "Single Page Application", que significa uma aplicação/aplicativo de página   única, isto é, existe apenas uma página web e não uma para cada seção do site). Vou aprender um pouco sobre   a biblioteca <b>React</b> nos próximos meses, e pretendo utilizar ele ou o <i>framework</i> <b>Vue.js</b>   na próxima versão do site, para ver as diferenças no desenvolvimento utilizando essas ferramentas.  </p>  <p>   O site foi todo desenvolvido por mim, desde o logo até as cores, com exceção das imagens das rede sociais e   de manutenção, os quais peguei pronto ou editei. Em relação as cores, quis ser minimalista. O <i>design</i>   do logo do site foi baseado na minha paixão pelo Goiás Esporte Clube.  </p> </div></div>  ',
    EN: '<h1 class="mb-4">About the author</h1><div class="linha mb-4"> <div class="img-esquerda m-2">  <img src="./public/assets/img/perfil_mateus.jpeg" alt="Error while loading image" width="100%" /> </div> <div>  <h2>Currently</h2>  <hr class="inlinha" />  <p>   I am master student in Postgraduation program in Pure and Applied Mathematics at Federal   University of Santa Catarina (UFSC) since March 2020. I and my advisor, professor Leonardo   Koller Sacht (<a href="http://mtm.ufsc.br/~leo/" target="_blank">see professor\'s website</a>),   currently study the areas of <b>Computer Graphics</b> with the goal of defining the topic of   my masters thesis. In the last months we have studied the areas of Image Processing and Geometry   Processing. In the moment, we are studying about Statistical Learning.  </p>  <p>   Beyond studying for my master\'s degree, I have been studying programming and related   areas. Currently, I am taking a <b>JavaScript</b> online course. Also, I have already   done a <b>Python</b> online course and read the book <b>Clean Code</b>. Furthermore, since I   have installed <b>Linux</b>\'s operating system in my personal computer, I have been using   it daily, as well as <b>git</b>\'s version control system.  </p> </div></div><div class="linha mb-4"> <div class="img-direita m-2">  <img src="./public/assets/img/educaco_mateus.jpeg" alt="Error while loading image" width="100%" /> </div> <div>  <h2>Education</h2>  <hr class="inlinha" /><br />  <ul>   <li><i>Post-Graguation in Pure and Applied Mathematics (Master degree)</i>, Federal University    of Santa Catarina (UFSC). 2020 - currently.</li><br />   <li><i>Mathematics - Bachelor degree</i>, Federal University of Santa Catarina (UFSC). 2014 -    2020.</li>  </ul> </div></div><div class="linha mb-4"> <div class="img-esquerda m-2">  <img src="./public/assets/img/curiosidades_mateus.jpeg" alt="Error while loading image" width="100%" /> </div> <div>  <h2>Curiosities</h2>  <hr class="inlinha" />  <p>   Born in Goiânia, model 96. Fan (or sufferer) of Goiás Esporte Clube. Fan of super heroes   (have you noticed the references around the website?), Yu-Gi-Oh!, sertanejo and video games.   I also like cooking and running (despite the fact that I still have not won a competition),   beyond, of course, programming. Fluent in english and portuguese, my native language. I have also   already studied germany.  </p> </div></div><div class="linha mb-4"> <div class="destaque"><i>"Don\'t be what they made you..."</i><br />  <div class="float-right">Logan in LOGAN. Directed by James Mangold. 20th Century Fox, 2017.</div> </div></div><h1 class="mb-4">About the website</h1><div class="linha"> <div class="img-esquerda m-2">  <img src="./public/assets/img/logo-mateus.svg" alt="Error while loading image" width="100%" /> </div> <div>  <h2>Motivaton, development and design</h2>  <hr class="inlinha" />  <p>   My initial motivation for having a website came years ago, when I wanted a place to post   my <b>LaTeX</b>\'s templates to the public. Nowadays my motivation has changed, and my goal   with the website is to show the world a little of myself and some of my programming skills.  </p>  <p>   The website was developed using <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b> with the goal   of making a SPA (Single Page Application, i.e., there is only a web page and not one for   each section of the website). I will learn a little about the <b>React</b> library in the next   months, and I intend to use it or the <b>Vue.js</b> framework in the next version of the   website, to see the differences of the development using these tools.  </p>  <p>   The website was entirely developed by me, from the logo to the colors, with exception of the   images from social networks and from maintenance, which I took or edited. Regarding the colors,   I wanted to be as simple as possible. The logo\'s design was based in my passion for Goiás   Esporte Clube.  </p> </div></div>  ',
  },
  publicacoes: {
    PT: '<div class="destaque"> <div class="logo m-2 float-left">  <img src="./public/assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" /> </div> <div class="logo m-2 float-right">  <img src="./public/assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" /> </div> <h1>Seção em construção</h1> <p>  Nesta seção de <b>Publicações</b>, pretendo colocar as minhas publicações da graduação e, também agora, do  mestrado. Além de divulgar meu conhecimento ao público, desejo também interagir com vocês. Sintam-se à vontade  para mandarem correções e sugestões, ou até mesmo tirarem dúvidas! </p></div>  ',
    EN: '<div class="destaque"> <div class="logo m-2 float-left">  <img src="./public/assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" /> </div> <div class="logo m-2 float-right">  <img src="./public/assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" /> </div> <h1>Section under construction</h1> <p>  In this section of <b>Publications</b>, I intend to post my uder graduation and, also now, mastering  publications. Beyond spreading my knowledge to the public, I also wish to interact with you. Feel free to send  me corrections and suggestions, or even clear up doubts! </p></div>  ',
  },
  modelos: {
    PT: '<div class="destaque"> <div class="logo m-2 float-left">  <img src="./public/assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" /> </div> <div class="logo m-2 float-right">  <img src="./public/assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" /> </div> <h1>Seção em construção</h1> <p>  Nesta seção de <b>Modelos</b>, pretendo disponibilizar os links para os repositórios do <b>GitHub</b>  dos modelos <b>LaTeX</b> que desenvolvi e utilizo no dia a dia. Disponibilizá-los online foi minha  motivação inicial para ter um site anos atrás. </p></div>',
    EN: '<div class="destaque"> <div class="logo m-2 float-left">  <img src="./public/assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" /> </div> <div class="logo m-2 float-right">  <img src="./public/assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" /> </div> <h1>Section under construction</h1> <p>  In this section of <b>Templates</b>, I intend to post the links to the <b>GitHub</b>\'s repositories  of the <b>LaTeX</b>\'s templates that I developed and use daily. Posting them online was my initial  motivation for having a website years ago. </p></div>  ',
  },
  jogos: {
    PT: '<div class="destaque"> <div class="logo m-2 float-left">  <img src="./public/assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" /> </div> <div class="logo m-2 float-right">  <img src="./public/assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" /> </div> <h1>Seção em construção</h1> <p>  Nesta seção de <b>Jogos</b>, pretendo colocar os jogos que desenvolvo como exercícios de programação para vocês  se divertirem. A princípio, o site só irá rodar jogos desenvolvidos em <b>JavaScript</b>. </p> <p>  Tem alguma ideia interessante de jogo para eu implementar? Entre em contato comigo! </p></div>  ',
    EN: '<div class="destaque"> <div class="logo m-2 float-left">  <img src="./public/assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" /> </div> <div class="logo m-2 float-right">  <img src="./public/assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" /> </div> <h1>Section under construction</h1> <p>  In this section of <b>Games</b>, I intend to post the games that I develop as programming training exercises for  you to have fun. At first, the site will only run games developed in <b>JavaScript</b>. </p> <p>  Do you have an interesting idea of a game for me to implement? Contact me! </p></div>  ',
  },
  contato: {
    PT: '<h1 class="mb-4">Contato</h1><div> <a class="linha-contato">  <img src="./public/assets/img/email-desativado.svg" alt="logo email" width="30px" id="email-contato"   class="mr-2" />Me  envie um e-mail: matews1943 at gmail.com </a></div><p class="par-contato">Forma mais simples de se comunicar comigo. Respondo dentro de um dia.</p><div> <a href="https://www.linkedin.com/in/mateusoliveira43/" target="_blank" class="linha-contato"><img   src="./public/assets/img/linkedin-desativado.svg" alt="logo linkedin" width="30px" id="linkedin-contato"   class="mr-2" />Meu perfil no Linkedin </a></div><p class="par-contato">Confira meu Linkedin!</p><div> <a href="https://github.com/mateusoliveira43" target="_blank" class="linha-contato"><img   src="./public/assets/img/github-desativado.svg" alt="logo github" width="30px" id="github-contato"   class="mr-2" />Meu  perfil no GitHub </a></div><p class="par-contato">Confira meu repositório no Github!</p><div> <a href="https://www.youtube.com/channel/UCAXCKVHXg5weD2zqFJ056QQ" target="_blank" class="linha-contato"><img   src="./public/assets/img/youtube-desativado.svg" alt="logo youtube" width="30px" id="youtube-contato"   class="mr-2" />Meu  canal no YouTube </a></div><p class="par-contato">Confira meu canal no YouTube!</p><div> <a href="http://lattes.cnpq.br/7572519952454058" target="_blank" class="linha-contato">  <img src="./public/assets/img/lattes-desativado.svg" alt="logo lattes" width="30px" id="lattes-contato"   class="mr-2" />Meu  Currículo Lattes </a></div><p class="par-contato">Confira meu Currículo Lattes!</p><div> <a href="https://raw.githubusercontent.com/mateusoliveira43/CVs/master/CV_Mateus_PT.pdf" target="_blank"  class="linha-contato">  <img src="./public/assets/img/cv-desativado.svg" alt="logo cv" width="30px" id="cv-contato" class="mr-2" />Meu  Curriculum  Vitae (português) </a></div><div> <a href="https://raw.githubusercontent.com/mateusoliveira43/CVs/master/CV_Mateus_EN.pdf" target="_blank"  class="linha-contato">  <img src="./public/assets/img/cv-desativado.svg" alt="logo cv" width="30px" id="cv-contato2" class="mr-2" />Meu  Curriculum  Vitae (inglês) </a></div><p class="par-contato">Confira meu Curriculum Vitae!</p>  ',
    EN: '<h1 class="mb-4">Contact</h1><div> <a class="linha-contato"><img src="./public/assets/img/email-desativado.svg" alt="logo email" width="30px"   id="email-contato" class="mr-2" />Send me an e-mail: matews1943 at gmail.com </a></div><p class="par-contato">Simplest way of communicating with me. I reply within a day.</p><div> <a href="https://www.linkedin.com/in/mateusoliveira43/" target="_blank" class="linha-contato"><img   src="./public/assets/img/linkedin-desativado.svg" alt="logo linkedin" width="30px" id="linkedin-contato"   class="mr-2" />My Linkedin profile </a></div><p class="par-contato">Check out my Linkedin!</p><div> <a href="https://github.com/mateusoliveira43" target="_blank" class="linha-contato"><img   src="./public/assets/img/github-desativado.svg" alt="logo github" width="30px" id="github-contato"   class="mr-2" />My  GitHub profile </a></div><p class="par-contato">Check out my Github repository!</p><div> <a href="https://www.youtube.com/channel/UCAXCKVHXg5weD2zqFJ056QQ" target="_blank" class="linha-contato"><img   src="./public/assets/img/youtube-desativado.svg" alt="logo youtube" width="30px" id="youtube-contato"   class="mr-2" />My  YouTube channel </a></div><p class="par-contato">Check out my YouTube channel!</p><div> <a href="http://lattes.cnpq.br/7572519952454058" target="_blank" class="linha-contato">  <img src="./public/assets/img/lattes-desativado.svg" alt="logo lattes" width="30px" id="lattes-contato"   class="mr-2" />My  Curriculum Lattes </a></div><p class="par-contato">Check out my Curriculum Lattes!</p><div> <a href="https://raw.githubusercontent.com/mateusoliveira43/CVs/master/CV_Mateus_EN.pdf" target="_blank"  class="linha-contato">  <img src="./public/assets/img/cv-desativado.svg" alt="logo cv" width="30px" id="cv-contato" class="mr-2" />My  Curriculum  Vitae (english) </a></div><div> <a href="https://raw.githubusercontent.com/mateusoliveira43/CVs/master/CV_Mateus_PT.pdf" target="_blank"  class="linha-contato">  <img src="./public/assets/img/cv-desativado.svg" alt="logo cv" width="30px" id="cv-contato2" class="mr-2" />My  Curriculum  Vitae (portuguese) </a></div><p class="par-contato">Check out my Curriculum Vitae!</p>  ',
  },
};

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
      <img id="${redeSocial}" src="./public/assets/img/${srcImgRedesSociais[redeSocial]}" alt="logo ${redeSocial}" width="30px" />
    </a>
  </div>`;
});

// ----------------EVENTLISTENERS----------------
botaoTrocaLingua.addEventListener('click', () => trocaLingua());
Object.values(listaDeSecoes).forEach((secao) => {
  document.querySelector(`#${secao}`).addEventListener('click', () => irSecao(`${secao}`));
});
Object.values(listaDeRedesSociais).forEach((redeSocial) => {
  document.querySelector(`#${redeSocial}`).addEventListener('mouseover', () => hoverAtivo(redeSocial));
});
Object.values(listaDeRedesSociais).forEach((redeSocial) => {
  document.querySelector(`#${redeSocial}`).addEventListener('mouseout', () => hoverDesativo(redeSocial));
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
  if (classMouseOver === 'mr-2') {
    if (e.target.id.includes('2')) {
      hoverAtivo(e.target.id.replace('-contato2', ''), 'contato2');
    } else {
      hoverAtivo(e.target.id.replace('-contato', ''), 'contato');
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
  if (classMouseOut === 'mr-2') {
    if (e.target.id.includes('2')) {
      hoverDesativo(e.target.id.replace('-contato2', ''), 'contato2');
    } else {
      hoverDesativo(e.target.id.replace('-contato', ''), 'contato');
    }
  }
});

// ----------------FUNÇÕES----------------
function irSecao(secao) {
  // const caminho = `./public/view/_${secao}${lingua}.html`;
  // fetch(caminho)
  //   .then((response) => response.text())
  //   .then((html) => {
  //     corpo.innerHTML = html;
  //   });
  corpo.innerHTML = secoes[secao][lingua];
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
    troca.src = `./public/assets/img/${logo}-ativado.svg`;
  } else {
    const troca = document.querySelector(`#${logo}`);
    troca.src = `./public/assets/img/${logo}-ativado.svg`;
  }
}

function hoverDesativo(logo, contato) {
  if (contato) {
    const troca = document.querySelector(`#${logo}-${contato}`);
    troca.src = `./public/assets/img/${logo}-desativado.svg`;
  } else {
    const troca = document.querySelector(`#${logo}`);
    troca.src = `./public/assets/img/${logo}-desativado-rodape.svg`;
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
