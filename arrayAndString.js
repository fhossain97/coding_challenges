// 88. Merge Sorted Array
function merge(nums1, m, nums2, n) {
  if (n === 0) {
    return nums1;
  }
  nums1.splice(m);
  let i = 0;
  let j = 0;
  while (j < n) {
    if (nums1[i] >= nums2[j] || i >= nums1.length) {
      nums1.splice(i, 0, nums2[j]);
      j++;
    }
    i++;
  }
}

// BigO: O(n)
// Linear time as we are inserting in values
//Space: O(1)

// 27. Remove Element
function removeElement(nums, val) {
  nums.sort((a, b) => a - b);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
}

// BigO: O(n)
// Linear time as we are removing values
//Space: O(1)

// 26. Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
  let j = nums.length - 2;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === nums[j]) {
      nums.splice(i, 1);
    }
    j--;
  }
  return nums.length;
}
// BigO: O(n)
// Linear time as we are removing values
//Space: O(1)

// 169. Majority Element
function majorityElement(nums) {
  const majorityElAmount = nums.length / 2;
  const numsObj = {};
  for (const num of nums) {
    const count = numsObj[num] ?? 0;
    numsObj[num] = count + 1;
  }
  return Object.entries(numsObj).find(([key, value]) => {
    if (value >= majorityElAmount) {
      return key;
    }
  })[0];
}
// BigO: O(n)
// Linear time as we are removing values
//Space: O(1)

// 58. Length of Last Word
function lengthOfLastWord(s) {
  return s
    .trim()
    .split(" ")
    .filter((word) => word !== "")
    .pop().length;
}
// BigO: O(n)
// Linear time as we are removing values
//Space: O(1)

// 151. Reverse Words in a String
function reverseWords(s) {
  return s
    .trim()
    .split(" ")
    .filter((word) => word !== "")
    .reverse()
    .join(" ");
}
// BigO: O(n)
// Linear time as we are removing values
//Space: O(1)

// 80. Remove Duplicates from Sorted Array II
function removeDuplicates(nums) {
  let count = 1;
  let j = nums.length - 2;
  for (let i = nums.length - 1; i >= 1; i--) {
    if (nums[i] === nums[j]) {
      count++;
    } else {
      count = 1;
    }
    while (count > 2) {
      nums.splice(i, 1);
      count--;
    }
    j--;
  }
  return nums.length;
}
// BigO: O(n^2) since theres two nested loops
// Time: O(1)
