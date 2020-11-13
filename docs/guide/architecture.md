# Architecture Concept

The following is a concept of a bare-bones architecture for American Whitewater services.

This approach is based on one repo which serves as a master for architecture / stack configuration, deployment, and development. Services like the tile server, gage server, API, etc, would be configured here and listed as a git submodule if applicable.

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
