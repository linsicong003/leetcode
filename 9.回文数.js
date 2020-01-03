/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 负数或以 0 结尾非 0 的数退出循环
    // const isOverflow = x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31);
    if (x < 0 || (x % 10 === 0 && x != 0)) return false;
    
    // 
    let tmpNum = 0;
    while(x > tmpNum) {
        tmpNum = parseInt(tmpNum * 10 + x % 10, 10);
        x = parseInt(x / 10, 10)
    }
    //
    return x == tmpNum || x == parseInt(tmpNum / 10, 10); 
};

// const test = 121;
// console.log(isPalindrome(test));
// @lc code=end

