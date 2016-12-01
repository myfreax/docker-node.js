# Docker-node.js

> 不只是镜像，这是基于Docker的集成开发环境

## TODO

- [ ] Koa2应用测试

## Feature

- Ubuntu16.04

- Node.js 7.x lts

- Integrate docker-compose- Image size only 268MB

- Than the official small- easy to distribute deployment

## How to use it?

#### Requirements

- [Docker](https://www.docker.com/)

- [Docker-compose](https://github.com/docker/compose/releases)

#### Install

```bash

git clone https://github.com/huangyanxiong01/docker-node.js.git

cd docker-node.js

docker-compose up -d

```

Now,you can open http://127.0.0.1:3000/ in browser

## Pull image

```

docker pull huangyanxiong2012/docker-node.js

```

>If live behind the GFW please read this post [Use Ali cloud](http://www.myfreax.com/use-aliyun-mirror-acceleration-on-docker/)

## Note

> If Ubuntu official source is too slow,You can add command in Dockerfile

```

FROM ubuntu:16.04COPY ./sources.list /etc/apt/sources.list

```


