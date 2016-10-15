FROM ubuntu:16.04
COPY ./sources.list /etc/apt/sources.list
RUN apt-get update && apt-get install -y \
    curl \
    apt-utils \
    sudo \
    apt-transport-https \
    ca-certificates \
    apt-utils \
 && curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash - \
 && apt-get update  \
 && apt-get install -y nodejs
ADD . /code
WORKDIR /code
CMD node  app.js
