/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  let newArray = new Set();
  let sneakyNumbers = [];

  for (let i = 0; i < nums.length; i++) {
    if (newArray.has(nums[i]) & !sneakyNumbers.includes(nums[i])) {
      sneakyNumbers.push(nums[i]);
    } else {
      newArray.add(nums[i]);
    }
  }

  return  newArray, sneakyNumbers; 
};

const result = getSneakyNumbers([1, 2, 3, 4, 3, 5, 6, 2]);
console.log(result);
