# My personal website!

[![Continuos Integration](https://github.com/mateusoliveira43/mateusoliveira43.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/mateusoliveira43/mateusoliveira43.github.io/actions)
[![Continuos Delivery](https://github.com/mateusoliveira43/mateusoliveira43.github.io/actions/workflows/cd.yml/badge.svg)](https://github.com/mateusoliveira43/mateusoliveira43.github.io/actions)

Dúvidas e sugestões de melhoria são bem-vindas! Entre em contato ou abra uma *Issue* ou um *Pull Request* as reportando!

# Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

# Usage

To start the website, run
```
docker/up.sh
```
To stop it, run `CTRL+D` or `exit`.

To connect to container's shell, run
```
docker/run.sh
```
To exit the container's shell, run `CTRL+D` or `exit`.

To remove the project's containers, images, volumes and networks, run
```
docker/down.sh
```

To change Docker/website configuration, change the variables in `.env` file.

# Quality

citar arquivo yml

## Tests

To run tests and coverage report, run
```
npm test
```

To see the html report, check `coverage-results/lcov-report/index.html`.

Tests and coverage configuration in [`jest.config.ts`](jest.config.ts) file.

## Linter

To run JavaScript linter, run
```
npm run lint
```

JavaScript linter configuration in [`.eslintrc.js`](.eslintrc.js) file.

sequência de qualidade
  - `npm outdated` -> npm update OU npm i [-D] package-name@latest
  - `npm audit`

# License

This repository is licensed under the terms of [MIT License](LICENSE).
