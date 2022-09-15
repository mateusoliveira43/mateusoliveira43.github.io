# My personal website!

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

- [Arquivo README em português](docs/README_PT.md)

Questions and suggestions for improvement are welcome! Get in touch or open a *Issue* or a *Pull Request* reporting them!

## Requirements

- [Python](https://wiki.python.org/moin/BeginnersGuide/Download) 3.7 or higher
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Development

To change Container/website configuration, change the variables in `.env` file. It is created automatically when a docker script is called.

To start the website (in development mode), run
```
./scripts/docky.py up
```
To stop it, run `CTRL+C`.

To connect to container's shell, run
```
./scripts/docky.py run sh
```
To exit the container's shell, run `CTRL+D` or `exit`.

To remove the project's containers, images, volumes and networks, run
```
./scripts/docky.py down
```

Run the commands presented in the following section in the container's shell.

## Website

To install the website dependencies, run
```
npm ci
```

To run the website in development mode, run
```
npm start
```
To stop it, run `CTRL+C`.

To create the website production code, run
```
npm run build
```

To run the website in production mode, run
```
npm run prod
```
To stop it, run `CTRL+C`.


## Quality

The quality metrics of the project are reproduced by the continuos integration (CI) pipeline of the project. CI configuration in [`.github/workflows/ci.yml`](.github/workflows/ci.yml) file.

### Tests

To run tests and coverage report, run
```
npm test
```

To see the html report, check `coverage-results/lcov-report/index.html`.

Tests and coverage configuration in [`jest.config.ts`](jest.config.ts) file.

### Linter

To run JavaScript linter, run
```
npm run lint
```

JavaScript linter configuration in [`.eslintrc.js`](.eslintrc.js) file.

### Code formatter

To format JavaScript code, run
```
npm run lint -- --fix
```

JavaScript code formatter configuration in [`.prettierrc.js`](.prettierrc.js) file.

### Security vulnerability scanners

To check known security vulnerabilities in JavaScript dependencies, run
```
npm audit
```

To check for outdated JavaScript dependencies, run
```
npm outdated --long
```

## License

This repository is licensed under the terms of [MIT License](LICENSE).
