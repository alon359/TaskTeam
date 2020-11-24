const fs = require('fs');
const colors = require('colors');

colors.setTheme({
    info: 'green',
    warn: 'yellow',
    debug: 'cyan',
    error: 'red',
    time: 'gray'
});

const logsDir = './logs';
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

//define the time format
function getTime() {
    let now = new Date();
    return now.toUTCString();
}

function doLog(line, level = 'Debug') {
    printLog(line, level);
    if (typeof line !== 'string') line = JSON.stringify(line)
    line = `${getTime()} - ${level} - ${line}`
    fs.appendFileSync('./logs/backend.log', line + '\n');
}

function printLog(line, level = 'Debug') {
    switch (level) {
        case 'Info':
            console.log(` ${colors.time(getTime())} - ${colors.info(level)} - ${line}`);
            break;
        case 'Warn':
            console.log(` ${colors.time(getTime())} - ${colors.warn(level)} - ${line}`);
            break;
        case 'Debug':
            console.log(` ${colors.time(getTime())} - ${colors.debug(level)} - ${line}`);
            break;
        case 'Error':
            console.log(` ${colors.time(getTime())} - ${colors.error(level)} - ${line}`);
            break;
    }
}

module.exports = {
    debug(line) {
        doLog(line, "Debug")
    },
    info(line) {
        doLog(line, "Info")
    },
    warn(line) {
        doLog(line, "Warn")
    },
    error(line) {
        doLog(line, "Error")
    }
}
