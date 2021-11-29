# My personal website!

Repository of [my personal website](https://mateusoliveira43.github.io/), develop by me and using [GitHub Pages](https://pages.github.com/).

TODO criar essas coisas no repo
Dúvidas e sugestões de melhoria são bem-vindas! Entre em contato ou abra uma *Issue* ou um *Pull Request* as reportando!

## Initial Setup

Run all the commands presented in this README in your Linux's Terminal.

citar seção dependências

npm ci is better for CI solutions etc...
script de inicialização e docker

change `.env` bla bla

## Initialize Server

To create the .env file, run
```
./scripts/env.sh
```

### Local Machine

To start the development server, run
```
npm start
```

npm start e run build...

### Docker

To start the development server, on host and port specified in .env file, run
```
docker-compose -f docker/docker-compose.yml --project-directory ./ up
```

For more information about the containers of the project, check the [repository's Wiki](https://github.com/mateusoliveira43/mateusoliveira43.github.io/wiki/Docker).

## Tests

To run the project tests, and collect coverage results into **coverage-results** folder, run
```
npm test
```

For more information about testing the project, check the [repository's Wiki](https://github.com/mateusoliveira43/mateusoliveira43.github.io/wiki/Tests).

# Standardization
TODO regras do Eslint de desabilitar e tal, explicar o que é e comando run lint

To check code style, run
```
npm run lint
```

The website code follows ESLint], Prettier] and a personal list of rules to ensure code style. Check them in the [repository's Wiki](https://github.com/mateusoliveira43/mateusoliveira43.github.io/wiki).

<!-- ## Quality
TODO se tiver sonar ou algo -->

## Continuous Integration
TODO GitHub actions

## Requirements
TODO como adicionar dev e normal dependencies

## Dependencies
TODO como instalar node e docker (e o que mais for necessário)

## Tasks

To manage the open tasks of the website, I use [this board](https://github.com/mateusoliveira43/mateusoliveira43.github.io/projects) of [GitHub](https://docs.github.com/en/issues/organizing-your-work-with-project-boards).

TODO ver se precisa criar cards para esses pontos
- [ ] Melhorar a aparência visual do site.
- [ ] Finalizar as seções em construção.
- [ ] Colocar mais efeitos de animação (como de transição de seções) no site.
- [ ] Definir a língua do site de forma automática, com base na localização do usuário.
- [ ] Implementar recursos de acessibilidade ao site.

## License

This repository is licensed under the terms of [MIT License](LICENSE).



<!-- extras para serem incluídos no README ou Wiki -->

## Fluxo de desenvolvimento

TODO escrever sobre desenvolvimento

# comandos

```
npx create-react-app . --template typescript
```

TODO JSDOC -> VS CODE /** atalho , ver alternativa para gerar documentação (com typescript não funciona)

TODO script de inicialização

sequência de qualidade
  - `npm outdated` -> npm update OU npm i [-D] package-name@latest
  - `npm audit`

comando útil `npm ls`

# como atualizar a versão

TODO

# JS import standard

TODO types: interfaces depois types, em ordem alfabética

TODO ver se os imports estão certos https://github.com/mateusoliveira43/mateusoliveira43.github.io/wiki/Import-Rule

# CSS organization

TODO usar abcss (é esse o nome?)

TODO escrever sobre o deploy
https://create-react-app.dev/docs/deployment/#github-pages

package.json
  private?
  dependências
  scripts
  eslint
  prettier
  jest.config
