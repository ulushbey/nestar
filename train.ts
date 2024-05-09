/** MIT Task ZK */

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
