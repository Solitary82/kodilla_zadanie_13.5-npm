var os = require('os');
var colors = require('colors/safe');
var timeFormat = require('../modules/timeformat');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows'; 
    } else {
        type = 'Linux';
    }   


    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log(colors.grey('System: ', type));
    console.log(colors.red('Release ', release));
    console.log(colors.blue('CPU model: ', cpu));
    console.log(colors.green('Uptime: ', timeFormat.print(uptime)));
    console.log(colors.yellow('User name: ', userInfo.username));
    console.log(colors.gray('Home dir: ', userInfo.homedir));
}

exports.print = getOSinfo;