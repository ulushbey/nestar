/** ZU TASK **/

function sumOfUnique(nums: number[]) {
	const frequency = {};
	for (const num of nums) {
		if (frequency[num]) {
			frequency[num]++;
		} else {
			frequency[num] = 1;
		}
	}
	let sum = 0;
	for (const num in frequency) {
		if (frequency[num] === 1) {
			sum += parseInt(num);
		}
	}

	return sum;
}
console.log(sumOfUnique([1, 2, 3, 2]));
console.log(sumOfUnique([1, 2, 2, 3, 4, 4, 5]));

/** ZT Task

function firstUniqueCharIndex(str: number[] | string) {
	const charCounts = {};

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		charCounts[char] = (charCounts[char] || 0) + 1;
	}
	for (let i = 0; i < str.length; i++) {
		if (charCounts[str[i]] === 1) {
			return i;
		}
	}
	return -1;
}

console.log(firstUniqueCharIndex('stamp'));
console.log(firstUniqueCharIndex('leetcode'));
console.log(firstUniqueCharIndex('loveleetcode'));

**/
/** ZS Task

function singleNumber(arr: number[]) {
	const counts = arr.reduce((acc, num) => {
		acc[num] = (acc[num] || 0) + 1;
		return acc;
	}, {});

	for (let num of arr) {
		if (counts[num] === 1) {
			return num;
		}
	}

	return null;
}

console.log(singleNumber([4, 2, 1, 2, 1]));


**/
/** ZR Task 

function countNumberAndLetters(str: any) {
	let result = { number: 0, letter: 0 };

	for (let char of str) {
		if (char >= '0' && char <= '9') {
			result.number++;
		} else if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
			result.letter++;
		}
	}

	return result;
}

console.log(countNumberAndLetters('string152%\\¥'));



**/
/**ZQ Task

function findDuplicates(arr: number[]) {
	const count = {};
	arr.forEach((num) => {
		count[num] = (count[num] || 0) + 1;
	});
	const duplicates = arr.filter((num, index) => {
		return count[num] === 2 || (count[num] >= 2 && arr.indexOf(num) === index);
	});
	return Array.from(new Set(duplicates));
}

console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]));

**/

/** ZP Task

function majorityElement(arr: any) {
	const countMap = new Map();
	let maxCount = 0;
	let majorityElement = null;

	for (const num of arr) {
		const count = (countMap.get(num) || 0) + 1;
		countMap.set(num, count);

		if (count > maxCount) {
			maxCount = count;
			majorityElement = num;
		}
	}

	return majorityElement;
}

const array = [1, 2, 3, 4, 5, 5, 5, 5, 5, 4, 3, 4];
console.log(majorityElement(array));

**/
/** ZO Task 

function areParenthesesBalanced(str: string) {
	let balance = 0;

	for (let char of str) {
		if (char === '(') {
			balance++;
		} else if (char === ')') {
			balance--;
		}
		if (balance < 0) {
			return false;
		}
	}

	return balance === 0;
}



// Example usage:
console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda')); // true
console.log(areParenthesesBalanced('((string()ichida(qavslar)soni()balansda')); // false
console.log(areParenthesesBalanced('string()ichida)qavslar(soni()balansda')); // false

**/
/** ZN Task

function rotateArray(arr: number[], num: number): number[] {
	const index = num % arr.length;
	const rotatedArray = [];
	for (let i = 0; i < arr.length; i++) {
		const newIndex = (i + index - 1) % arr.length;
		rotatedArray[newIndex] = arr[i];
	}
	return rotatedArray;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(rotateArray(arr, 3));

**/
/** MIT ZM Task 

function reverseInteger(number: number) {
	const reversedString = String(number).split('').reverse().join('');

	return reversedString;
}

console.log(reverseInteger(123456789));

*/

/**Mit Task ZL 

function stringToKebab(str: string) {
	let words = str.split(' ');
	return words.map((word) => word.toLowerCase()).join('-');
}
console.log(stringToKebab('I love Kebab'));

*/

/** MIT Task ZK 

function printNumbers() {
	let i = 1;
	function printNext() {
		console.log(i);
		i++;
		if (i <= 5) {
			setTimeout(printNext, 1000); // Har soniyada bir marta chaqirish
		} else {
			console.log("Ishni to'xtatdim");
		}
	}
	printNext();
}

printNumbers();

*/
/** MIT TASK ZJ 
function reduceNestedArray(arr: any) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			sum += reduceNestedArray(arr[i]);
		} else {
			sum += arr[i];
		}
	}
	return sum;
}
console.log(reduceNestedArray([1, [1, 2, [4]]]));

*/
