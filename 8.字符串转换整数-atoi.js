/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let data = str.split('');
    let isPlus = true;
    // 处理字符前空格
    while(data[0] === ' ') {
        data.shift();
    }
    // 处理符号
    if (data[0] == '-' || data[0] == '+') {
        data[0] == '-' && (isPlus = false);
        data.shift();
    }
    // 处理 0
    while( data[0] == '0') {
        data.shift();
    }
    // 首字符
    const reg = new RegExp(/\D/, 'g');
    let flag = -1;
    if (reg.test(data[0])) return 0;
    // 整理数据体
    for(let i = 0; i < data.length; i++ ) {
        if (reg.test(data[i])) {
            flag = i;
            break;
        }
    }
    flag != -1 && (data = data.slice(0, flag));
    // 处理溢出
    let isOverflow = data.length >= 11 
                        || (data.length === 10 && data.join('').substring(0, data.length - 1) > 214748364)
                        || (data.length === 10 && data.join('').substring(0, data.length - 1) > 214748363 && data.join('').substring(data.length - 1, data.length) > 7);
    const result = isOverflow 
                    ? isPlus 
                        ? 2147483647 : -2147483648 
                    : isPlus 
                        ? parseInt(data.join('')) : parseInt(`-${data.join('')}`)
    return result;
};

let str = "-91283472332";
console.log(myAtoi(str));
// @lc code=end

