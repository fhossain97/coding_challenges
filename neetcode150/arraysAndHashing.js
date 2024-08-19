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

// Anagram Groups

function groupAnagrams(strs) {
  let hashMap = {};
  const base = "a".charCodeAt(0);
  for (const string of strs) {
    const arr = Array(26).fill(0);
    for (const l of string) {
      const letter = l.charCodeAt(0);
      arr[letter - base]++;
    }
    const key = arr.join(",");
    if (!hashMap[key]) {
      hashMap[key] = [];
    }
    hashMap[key].push(string);
  }

  return Object.values(hashMap);
}

// Time: O(n^2) or O(n*m)
// n is the number of strings in the input array and m is the average length of each string
// Space: O(n)

// Top K Elements in List
function topKFrequent(nums, k) {
  const map = {};
  const result = [];
  nums.forEach((num) => (map[num] = (map[num] || 0) + 1));
  const arr = Array.from({ length: nums.length + 1 }, () => []);

  for (const n in map) {
    arr[map[n]].push(parseInt(n));
  }

  for (let i = arr.length - 1; i > 0; i--) {
    for (const n of arr[i]) {
      result.push(n);
      if (result.length === k) {
        return result;
      }
    }
  }
}

// Time: O(n) - we iterate through the nums arr once
// Space: O(n) - we insert the result in an arr and size of the map and the new arr are proportional to number of elements in num arr

//String Encode and Decode
function encode(strs) {
  let string = "";
  strs.forEach((str) => (string += `${str.length}@${str}`));
  return string;
}

// Decode
function decode(str) {
  let i = 0;
  const result = [];

  while (i < str.length) {
    let j = i;
    while (str[j] !== "@") {
      j++;
    }
    let length = parseInt(str.substring(i, j));
    i = j + 1;
    j = i + length;
    result.push(str.substring(i, j));
    i = j;
  }
  return result;
}

// Time: O(n)
// Space: O(n)
