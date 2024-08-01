// Duplicate Integer

function hasDuplicate(nums) {
  const hashMap = new Map();
  for (const num of nums) {
    if (!hashMap.has(num)) {
      hashMap.set(num);
    } else {
      return true;
    }
  }
  return false;
}

// BigO Notation: O(1) due to insertion within hash table
// Space: 0(n)

//Is Anagram

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sCount = {};
  const tCount = {};

  for (let i = 0; i < s.length; i++) {
    sCount[s[i]] = 1 + (sCount[s[i]] || 0);
    tCount[t[i]] = 1 + (tCount[t[i]] || 0);
  }

  for (const char in sCount) {
    if (sCount[char] !== tCount[char]) {
      return false;
    }
  }
  return true;
}

// Time: O(n) due to iteration of each char in the string
// Space: 0(n)

//Two Integer Sum

function twoSum(nums, target) {
  let obj = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (obj.has(complement)) {
      return [obj.get(complement), i];
    }

    obj.set(nums[i], i);
  }
}

// Time: O(n)
// Space: 0(n)
