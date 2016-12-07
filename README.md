# Docker-node.js

> Based on the docker to build the development environment
 
## TODO
- [ ] Nginx
- [ ] Nodemon

## Software Stack
- MongoDB
- Redis
- MySQL
- Node.js 7.x

## How to use it?

#### Requirements

- [Docker](https://www.docker.com/)

- [Docker-compose](https://github.com/docker/compose/releases)

#### Install

```bash

git clone https://github.com/huangyanxiong01/docker-node.js.git

cd docker-node.js

docker-compose up -d

yarn install

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