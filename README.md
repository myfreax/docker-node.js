# docker-node.js
> docker node.js image

## feature
- Ubuntu16.04
- Node.js 7.o lts
- Integration docker-compose
- Image size only 268MB
- Than the official small
- easy to distribute deployment

##What is the use?
- Unified development environment

## How to use it?

#### Requirements
- [Docker](https://www.docker.com/)
- [Docker-compose](https://github.com/docker/compose/releases)

#### Install
```
git clone https://github.com/huangyanxiong01/docker-node.js.git
docker-compose up -d
```

Now,you can open http://127.0.0.1:3000/ in browser

##Note
> if Ubuntu official source is too slow,You can add command in Dockerfile

```
FROM ubuntu:16.04
COPY ./sources.list /etc/apt/sources.list
```