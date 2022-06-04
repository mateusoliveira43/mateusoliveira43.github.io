FROM node:14.17.3

ARG USER_ID
ARG GROUP_ID
ARG USERNAME
ARG WORK_DIR

RUN userdel -r node \
    && groupadd --gid $GROUP_ID $USERNAME \
    && useradd --uid $USER_ID --gid $GROUP_ID --create-home $USERNAME
USER $USERNAME

RUN mkdir $WORK_DIR
WORKDIR $WORK_DIR

COPY package.json package-lock.json ./

RUN npm ci
