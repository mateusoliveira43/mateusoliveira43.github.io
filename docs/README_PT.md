# Meu site pessoal!

[![Continuos Integration](https://github.com/mateusoliveira43/mateusoliveira43.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/mateusoliveira43/mateusoliveira43.github.io/actions)
[![Continuos Delivery](https://github.com/mateusoliveira43/mateusoliveira43.github.io/actions/workflows/cd.yml/badge.svg)](https://github.com/mateusoliveira43/mateusoliveira43.github.io/actions)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Alpine Linux](https://img.shields.io/badge/Alpine_Linux-%230D597F.svg?style=for-the-badge&logo=alpine-linux&logoColor=white)

- [README file in English](../README.md)

Dúvidas e sugestões de melhoria são bem-vindas! Entre em contato ou abra uma *Issue* ou um *Pull Request* as reportando!

# Requisitos

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

# Uso

Para trocar as configurações do Docker/site, mude as variáveis no arquivo `.env`. Ele é craido automaticamente quando um script do docker é chamado.

## Docker

Execute os comandos apresentados nessa seção em uma shell Linux.

Para rodar o site (em mode de desenvolvimento), execute
```
docker/up.sh
```
Para pará-lo, execute `CTRL+C`.

Para se conectar a shell do Container, execute
```
docker/run.sh
```
Para sair da shell do container, execute `CTRL+D` ou `exit`.

Para apagar os Containers, imagens, volumes e redes do projeto, execute
```
docker/down.sh
```

## Site

Execute os comandos apresentados nessa seção na shell do container.

Para rodar o site em mode de desenvolvimento, execute
```
npm start
```
Para pará-lo, execute `CTRL+C`.

Para criar o código de produção do site, execute
```
npm run build
```

Para rodar o site em mode de produção, execute
```
npm run prod
```
Para pará-lo, execute `CTRL+C`.


# Qualidade

Execute os comandos apresentados nessa seção na shell do container.

As métricas de qualidade do projeto são reproduzidas pela etapas de integração contínua do projeto. Configurações das etapas de integração contínua descritas no arquivo [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

## Testes

Para rodar os testes e relatório de cobertura, execute
```
npm test
```

Para ver o relatório html, confira `coverage-results/lcov-report/index.html`.

Configurações dos testes e relatório de cobertura descritas no arquivo [`jest.config.ts`](jest.config.ts).

## Linter

Para rodar o linter de código JavaScript, execute
```
npm run lint
```

Configurações do linter de JavaScript descritas no arquivo [`.eslintrc.js`](.eslintrc.js).

## Formatador de código

Para formatar código JavaScript, execute
```
npm run lint -- --fix
```

Configurações do formatador de código JavaScript no arquivo [`.prettierrc.js`](.prettierrc.js).

## Varredura de vulnerabilidades de segurança

Para checar vulnerabilidades de segurança conhecidas nas dependências JavaScript, execute
```
npm audit
```
Para checar dependências JavaScript desatualizadas, execute
```
npm outdated
```

# Licença

Esse repositório é licenciado sob os termos da [MIT License](LICENSE).
