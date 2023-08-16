# wh2o-api (next)

American Whitewater's next generation API built
with [Fastify](https://www.fastify.io/), [Prisma](https://www.prisma.io/),
and [PostgreSQL](https://www.postgresql.org/).

[![build](https://github.com/AmericanWhitewater/wh2o-api/actions/workflows/build.yml/badge.svg)](https://github.com/AmericanWhitewater/wh2o-api/actions/workflows/build.yml)

> This is still a proof of concept and is not ready for production.

## Goals

- Cost-effective.
  - Leveraging serverless technologies where possible.
- Web server i/o data validation stability and consistency.
  - [Fastify](https://www.fastify.io/) is a web framework that is built for speed and stability. It also
    uses [JSON Schema](https://json-schema.org/) for data validation.
- Documentation.
  - [OpenAPI](https://www.openapis.org/) is used to document the API.
- CI/CD.
  - Checks are run on every pull request and on the `main` branch.
- Testing.
  - Unit tests are run in the CI/CD pipeline and a global coverage requirement of 80% is enforced.
- Developer experience.
  - [Docker](https://www.docker.com/) is used to manage the database and [Prisma](https://www.prisma.io/) is used to
    manage the database schema and migrations as well as seed the database with fake data for local development.
- Hygiene
  - [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) are used to enforce code quality as well as
    style.

## Unknowns

- prisma and geometry data type support
- validating the web server conforms to openapi spec in ci.

## Getting Started

> Steps are verified on Mac with Intel chip. Makefile targets primarily use Homebrew.

First, make sure you have [Docker](https://www.docker.com/) installed and running.

```bash
# Install dependencies
make setup_mac
# Start the database
make docker_dev
# Install NPM dependencies and prep the database
make setup_dev
# Start the server
npm run dev
```

## Documentation

After starting the server, the [OpenAPI](https://www.openapis.org/) documentation will be available
at [http://localhost:3000/docs](http://localhost:3000/docs)

## Testing

```bash
# Run tests
npm test
# Run tests in watch mode; re-runs tests on file changes
npm run test:watch
# Run tests in CI mode; runs tests one at a time and outputs test coverage
npm run test:ci
# Run tests and output test coverage
npm run test:coverage
```

### GitHub Actions

Using the library [act](https://github.com/nektos/act) you can run the GitHub Actions locally.

```bash
# run the build workflow
make action_build
```

## Client SDKs

To generate client SDKs for the API, run the following command:

```bash
make generate_sdks
```

This will generate the following SDKs: `kotlin`, `php`, `swift`, and `typescript-axios` in the `./sdks` directory.
See all available generators here [https://openapi-generator.tech/docs/generators](https://openapi-generator.tech/docs/generators).

## Common Problems

- If you are using a JetBrains IDE and you are making adjustments to the prisma client, you may need to close+reopen the
  IDE to get it to recognize the new client types.

## Notes

- The [`data.json`](./data.json) file is used to invoke the serverless function locally using the Makefile
  target `invoke_local_reach_state`. It is not used in production.
