FROM node:14

WORKDIR /app

COPY package.json .

ARG NODE_ENV

RUN if [ "${NODE_ENV}" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi

ENV PORT 3000

EXPOSE ${PORT}

COPY . .

CMD ["node", "dist/index.js" ]