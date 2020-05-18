<h1 align="center">Minimal Boilerplate for NestJS + TypeORM</h1>

<p align="center">
  <a aria-label="last commit" href="https://github.com/tak-bro/nestjs-typeorm-serverless-boilerplate/commits/develop">
    <img alt="" src="https://img.shields.io/github/last-commit/tak-bro/nestjs-typeorm-serverless-boilerplate.svg">
  </a>
  <a aria-label="license" href="https://github.com/tak-bro/nestjs-typeorm-serverless-boilerplate/blob/develop/LICENSE">
    <img src="https://img.shields.io/github/license/tak-bro/nestjs-typeorm-serverless-boilerplate.svg" alt="">
  </a>
</p>

> NestJS + TypeORM + Fastify + Serverless Framework Boilerplate

## Prerequisite
- [Docker](https://www.docker.com/)
- [NestJS](https://nestjs.com/)

## Usage

### Installation

```bash
$ git clone git@github.com:tak-bro/nestjs-typeorm-serverless-boilerplate.git
$ cd nestjs-typeorm-serverless-boilerplate

# rename .env.example to .env
$ mv .env.example .env

# rename env-example folder to env for serverless environment
$ mv env-example/ env/

$ npm install
```

### Template Module

- Please refer **[dummy](https://github.com/tak-bro/nestjs-typeorm-serverless-boilerplate/tree/develop/src/modules/dummy)** folder to getting started with implementing simple REST API

## Running the app

```bash
# run MySQL on docker
$ docker-compose up -d

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# serverless-offline mode
$ npm run start:sls
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/tak-bro/nestjs-typeorm-serverless-boilerplate/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

## Stay in touch

- [Author](https://env-tak.github.io/)

### License

The MIT License (see the [LICENSE](https://github.com/tak-bro/nestjs-typeorm-serverless-boilerplate/blob/develop/LICENSE) file for the full text)
