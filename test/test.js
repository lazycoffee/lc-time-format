var assert = require('assert');
var timeFormat = require('../index');

describe('time format', function() {
    // test time 1
    var time1 = 'Wed Nov 09 2016 14:42:04 GMT+0800 (中国标准时间)';
    var time2 = new Date('Wed Nov 09 2016 14:42:04 GMT+0800 (中国标准时间)');

    var format1 = 'y/m/d-h:n:s';
    it(format1, function() {
        assert.equal(timeFormat(time1, format1), '16/11/9-14:42:4');
        assert.equal(timeFormat(time2, format1), '16/11/9-14:42:4');
    });

    var format2 = 'Y/M/D';
    it(format2, function() {
        assert.equal(timeFormat(time1, format2), '2016/11/09')
        assert.equal(timeFormat(time2, format2), '2016/11/09')
    });
});