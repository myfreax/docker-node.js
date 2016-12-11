/**
 * Created by Freax on 16-12-11.
 * @Blog http://www.myfreax.com/
 */
const nodemon = require('nodemon');
const config = require('./config.json');

nodemon(config);



nodemon.on('start', function () {
    console.log('App has started');
}).on('quit', function () {
    console.log('App has quit');
}).on('restart', function (files) {
    console.log('App restarted due to: ', files);
});