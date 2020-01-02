/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return x;
    let isPlus = x > 0;
    let data = Math.abs(x).toString().split('').reverse();
    while(data[0] == 0) {
        data.shift();
    }
    
    isLegal = data.length >= 11 || (data.length === 10 && data.join('').substring(0, data.length - 1) > 214748364)
    const result = isLegal ? 0 : isPlus ? parseInt(data.join('')) : parseInt(`-${data.join('')}`);
    return result;
};

// const x = 1563847412;
// console.log(reverse(x));
// @lc code=end

