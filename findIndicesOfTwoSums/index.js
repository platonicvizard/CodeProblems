/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function findIndicesOfTwoSums(nums, target) {
  const len = nums.length;
  let hash = {};
  for (let i = 0; i < len; i++) {
    const next = nums[i + 1];
    const num = nums[i];

    if (next + num === target) {
      return [i, i + 1];
    }

    //add complement to hash
    const complement = target - num;
    const isInHash = hash.hasOwnProperty(num);

    hash[complement] = isInHash ? { num, ...hash[complement] } : { i, num };

    //test if we added the current number complement to the hash
    if (hash.hasOwnProperty(num)) {
      const hashNum = hash[num];
      //test if the hash adds up to the target
      if (hashNum.num + num === target && hashNum.i !== i) {
        return [hashNum.i, i];
      }
    }
  }
}

var result = findIndicesOfTwoSums([3, 2, 3], 6); //[2, 7, 11, 15],9);//[3, 2, 4], 6);

console.log(result);
