class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false;
        for(let i = 0; i < nums.length; i++){
            if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
                result = true;
                break;
            }
        } return result;
    }
}
