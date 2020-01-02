// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = [];
    let win = '';
    let max = 0;
    // 寻找最长长度
    for(let i of s) {
        let index = win.indexOf(i);
        
        // 如果有相同的
        if (index > -1) {
            result.push(win.length);
            win = win.slice(index + 1)
        }
        win = win + i;
        win.length > max && (max = win.length);
    }
    return max;
};

const tmp = " ";
console.log(lengthOfLongestSubstring(tmp));
