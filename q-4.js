/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 根据奇偶性判断中位数位置
    const isOdd = !!((nums1.length + nums2.length) & 1);
    
    let mid = Math.round((nums1.length + nums2.length) / 2);
    
    !isOdd && mid++;
    // 指针
    let point1 = -1;
    let point2 = -1;
    
    let direction = nums1[0] < nums2[0] ? 0 : 1;
    if (nums1.length === 0 || nums2.length === 0) {
        direction === 0 && nums1.length === 0 && (direction = 1);
        direction === 1 && nums2.length === 0 && (direction = 0);
    }    
    direction === 0 ? point1++ : point2++;
    
    let now = direction === 0 ? (nums1[0] || nums2[0]) : (nums2[0] || nums1[0]);
    let past = now;
    
    while(point1 + point2 + 2 < mid) {
        
        past = now;
        if (point1 > -1 && point1 + 1 === nums1.length) {
            direction = 1;
            point2++;
        }
        else if (point2 > -1 && point2 + 1 === nums2.length) {
            direction = 0;
            point1++;
        }
        else {
            direction = nums1[point1 + 1] > nums2[point2 + 1] ? 1 : 0;
            if (nums1.length === 0 || nums2.length === 0) {
                direction === 0 && nums1.length === 0 && (direction = 1);
                direction === 1 && nums2.length === 0 && (direction = 0);
            }
            direction === 0 ? point1++ : point2++;
        }
        
        now = direction === 0 ? nums1[point1] : nums2[point2];
    }
        
    // 是奇数时找到第 mid 位数
    // 是偶数时找到第 mid 位和第 mid - 1 位取均值
    
    const result = isOdd ? now : (now + past) * 10 / 2 / 10 ;
    return result;
};

var nums1 = [100001]
var nums2 = [100000]
console.log(findMedianSortedArrays(nums1, nums2))