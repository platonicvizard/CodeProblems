console.time('findIndicesOfTwoSums');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function findIndicesOfTwoSums(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {

    if (nums[i + 1] + nums[i] === target) {
      return [i, i + 1];
    }

    //add complement to hash
    const complement = target - nums[i];
    const isInHash = hash.hasOwnProperty(nums[i]);
    if (isInHash) {
      hash[complement].num = nums[i];
    } else {
      hash[complement] = { i, num: nums[i] };
    }
    //test if we added the current number complement to the hash
    if (hash.hasOwnProperty(nums[i])) {
      const hashNum = hash[nums[i]];
      //test if the hash adds up to the target
      if (hashNum.num + nums[i] === target && hashNum.i !== i) {
        return [hashNum.i, i];
      }
    }
  }
}

var result = findIndicesOfTwoSums([3, 2, 3], 6); //[2, 7, 11, 15],9);//[3, 2, 4], 6);

console.log(result);

console.timeEnd('findIndicesOfTwoSums');

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`);
}
