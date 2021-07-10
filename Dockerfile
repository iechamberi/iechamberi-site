FROM node:14-alpine as builder

# create destination directory
RUN mkdir -p /opt/app-root/src
WORKDIR /opt/app-root/src

# copy the npm packages and install all dependencies
COPY [ "package.json", "yarn.lock", "./" ]
RUN yarn install

# copy the app, note .dockerignore
COPY . ./

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN yarn build

FROM node:14-alpine

# create destination directory
RUN mkdir -p /opt/app-root/src
WORKDIR /opt/app-root/src

# copy the npm packages and install all dependencies
COPY [ "package.json", "yarn.lock", "./" ]
RUN yarn install --production

# copy the .nuxt dist app and clean the directory
RUN rm yarn.lock
COPY --from=builder /opt/app-root/src/.nuxt ./.nuxt/
COPY --from=builder /opt/app-root/src/static ./static/
COPY --from=builder /opt/app-root/src/nuxt.config.js ./

# run with the production settings
ENV NODE_ENV production

EXPOSE 3000

CMD [ "yarn", "start" ]
