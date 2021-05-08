# node-express-ts

### Build docker image

```docker
docker image build -t node-app .
```
### Run the container using docker-compose for dev env

```docker
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d
```

### Rebuild the image (pass --build)

```docker 
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build
```

### To scale the container (pass --scale)

```docker
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up --scale node-app=2
```

### For prod environment set the env variables in the system

```bash
export SESSION_SECRET='hello'
printenv # to print all the environment variable
```
### Production deploy using docker swarm for orchestration

```docker
docker stack deploy -c docker-compose.yml -c docker-compose-prod.yml myapp #
```

### Docker swarm commands

```docker
docker node ls # lists all the available nodes
docker node stack # lists all the available stacks
docker stack myapp # to list out the services in the stack
```