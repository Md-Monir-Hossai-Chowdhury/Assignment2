//1
function calculateDifference(a, b) {
    return a - b;
}
let result = calculateDifference(10, 5);
console.log(result);

//2
function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(5));  
console.log(isOdd(8));  

//3
function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMin([3, 5, 1, 9, 2]));

//4
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//5
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

console.log(sortArrayDescending([3, 5, 1, 9, 2]));  

//6
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("Hello"));

//7
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

console.log(countVowels("Hello World"));

//8
function findAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

console.log(findAverage([1, 2, 3, 4, 5]));

