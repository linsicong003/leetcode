/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let nextRes = result;
    // 处理进位
    let val = 0;
    let decade = 0;
    while(l1 != null || l2 != null) {
        let left = (l1 == null) ? 0 : l1.val;
        let right = (l2 == null) ? 0 : l2.val;

        val = (left + right + decade) % 10;
        decade = Math.floor((left + right + decade) / 10);

        nextRes.next = new ListNode(val);
        nextRes = nextRes.next;

        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    // 最高位
    decade > 0 && (nextRes.next = new ListNode(decade));

    return result.next;
};

 function ListNode(val) {
    this.val = val;
    this.next = null;
}

addTwoNumbers([2,4,3], [5,6,4])