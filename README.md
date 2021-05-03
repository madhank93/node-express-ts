# node-express-ts

### Build docker image

```docker
docker image build -t node-app .
```
### Run the container

```docker
# use bind mount (read only mode) to sync code with the container, and named volume to preserve node_modules folder.
docker container run -v $(pwd):/app:ro -v node-modules:/app/node_modules -p 3000:3000 -d --name node-app node-app
```