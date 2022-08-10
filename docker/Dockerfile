FROM node:16.16.0-alpine

ARG USER_ID
ARG GROUP_ID
ARG USER_NAME
ARG USER_HOME
ARG WORK_DIR

RUN deluser node \
    && addgroup --gid $GROUP_ID $USER_NAME \
    && adduser --uid $USER_ID --ingroup $USER_NAME --home $USER_HOME --disabled-password $USER_NAME
USER $USER_NAME
RUN mkdir $WORK_DIR
WORKDIR $WORK_DIR
COPY package.json package-lock.json ./
RUN npm ci
