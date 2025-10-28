const twoSums = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }else{
        console.log("couldnt find the no")
      }
    }
  }
};
const output = twoSums([8, 4, 13, 7], 15);
console.log(output);
