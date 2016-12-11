const Koa = require('koa');
const app = new Koa();
const mysql = require('mysql');
const redis = require('redis');
const Db = require('mongodb').Db;
const Server = require('mongodb').Server;

/*-------------------------mysql----------------------------------------*/
const mysqlClient = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});
mysqlClient.connect();
async function getMysqlVersion() {
    let result = await new Promise((resolve, reject) => {
        mysqlClient.query('select version() as version', function (err, rows, fields) {
            if (err) return reject(err);
            resolve(rows);
        });
    }).catch((err) => {
        throw new Error(err);
    });
    return result;
}



/*-------------------------mongodb---------------------------------------*/
async function getMongoVersion() {
    const db = new Db('test', new Server(process.env.MONGO_HOST, 27017));
    let mongoClient = await new Promise((resolve, reject) => {
        db.open((err, db) => {
            if (err)return reject(err);
            resolve(db);
        });
    }).catch((err) => {
        throw new Error(err);
    });

    const adminDb = mongoClient.admin();
    let info = await new Promise((resolve, reject) => {
        adminDb.buildInfo(function (err, info) {
            if (err)return reject(err);
            resolve(info);
        });
    }).catch((err) => {
        throw new Error(err);
    });
    return info;
}
/*---------------------redis---------------------------------------------*/
const redisClient = redis.createClient('6379', process.env.REDIS_HOST);

redisClient.on("error", (err) => {
    throw new Error(err);
});

/*-------------------------koa2----------------------------------------*/
app.use(async(ctx) => {
    try {
        let mysqlVersion = await getMysqlVersion();
        let redisVersion = redisClient.server_info.redis_version;
        let mongoVersion = await  getMongoVersion();

        ctx.body = `
        <h1>Dcoker+Koa2+MongoDB+Redis+MySQL</h1>
        <h4>Integrate development environment</h4>
        MySQL Version: ${mysqlVersion[0].version}<br />
        MongoDB Version: ${mongoVersion.version}<br />
        Redis Version: ${redisVersion}
    `;
    } catch (e) {
        ctx.status = 500;
        ctx.body = e.stack;
    }
});

app.listen(process.env.APP_PORT, () => {
    console.info(`open http://127.0.0.1:${process.env.NGINX_PORT}`);
});