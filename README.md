# Meu site pessoal!

Repositório do [meu site pessoal](https://mateusoliveira43.github.io/), desenvolvido por mim e utilizando [GitHub Pages](https://pages.github.com/).

Dúvidas e sugestões de melhoria são bem-vindas! Entre em contato ou abra uma *Issue* ou um *Pull Request* as reportando!

## Tarefas

Tarefas em aberto parar implementar nas próximas versoões do site (também utilizo o [Trello](https://trello.com) para gerenciar tarefas).

- [ ] Melhorar a aparência visual do site.
- [ ] Finalizar as seções em construção.
- [ ] Colocar mais efeitos de animação (como de transição de seções) no site.
- [ ] Definir a língua do site de forma automática, com base na localização do usuário.
- [ ] Implementar recursos de acessibilidade ao site.

## Fluxo de desenvolvimento

O site foi desenvolvido usando **HTML**, **CSS** e **JavaScript** com o objetivo de fazer uma SPA (sigla do inglês "Single Page Application", que significa uma aplicação/aplicativo de página única, isto é, existe apenas uma página web e não uma para cada seção do site). Para tal, as seções são salvas em strings no arquivo `main.js` (tentei usar a função `fetch`, mas não funciona com o GitHub Pages).

Para agilizar esse processo, utilizo um script `linha.py` feito em **Python** que lê os arquivos de `./public/view/` e os tranforma em um arquivo de uma única linha. Para utilizá-lo, cole o conteúdo do arquivo na variável `body` e excute
```bash
python3 linha.py
```
Isso irá criar um arquivo `linha.txt`. Insira o conteúdo na respectiva chave da variável `secoes` em `./src/js/main.js`.

Vou aprender um pouco sobre a biblioteca **React** nos próximos meses, e pretendo utilizá-la ou o framework **Vue.js** na próxima versão do site, para ver as diferenças no desenvolvimento utilizando essas ferramentas (e se consigo remover o passo intermediário com **Python**).

Agora, resta atualizar o arquivo `bundle.js`, gerado pelo **Babel** e **Webpack**. Para instalar as depêndencias do projeto, execute
```bash
npm i
```

Para rodar o compilador do **Babel** e gerar o arquivo `buldle.js`, execute
```bash
npm run converte
```
Isso deixará o compilador rodando. Para pará-lo, pressione `ctrl+C`.

## Licença

Esse repositório é licenciado sob os termos da [Licença MIT](LICENSE).
