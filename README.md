# node-express-ts

### Build docker image

```docker
docker image build -t node-app .
```
### Run the container using docker-compose for dev env

```docker
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d
```

### Run the container using docker-compose for prod env

```docker
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d
```

### Rebuild the image (pass --build)

```docker 
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build
```
