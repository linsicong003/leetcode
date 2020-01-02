/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
     for (let i = 0; i < nums.length; i++) {
         let breakFlag = false;
         for (let j = i + 1; j < nums.length; j++) {
             if (nums[j] + nums[i] === target) {
                 result = [i, j];
                 breakFlag = true;
                 break;
             } 
         }
         if (breakFlag)  break;
     }
     return result;
};

let a = [2,7,11,15];
let target = 9;
let res = twoSum(a, target)
console.log(res);
