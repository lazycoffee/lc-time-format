const timeFormat = function (time, format) {
    let date;
    if (typeof time === 'string') {
        date = new Date(time);
    }
    else {
        date = time;
    }
    format = format.replace('Y', date.getFullYear().toString());
    format = format.replace('y', date.getFullYear().toString().slice(-2));
    format = format.replace('m', date.getMonth() + 1 + '');
    format = format.replace('M', (date.getMonth() > 8
        ? date.getMonth() + 1
        : '0' + (date.getMonth() + 1)) + '');
    format = format.replace('D', (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) + '');
    format = format.replace('d', date.getDate().toString());
    format = format.replace('H', (date.getHours() > 9 ? date.getHours() : '0' + date.getHours()) + '');
    format = format.replace('h', date.getHours().toString());
    format = format.replace('N', (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()) +
        '');
    format = format.replace('n', date.getMinutes().toString());
    format = format.replace('S', (date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()) +
        '');
    format = format.replace('s', date.getSeconds().toString());
    return format;
};
module.exports = timeFormat;
//# sourceMappingURL=index.js.map