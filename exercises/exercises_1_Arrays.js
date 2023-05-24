import { exercise } from '../answerCheck.js';
exercise.setPage('arrays');

/*
██████╗░██████╗░░█████╗░░██████╗░██████╗░░█████╗░░██████╗██╗░█████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██╔══██╗██╔══██╗██╔════╝██║██╔══██╗██╔════╝
██████╔╝██████╔╝██║░░██║██║░░██╗░██████╦╝███████║╚█████╗░██║██║░░╚═╝╚█████╗░
██╔═══╝░██╔══██╗██║░░██║██║░░╚██╗██╔══██╗██╔══██║░╚═══██╗██║██║░░██╗░╚═══██╗
██║░░░░░██║░░██║╚█████╔╝╚██████╔╝██████╦╝██║░░██║██████╔╝██║╚█████╔╝██████╔╝
╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚═════╝░╚═════╝░╚═╝░░╚═╝╚═════╝░╚═╝░╚════╝░╚═════╝░

███████╗██╗░░██╗███████╗██████╗░░█████╗░██╗░██████╗███████╗░██████╗
██╔════╝╚██╗██╔╝██╔════╝██╔══██╗██╔══██╗██║██╔════╝██╔════╝██╔════╝
█████╗░░░╚███╔╝░█████╗░░██████╔╝██║░░╚═╝██║╚█████╗░█████╗░░╚█████╗░
██╔══╝░░░██╔██╗░██╔══╝░░██╔══██╗██║░░██╗██║░╚═══██╗██╔══╝░░░╚═══██╗
███████╗██╔╝╚██╗███████╗██║░░██║╚█████╔╝██║██████╔╝███████╗██████╔╝
*/
// By Erik-EEI

/*
▄▀█ █▀█ █▀█ ▄▀█ █▄█ █▀
█▀█ █▀▄ █▀▄ █▀█ ░█░ ▄█
*/

// ↓↓ SAMPLE DATA - DO NOT MODIFY ↓↓ //
const numbers = [1, 1, 2, 5, 7, 2, 10, 11, 12, 40];
const numbers2 = [1, 2, 6, 10, 15];
const strings = ['orchid', 'basket', 'ocean', 'piano', 'sunset', 'moonlight', 'coffee', 'cactus', 'rainbow', 'fireworks'];
const nestedArray = [
  [1, 2, 3],
  ['a', 'b', 'c'],
  [true, false, true],
  ['apple', 'banana', 'orange'],
];
// ↑↑ SAMPLE DATA - DO NOT MODIFY ↑↑ //

// Task ID: 1.
// Task Description: Return the first, and the last elements of "numbers" in an array.
const firstAndLast = (array) => {
  return [array[0], array[array.length - 1]];
};

exercise.check(1, firstAndLast(numbers));

// 2.return the length of the "numbers" array.
const lengthOfArray = (array) => {

};

// 3.add the number "50" as the last element to the "numbers" array in two different ways (method / indexing).
const addNumberToEnd = (array) => {

};

// 4.add the number "4" as the first element to the "numbers" array.
const addNumberToBeginning = (array) => {

};

// 5.return the highest number from the "numbers" array.
const highestNum = (array) => {

};

// 6.return the smallest number from the "numbers" array.
const smallestNum = (array) => {

};

// 7.replace the fifth element of the "numbers" array to "25".
const replaceFifthElement = (array) => {

};

// 8.return the sum of the numbers from the "numbers" array.
const sumArray = (array) => {

};

// 9.return the sum of the even numbers from the "numbers" array.
const sumEven = (array) => {

};

// 10.from the two number arrays (number, number2), return a new array that contains only those numbers that are present in both arrays.
const presentInBoth = (array1, array2) => {

};

// 11.return the longest word from the "strings" array.
const longestWord = (array) => {

};

// 12.return the "numbers" array sorted from smallest number to highest.
const sortArray = (array) => {

};

// 13.return the "strings" array with all of its words in uppercase.
const upperCaseify = (array) => {

};

// 14.return a new array from the "strings" array, which only includes the words with 5+ letters (words longer than 5 characters).
const onlyTheLong = (array) => {

};

// 15.return the difference between the largest and the smallest number in the "numbers" array.
const differenceOfNums = (array) => {

};

// 16.return the "numbers" array without duplicate elements.
const removeDuplications = (array) => {

};

// 17.return the "numbers" array reversed.
const reverseArray = (array) => {

};

// 18.return the "numbers" array with all the numbers doubled.
const doubleNumbers = (array) => {

};

// 19.return the average of the : in the array.
const averageOfNums = (array) => {

};

// 20.return the count of odd numbers in the array.
const countTheOdd = (array) => {

};

// 21.return the string "apple" from "nestedArray".
const giveMeApple = (array) => {

};

// 22. console.log every element from the second array in "nestedArray", and return them in a new array.
const consoleLogEverything = (array) => {

};

// 23.return a new array, which includes the type of every subarray's first element (e.g. [number, string, boolean, string]).
const typeOfFirstElement = (array) => {

};

// 24.return the largest number from the subarray which contains only numbers.
const largestNumOfSubArray = (array) => {

};

// 25.return a new array, that includes only the last element of each subarray.
const onlyLastElement = (array) => {

};

// 26.return a new array which includes all the possible combinations of the subarray ['apple', 'banana', 'orange'], e.g. ([[apple,banana,orange], [apple orange banana], ...]).
const everyPlaceCombination = (array) => {

};
