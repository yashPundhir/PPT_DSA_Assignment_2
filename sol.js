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
