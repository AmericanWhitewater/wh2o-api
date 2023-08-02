# wh2o-api

This is a proof of concept for a REST API for American Whitewater based on the Fastify framework.

## Getting Started

> Verified on Mac

```bash
make setup_mac
make docker_dev
make setup_dev
npm run dev
```

## Testing

```bash
npm test
npm run test:watch
npm run test:ci
npm run test:coverage
```

### GitHub Actions

```bash
make action_build
```

## Note

- If you are using a JetBrains IDE and you are making adjustments to the prisma client,
- you may need to close+reopen the IDE to get it to recognize the new client types.

## Todo

- [ ] Investigate serverless. https://fastify.dev/docs/latest/Guides/Serverless#aws
