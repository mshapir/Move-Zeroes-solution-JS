/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeros = 0
    for(var i = 0; i< nums.length; i++){
        if(nums[i] === 0){
            zeros += 1
            nums.splice(i,1)
            i--
        }
    }
    for(var j = 0; j < zeros; j++){
        nums.push(0)
    }
};
