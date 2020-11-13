# Architecture Concept

The following is a concept of a bare-bones architecture for American Whitewater services.

This approach is based on [`one repo`](https://github.com/AmericanWhitewater/wh2o-docker) which serves as a master for architecture / stack configuration, deployment, and development. Services like the tile server, gage server, API, etc, would be configured here and listed as a git submodule if applicable. This approach is modeled off of the classic [`MEAN stack`](https://en.wikipedia.org/wiki/MEAN_(solution_stack)), except in our case it would be Postgres and Vue instead of Mongo and Angular. The PEVN stack.

## Services

### API

- Node.js
- Express / REST
- TypeScript
- Deployment
  - AWS EKS, ECS, or EC2.
- Considerations
  - Handling static assets. User uploaded files will be stored in S3.

### Web / Client

- Vue.js
- Deployment
  - Served statically via AWS S3 + Cloudfront

### Database

- Postgres / dmillion
- Deployment
  - AWS RDS
- Considerations
  - Connection Pooling. How to handle many connections from many API instances.

### Nginx

> TL;DR: Node is awfully bad at doing CPU intensive tasks like gzipping, SSL termination, etc. You should use ‘real’ middleware services like nginx, HAproxy or cloud vendor services instead. Otherwise: Your poor single thread will stay busy doing infrastructural tasks instead of dealing with your application core and performance will degrade accordingly

[`Node Best Practices - Going to Production - 5.3`](https://github.com/goldbergyoni/nodebestpractices#-53-delegate-anything-possible-eg-gzip-ssl-to-a-reverse-proxy)

### Tile Server

- Tegola?

### Gage Server

- Lambda cron job to fetch data?

## Outline

Here's an outline of the services and their config/deployment files.

```
|-- wh2o
    |-- kubernetes
        |-- wh2o-api.service.yml
        |-- wh2o-api.deployment.yml
        |-- nginx.service.yml
        |-- nginx.deployment.yml
        |-- redis.service.yml
        |-- redis.deployment.yml
        |-- tegola.service.yml
        |-- tegola.deployment.yml
    |-- docker
        |-- wh2o-api.dockerfile
        |-- wh2o-vue.dockerfile
        |-- nginx.dockerfile
        |-- redis.dockerfile
        |-- tegola.dockerfile
    |-- wh2o-api
    |-- wh2o-vue
    |-- docker-compose.yml
```

## Prototypes

- [`wh2o-docker`](https://github.com/AmericanWhitewater/wh2o-docker)
  - [`wh2o-vue`](https://github.com/AmericanWhitewater/wh2o-vue/tree/next) - branch `next`
  - [`wh2o-api`](https://github.com/AmericanWhitewater/wh2o-api)

## The Case for Node.js

There are many reasons why Node.js could be a great solution for AW's API. The following are a few benefits the AW team specifically could get out of Node.js. In addition, here is an article which provides a more in-depth technical assessment of Node.js and it's pros/cons: [`Why the Hell Would You Use Node.js?`](https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e).

### Accessibility

Built on Javascript, one of the most popular programming languages in the world ([Jetbrains](https://www.jetbrains.com/lp/devecosystem-2020/?gclid=Cj0KCQiA-rj9BRCAARIsANB_4ADu1w5Xp3hx0GHutrAUD9M33YWogJSZRleycEwrezIwfuFUTdpnKqMaAp-uEALw_wcB&gclsrc=aw.ds)) Node.js is accessible to anyone with rudimentary Javascript skills.

- anyone on the team can help maintain and develop the API not just one person. Great for when when we need bug fixes quickly.
- runs on mac and pc
- a lot of people know javascript
- easy to get up and running with local development is a breeze.
- large / active community

### Performance

- Node.js is designed to scale. It's in the name. You deploy many "nodes" / "clusters"

## Potential Frontend Migration Plan

In Vue app, create two instances of the http client axios. One for the Graphql API, and one for the Node.js API.

```js
export const rest = axios.create({
  baseUrl: // rest api
})

export const graphql = axios.create({
  baseUrl: // graphql api
})
```

Then if all API requests in the Vue app are abstracted through a uniform `getProperty` action, changing data sources will be a breeze. We can do this by creating a core set og http requests to handle basic CRUD. 

```js
import { rest } from '@/app/global/services'

export async function getResource (url) {
  return rest.get(url).then(res => res.data)
}
export async function createResource ({ url, payload }) {
  return rest.post(url, payload).then(res => res.data)
}
export async function updateResource ({ url, payload }) {
  return rest.put(url, payload).then(res => res.data)
}
export async function deleteResource (url) {
  return rest.delete(url).then(res => res.data)
}
```

Next we create the core Vuex dispatches to match.

```js
async getProperty(context, endpoint) {
  context.commit(types.DATA_LOADING, true)
  try {
    const result = await getResource(endpoint)
    context.commit(types.DATA_SUCCESS, result)
  } catch (error) {
    context.commit(types.DATA_ERROR, error)
  }
},
// ... and others
```

Then create the Vuex submodule.

```js
// my-module.js
import actions from '@/app/store/actions'
import mutations from '@/app/store/mutations'

export default {
  namespaced: true,
  state: {
    error: false,
    loading: false,
    data: null
  },
  mutations,
  actions
}
```

We now have a Vuex module called `MyModule` which can now make all the API requests it needs to get started. 

If your component performs the Graphql equivalent of a GET request, then you can simply override the action.

```js
// special-module.js
import actions from '@/app/store/actions'
import mutations from '@/app/store/mutations'

export default {
  namespaced: true,
  state: {
    error: false,
    loading: false,
    data: null
  },
  mutations,
  actions: {
    ...actions
     getProperty(context, data) {
      // graphql stuff
    }
  }
}
```
