// Assignment 2 Questions - Arrays | DSA

/*

**Question 1**

Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

**Example 1:**
Input: nums = [1,4,3,2]
Output: 4

**Explanation:** All possible pairings (ignoring the ordering of elements) are:

1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4

*/

// Solution 1

function maxPairSum(nums) {
	nums.sort((a, b) => a - b);
	let sum = 0;
	for (let index = 0; index < nums.length; index = index + 2) {
		sum = sum + nums[index];
	}
	return sum;
}

/*

Question 2
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

Example 1:
Input: candyType = [1,1,2,2,3,3]
Output: 3

Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

*/

// Solution

function maxCandies(candyType) {
	let uniqueCandyType = new Set(candyType);
	let maxCandiesAlice = Math.floor(candyType.length / 2);
	return Math.min(uniqueCandyType.size, maxCandiesAlice);
}

let candyType = [1, 1, 2, 2, 3, 3];
console.log(maxCandies(candyType));

/*

Question 3
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5

Explanation: The longest harmonious subsequence is [3,2,2,2,3].

*/

// Solution

function findLHS(nums) {
	const frequency = {};

	for (let num of nums) {
		frequency[num] = (frequency[num] || 0) + 1;
	}

	let maxLen = 0;

	for (let num in frequency) {
		num = parseInt(num);
		if (frequency[num + 1]) {
			const length = frequency[num] + frequency[num + 1];
			maxLen = Math.max(maxLen, length);
		}
	}

	return maxLen;
}

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums)); // Output: 5

/*

Question 4
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

*/

// Solution

function canPlaceFlowers(flowerbed, n) {
	let count = 0;

	for (let i = 0; i < flowerbed.length; i++) {
		if (flowerbed[i] === 0) {
			// Check if both adjacent plots are empty or out of bounds
			const isPrevEmpty = i === 0 || flowerbed[i - 1] === 0;
			const isNextEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

			if (isPrevEmpty && isNextEmpty) {
				flowerbed[i] = 1; // Plant a flower
				count++;
			}
		}
	}

	return count >= n;
}

// Test the function
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
const result = canPlaceFlowers(flowerbed, n);
console.log(result);

/*

  Question 5

Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6

*/

// Solution 5

// function maxProduct(nums) {
// 	if (nums.length <= 2) {
// 		return "three largest numbers product not possible";
// 	}

// 	let count = 0;
// 	let maxProd = 1;

// 	nums.sort((a, b) => a - b);

// 	for (const num of nums) {
// 		if (num < 0) {
// 			count = count + 1;
// 		}
// 	}
// 	if (count === 0) {
// 		maxProd =
// 			maxProd *
// 			nums[nums.length - 1] *
// 			nums[nums.length - 2] *
// 			nums[nums.length - 3];

// 		return maxProd;
// 	} else if (count >= 2) {
// 		let prodNeg = 1;
// 		let prodPos = 1;

// 		prodNeg = prodNeg * nums[0] * nums[1] * nums[nums.length - 1];

// 		prodPos =
// 			prodPos *
// 			nums[nums.length - 1] *
// 			nums[nums.length - 2] *
// 			nums[nums.length - 3];

// 		if (prodNeg > prodPos) {
// 			return prodNeg;
// 		} else if (prodNeg < prodPos) {
// 			return prodPos;
// 		}
// 	}
// }

function maxProduct(nums) {
	if (nums.length < 3) {
		return "product not possible";
	}

	nums.sort((a, b) => a - b);

	const n = nums.length;
	const productPos = nums[n - 1] * nums[n - 2] * nums[n - 3];
	const productNeg = nums[0] * nums[1] * nums[n - 1];

	return Math.max(productPos, productNeg);
}

/*
Question 6

Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

Explanation: 9 exists in nums and its index is 4
*/

// Solution 6

function search(nums, target) {
	let left = 0;
	let right = nums.length - 1;
	let mid;
	while (left <= right) {
		mid = Math.floor((left + right) / 2);
		if (target === nums[mid]) {
			return mid;
		} else if (target < nums[mid]) {
			right = mid - 1;
		} else if (target > nums[mid]) {
			left = mid + 1;
		}
	}
	return -1;
}

/*

Question 7

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true

*/

// Solution 7

function checkMonotonic(nums) {
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] > nums[i + 1]) {
			return false;
		}
	}
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] < nums[i + 1]) {
			return false;
		}
	}
	return true;
}

/*

Question 8
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0

Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

*/

// Solution

function minScore(nums, k) {
	let minNum = Math.min(...nums);
	let maxNum = Math.max(...nums);

	if (minNum + k >= maxNum - k) {
		return maxNum - minNum;
	} else {
		return maxNum - k - (minNum + k);
	}
}

const nums = [1];
const k = 0;
console.log(minScore(nums, k)); // Output: 0
