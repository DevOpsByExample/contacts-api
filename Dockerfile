FROM node:11.14.0-alpine

ENV NODE_ENV production
ENV APP_DIR /opt/contacts-api
WORKDIR ${APP_DIR}

ADD package.json package-lock.json ./
RUN npm install --production
ADD . ./

EXPOSE 3000

CMD ["npm", "start"]