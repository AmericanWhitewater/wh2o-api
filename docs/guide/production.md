### Production

**Note:** Deployment methods and infrastructure are TBD.

**ToDo:** Prod Prep. Consult [this guide](https://github.com/goldbergyoni/nodebestpractices#5-going-to-production-practices).

## Static

Before building the app, run `cp .env.default .env` and apply correct values.

Compile the app:

```
npm run build
```

Files will be outputted in `dist/`. To start the server in production, run `node dist/index.js`.

## Docker

### System Requirements

- [`Docker Desktop - Mac`](https://www.docker.com/products/docker-desktop)
- [`Docker CE - PC`](https://www.docker.com/)

When ready, build images and containers:

```
docker build -t americanwhitewater/wh2o-api:latest .
```

Push to repo:

```
docker push americanwhitewater/wh2o-api:latest
```


Run image container locally:

```
docker run -d --name wh2o-api -p 3000:3000 americanwhitewater/wh2o-api
```



## Kubernetes

Docker Desktop or Docker CE is required. Alternatively, you could use another local Kubernetes option such as [Minikube](https://minikube.sigs.k8s.io/docs/).

From the Docker Desktop GUI, enable Kubernetes. 

![Enable Kubernetes](https://wh2o-api-docs.s3-us-west-1.amazonaws.com/kube-01.png)

Create deployment in Kubernetes cluster:

```
kubectl create -f .k8s
```

To delete the Kubernetes resources when you're done: 

```
kubectl delete -f .k8s
```