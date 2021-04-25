var sd = require('silly-datetime');
 
// silly-datetime 当前时间格式化
console.log(sd.format(new Date(), 'YYYY-MM-DD HH:mm'));
// 2019-10-28 12:41
console.log(sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'));
// 2019-10-28 12:41:14
 
// 通过时间戳拼接 格式化时间
var date = new Date((new Date()).getTime())
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
        h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
        m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
        s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
console.log(Y+M+D+h+m+s);
// 2019-10-28 12:41:14
    
// 获取当前时间戳
console.log((new Date()).getTime());
// 1572237674282
console.log((new Date()).valueOf());
// 1572237674283
console.log(Date.parse(new Date()));
// 1572237674000
 
// 将指定时间转化成时间戳
var newDate = new Date(sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'));
console.log(newDate.getTime());
