FROM node:lts as base

LABEL maintainer="A2S Institue <mohammad.wasil@h-brs.de>"

# Reduce npm log spam and colour during install within Docker
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

WORKDIR /home/node/app
COPY . /home/node/app/

# Build static web
RUN yarn
RUN yarn build

RUN chown node:node -R /home/node/app/

# Run as node user
USER node
