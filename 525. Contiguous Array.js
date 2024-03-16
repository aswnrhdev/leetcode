// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.



// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

function findMaxLength(nums) {
    let maxLength = 0;
    let count = 0;
    let hashMap = {};
    hashMap[0] = -1;

    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 0 ? -1 : 1;

        if (hashMap[count] !== undefined) {
            maxLength = Math.max(maxLength, i - hashMap[count])
        } else {
            hashMap[count] = i;
        }
    }
    return maxLength;
};

console.log(findMaxLength([0, 1]));     // Output: 2
console.log(findMaxLength([0, 1, 0]));  // Output: 2