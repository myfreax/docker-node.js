# Docker-node.js

![nodejsanddocker](./images/nodejsanddocker.jpeg)

## Features

- Automatically restarts the Node.js process
- Support remote debugging
- Customize the configuration file
- Data is stored in the host

 
## Software Stack
- [x] MongoDB
- [x] Redis
- [x] MySQL
- [x] Node.js 7.x
- [x] Nginx with LuaJit
- [x] Nodemon


## How to use it?

>If live behind the [GFW](https://zh.wikipedia.org/zh-hans/%E9%98%B2%E7%81%AB%E9%95%BF%E5%9F%8E) please read this post [Use Ali cloud](http://www.myfreax.com/use-aliyun-mirror-acceleration-on-docker/)


#### Requirements

- [Docker](https://www.docker.com/)

- [Docker-compose](https://github.com/docker/compose/releases)

>Windows and Mac users only need to install Docker

#### Getting started

```bash

git clone https://github.com/huangyanxiong01/docker-node.js.git

cd docker-node.js

yarn install

docker-compose up -d
```
Now,you can open http://127.0.0.1:3000/ in browser

###### Try edit the app.js

```js
ctx.body = `Hello World`;  //in koa2 middleware
```
>The Node.js will automatically restart,Through the module provided by the [nodemon](https://github.com/remy/nodemon) implementation


#### Configure 

You can find the custom $software configuration file in `./docker/$software/etc/`


#### Data

You can find the  $software data file in `./docker/$software/Data/`

## TODO

- [ ] Write a Node.js script that integrates with the framework(such as Express,Koa)
- [ ] Write usage documentation
- [ ] Test on Windows




## Change Log
[ChangeLog.md](ChangeLog.md)



## Other

```

docker pull huangyanxiong2012/docker-node.js

```



## Note

> If Ubuntu official source is too slow,You can add command in Dockerfile

```

FROM ubuntu:16.04
COPY ./sources.list /etc/apt/sources.list

```
## MIT License

Copyright (c) 2016 Freax

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
