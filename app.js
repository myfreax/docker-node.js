const Koa = require('koa');
// Koa application is now a class and requires the new operator.
const app = new Koa();

/**
 * Created by huangyanxiong on 16-12-1.
 */
//加载Mongoose模块
const mongoose = require('mongoose');

//数据库连接地址
const dbURI = 'mongodb://127.0.0.1/my_database';


//创建数据库连接
mongoose.connect(dbURI);

// CONNECTION EVENTS
//监听连接事件

// 当连接成功时
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

// 如果连接失败
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// 当连接断开时
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// 如果node进程结束，关闭连接
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});



// uses async arrow functions
app.use(async (ctx, next) => {
    try {
        await next(); // next is now a function
        console.info(ctx);
    } catch (err) {
        ctx.body = { message: err.message };
        ctx.status = err.status || 500;
    }
});

app.use(async ctx => {
    /// const user = await User.getById(ctx.session.userid); // await instead of yield

    ctx.body = 'body'; // ctx instead of this
});

app.listen(3000,function (err) {
    if (err){
      return err;
    }

    console.log('http://127.0.0.1:3000');
});