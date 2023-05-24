/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable no-case-declarations */


// !! DO NOT MODIFY THIS FILE !! //
import {person, book, movie, peopleArray, people, numbers, fruits, str, word, word1, word2, strArr, library} from './sampleData.js';
const setPage = (page) => {
  exercise.page = page;
};

const checkPage = () => {
  console.log(exercise.page);
};

const check = (id, solution) => {
  if (exercise.page === 'arrays') {
    switch (id) {
    case 1:
      const task1Expected = [1, 40];
      if (
        solution.length === 2 &&
            solution[0] === task1Expected[0] &&
            solution[1] === task1Expected[1]
      ) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 2:
      const task2Expected = 10;
      if (solution === task2Expected) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 3:
      const task3Expected = [1, 1, 2, 5, 7, 2, 10, 11, 12, 40, 50];
      if (JSON.stringify(task3Expected) === JSON.stringify(solution)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 4:
      const task4Expected = [4, 1, 1, 2, 5, 7, 2, 10, 11, 12, 40, 50];
      if (JSON.stringify(task4Expected) === JSON.stringify(solution)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 5:
      const task5Expected = 40;
      if (task5Expected === solution) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 6:
      const task6Expected = 1;
      if (task6Expected === solution) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 7:
      const task7Expected = [1, 1, 2, 5, 25, 2, 10, 11, 12, 40, 50];
      if (JSON.stringify(task7Expected) === JSON.stringify(solution)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 8:
      const task8Expected = 91;
      if (task8Expected === solution) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 9:
      const task9Expected = 66;
      if (task9Expected === solution) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 10:
      const task10Expected = [1, 2, 10];
      if (JSON.stringify(task10Expected) === JSON.stringify(solution)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 11:
      const task11Expected = 'moonlight';
      if (task11Expected === solution) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 12:
      const task12Expected = [1, 1, 2, 2, 5, 7, 10, 11, 12, 40];
      if (JSON.stringify(task12Expected) === JSON.stringify(solution)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 13:
      const task13Expected = [
        'ORCHID',
        'BASKET',
        'OCEAN',
        'PIANO',
        'SUNSET',
        'MOONLIGHT',
        'COFFEE',
        'CACTUS',
        'RAINBOW',
        'FIREWORKS',
      ];
      if (JSON.stringify(task13Expected) === JSON.stringify(solution)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 14:
      const task14Expected = ['orchid', 'basket', 'moonlight', 'coffee', 'cactus', 'rainbow', 'fireworks'];
      if (JSON.stringify(task14Expected) === JSON.stringify(solution)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 15:
      const task15Expected = 39;
      if (task15Expected === solution) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 16:
      const task16Expected = [1, 2, 5, 7, 10, 11, 12, 40, 50];
      if (JSON.stringify(task16Expected) === JSON.stringify(solution)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 17:
      const task17Expected = [40, 12, 11, 10, 2, 7, 5, 2, 1, 1];
      if (JSON.stringify(task17Expected) === JSON.stringify(solution)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 18:
      const task18Expected = [2, 2, 4, 10, 14, 4, 20, 22, 24, 80];
      if (JSON.stringify(task18Expected) === JSON.stringify(solution)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 19:
      const task19Expected = 15.4;
      if (task19Expected === solution) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 20:
      const task20Expected = 4;
      if (task20Expected === solution) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 21:
      const task21Expected = 'apple';
      if (task21Expected === solution) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 22:
      const task22Expected = [1, 'b', false, 'banana'];
      if (JSON.stringify(task22Expected) === JSON.stringify(solution)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 23:
      const task23Expected = ['number', 'string', 'boolean', 'string'];
      if (JSON.stringify(task23Expected) === JSON.stringify(solution)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 24:
      const task24Expected = 3;
      if (task24Expected === solution) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 25:
      const task25Expected = [3, 'c', true, 'orange'];
      if (JSON.stringify(task25Expected) === JSON.stringify(solution)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 26:
      const task26Expected = [
        ['apple', 'banana', 'orange'],
        ['apple', 'orange', 'banana'],
        ['banana', 'apple', 'orange'],
        ['banana', 'orange', 'apple'],
        ['orange', 'apple', 'banana'],
        ['orange', 'banana', 'apple'],
      ];
      if (JSON.stringify(task26Expected) === JSON.stringify(solution)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    default:
      console.log(`TASK ${id} ---> INVALID TASK ID`);
      return false;
    }
  } else if (exercise.page === 'objects'){

    switch (id) {
    case 1:
      if (solution === 'John Smith') {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 2:
      if (Array.isArray(solution) && solution.length === 4) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 3:
      if (Array.isArray(solution) && solution.length === 4) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 4:
      if (solution.hasOwnProperty('haircolor') && typeof solution.haircolor === 'string') {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 5:
      if (solution === 7) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 6:
      if (solution === peopleArray[3]) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 7:
      if (solution === peopleArray[6]) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 8:
      if (solution === 69) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 9:
      if (solution === 20) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 10:
      const countByCityResult = {
        Anytown: 1,
        Otherville: 1,
        Somewhere: 1,
        Nowhere: 1,
        Anywhere: 2,
        Someplace: 1,
        Elsewhere: 1,
        Overthere: 1,
        Someville: 1,
        Anyplace: 1,
      };
      if (JSON.stringify(solution) === JSON.stringify(countByCityResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    case 11:
      const countTheHobbiesResult = {};
      for (const person of peopleArray) {
        for (const hobby of person.hobbies) {
          if (countTheHobbiesResult[hobby]) {
            countTheHobbiesResult[hobby]++;
          } else {
            countTheHobbiesResult[hobby] = 1;
          }
        }
      }
      if (JSON.stringify(solution) === JSON.stringify(countTheHobbiesResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 12:
      let highestSum = 0;
      let personName = '';
      for (const person of peopleArray) {
        const zipDigitsSum = person.zip.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
        if (zipDigitsSum > highestSum) {
          highestSum = zipDigitsSum;
          personName = person.name;
        }
      }
      if (solution === personName) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 13:
      const firstOverThirtyFivePerson = peopleArray.find((person) => person.age > 35);
      if (solution === firstOverThirtyFivePerson) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 14:
      const betweenTwoNumberNames = peopleArray
        .filter((person) => person.age > 20 && person.age < 30)
        .map((person) => person.name);
      if (JSON.stringify(solution) === JSON.stringify(betweenTwoNumberNames)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 15:
      const sumOfAges = peopleArray.reduce((sum, person) => sum + person.age, 0);
      const averageAgeResult = sumOfAges / peopleArray.length;
      if (solution === averageAgeResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 16:
      const calculateAgeResult = {
        ...book,
        age: new Date().getFullYear() - book.year,
      };
      if (JSON.stringify(solution) === JSON.stringify(calculateAgeResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 17:
      const sortByAgeResult = people.slice().sort((a, b) => b.age - a.age);
      if (JSON.stringify(solution) === JSON.stringify(sortByAgeResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 18:
      const personLivingInPAResult = peopleArray.find((person) => person.state === 'PA');
      if (solution === personLivingInPAResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 19:
      const zipCodesSortedResult = peopleArray.map((person) => person.zip).sort((a, b) => b - a);
      if (JSON.stringify(solution) === JSON.stringify(zipCodesSortedResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 20:
      const addEmailResult = { ...person, email: 'john.smith@example.com' };
      if (JSON.stringify(solution) === JSON.stringify(addEmailResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 21:
      const addLanguageResult = { ...book, language: 'English' };
      if (JSON.stringify(solution) === JSON.stringify(addLanguageResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 22:
      const actorOfMovieResult = movie.cast[1];
      if (solution === actorOfMovieResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 23:
      const removeLastGenreResult = { ...movie, genres: movie.genres.slice(0, -1) };
      if (JSON.stringify(solution) === JSON.stringify(removeLastGenreResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 24:
      const allHobbiesResult = Array.from(new Set(peopleArray.flatMap((person) => person.hobbies)));
      if (JSON.stringify(solution) === JSON.stringify(allHobbiesResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 25:
      const sumOfAllAgesResult = peopleArray.reduce((sum, person) => sum + person.age, 0);
      if (solution === sumOfAllAgesResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    default:
      console.log(`TASK ${id} ---> FALSE`);
      return false;
    }

  } else if ( exercise.page === 'strings'){

    switch (id) {
    case 1:
      const name = '[your name]';
      const food = '[food]';
      const nameAndFoodResult = `My name is ${name}, and my favorite food is ${food}`;
      if (solution === nameAndFoodResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 2:
      const sentenceToWordsResult = str.split(' ');
      if (JSON.stringify(solution) === JSON.stringify(sentenceToWordsResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 3:
      const whereIsFoxResult = str.indexOf('fox');
      if (solution === whereIsFoxResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 4:
      const replaceDogResult = str.replace('dog', 'frog');
      if (solution === replaceDogResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 5:
      const upperCaseStringResult = str.toUpperCase();
      if (solution === upperCaseStringResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 6:
      const repeatedWordsResult = `${str.split(' ')[3]} `.repeat(5).trim();
      if (solution === repeatedWordsResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 7:
      const reverseWordResult = word.split('').reverse().join('');
      if (solution === reverseWordResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 8:
      const palindromesOfArrResult = strArr.filter((word) => word === word.split('').reverse().join(''));
      if (JSON.stringify(solution) === JSON.stringify(palindromesOfArrResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 9:
      const isAnagramResult = (firstWord, secondWord) => {
        const sortedFirst = firstWord.split('').sort().join('');
        const sortedSecond = secondWord.split('').sort().join('');
        return sortedFirst === sortedSecond;
      };
      if (solution === isAnagramResult(word1, word2)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 10:
      const longestWordResult = str.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, '');
      if (solution === longestWordResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 11:
      const capitalizeFirstLetterResult = str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      if (solution === capitalizeFirstLetterResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 12:
      const countWordsResult = str.split(' ').length;
      if (solution === countWordsResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 13:
      const countOccurrences = (string, char) => {
        const regex = new RegExp(char, 'g');
        return string.match(regex)?.length || 0;
      };
      const mostOccurringChar = [...new Set(word)].reduce((mostOccurring, char) => {
        const charOccurrences = countOccurrences(word, char);
        if (charOccurrences > countOccurrences(word, mostOccurring)) {
          return char;
        }
        return mostOccurring;

      }, '');
      if (solution === mostOccurringChar) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 14:
      const firstNonRepeatCharResult = word.split('').find((char) => word.indexOf(char) === word.lastIndexOf(char));
      if (solution === firstNonRepeatCharResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 15:
      const oCountResult = countOccurrences(word, 'o');
      if (solution === oCountResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 16:
      const sortByLengthResult = strArr.sort((a, b) => a.length - b.length);
      if (JSON.stringify(solution) === JSON.stringify(sortByLengthResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 17:
      const joinStringsResult = `${word1}-${word2}`;
      if (solution === joinStringsResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 18:
      const replaceWordWithLengthResult = strArr.map((word) => word.length);
      if (JSON.stringify(solution) === JSON.stringify(replaceWordWithLengthResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 19:
      const sortByAlphabetResult = strArr.sort();
      if (JSON.stringify(solution) === JSON.stringify(sortByAlphabetResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 20:
      const doesItHaveXResult = strArr.some((word) => word.includes('i'));
      if (solution === doesItHaveXResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 21:
      const everyWordHasAResult = strArr.every((word) => word.includes('a'));
      if (solution === everyWordHasAResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    }
  } else if (exercise.page === 'methods'){
    switch (id) {

    case 1:
      const spliceArrayResult = [...numbers];
      spliceArrayResult.splice(1, 1, 8);
      if (JSON.stringify(solution) === JSON.stringify(spliceArrayResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 2:
      const sliceArrayResult = numbers.slice(1, 5);
      if (JSON.stringify(solution) === JSON.stringify(sliceArrayResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 3:
      const numsDoubledResult = numbers.map((num) => num * 2);
      if (JSON.stringify(solution) === JSON.stringify(numsDoubledResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 4:
      const removeOddResult = numbers.filter((num) => num % 2 === 0);
      if (JSON.stringify(solution) === JSON.stringify(removeOddResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 5:
      const isKiwiIncludedResult = fruits.includes('kiwi');
      if (solution === isKiwiIncludedResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 6:
      const sumAllNumbersResult = numbers.reduce((sum, num) => sum + num, 0);
      if (solution === sumAllNumbersResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 7:
      const joinArrayResult = numbers.concat(fruits);
      if (JSON.stringify(solution) === JSON.stringify(joinArrayResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 8:
      const includesBiggerResult = numbers.some((num) => num > 4);
      if (solution === includesBiggerResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 9:
      const everyNumEvenResult = numbers.every((num) => num % 2 === 0);
      if (solution === everyNumEvenResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 10:
      const addLengthResult = [];
      fruits.forEach((word) => addLengthResult.push(`${word} ${word.length}`));
      if (JSON.stringify(solution) === JSON.stringify(addLengthResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    }

  } else if (exercise.page === 'accessing'){
    switch (id) {

    case 1:
      const printNameResult = library.name;
      if (solution === printNameResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 2:
      const addressStringResult = `${library.address.street} ${library.address.number} ${library.address.city} ${library.address.state} ${library.address.zip}`;
      if (solution === addressStringResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 3:
      const firstBookNameResult = library.books[0].title;
      if (solution === firstBookNameResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 4:
      const howManyCopiesResult = library.books[1].copies.length;
      if (solution === howManyCopiesResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 5:
      const copyAvailableResult = library.books[1].copies.some((copy) => copy.available);
      if (solution === copyAvailableResult) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 6:
      const copiesIDResult = library.books[2].copies.map((copy) => copy.id);
      if (JSON.stringify(solution) === JSON.stringify(copiesIDResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;


    case 7:
      const addAgeResult = JSON.parse(JSON.stringify(library));
      addAgeResult.books.forEach((book) => {
        book.age = new Date().getFullYear() - book.year;
      });
      if (JSON.stringify(solution) === JSON.stringify(addAgeResult)) {
        console.log(`TASK ${id} ---> CORRECT`);
        return true;
      }
      console.log(`TASK ${id} ---> FALSE`);
      return false;

    }
  }
  return 'ERROR';
};

const exercise = {
  page: '',
  checkPage: checkPage,
  setPage: setPage,
  check: check,
};

export { exercise };
