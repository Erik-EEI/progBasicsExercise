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
█▀ ▀█▀ █▀█ █ █▄░█ █▀▀ █▀
▄█ ░█░ █▀▄ █ █░▀█ █▄█ ▄█
*/


// ↓↓ SAMPLE DATA - DO NOT MODIFY ↓↓ //

const str = 'The quick brown fox jumps over the lazy dog';
const word = "bookkeeper";
const word1 = "listen";
const word2 = "silent";
const strArr = ["racecar", "python", "level", "coding", "radar"];

// ↑↑ SAMPLE DATA - DO NOT MODIFY ↑↑ //



// 1. return a string "My name is [your name], and my favorite food is [food]"
const nameAndFood = () => {
  const name = '';
  const food = '';

  return '';
};

// 2. return an array, every element of the array is a word from "str"
const sentenceToWords = ( string ) => {

};

// 3. return the index of the word "fox" in "str"
const whereIsFox = ( string ) => {

};

// 4. replace the word "dog" in "str" with the word "frog"
const replaceDog = ( string ) => {

};

// 5. return the string in uppercase (str)
const upperCaseString = ( string ) => {

};

// 6. return a new string, which is the 4.th word from "str". repeated 5 times
const repeatedWords = ( string ) => {

};

// 7. return "word" reversed
const reverseWord = ( string ) => {

};

// 8. return every word from strArr in a new array which are palindromes (i.e., if it reads the same backwards as forwards).
const palindromesOfArr = ( array ) => {

}

// 9. check if "word1" is an anagram of "word2". (i.e., if they have the same letters but in a different order. return true or false).
const isAnagram = ( firstWord, secondWord ) => {

}

// 10. return the longest word from "str"
const longestWord = ( string ) => {

}

// 11. return "str" with every word capitalized
const capitalizeFirstLetter = ( string ) => {

}

// 12. return the number of words in str
const countWords = ( string ) => {

}

// 13. return the character from "word", that is the most frequently occuring (for eg.: "aaabbc" -> a)
const mostOccuringChar = ( string ) => {

}

// 14. return the first non-repeated character in "word"
const firstNonRepeatChar = ( string ) => {

}

// 15. count the number of occurrences of the letter 'o' in "word"
const oCount = ( string ) => {

}
// 16. return "strArr" sorted by its word's length (for eg.: [bab,mama] -> bab length = 3 , mama length = 4)
const sortByLength = ( array ) => {

}

// 17. return "word1" and "word2" joined together with a dash ("word1-word2")
const joinStrings = ( firstWord, secondWord ) => {

}

// 18. return an array that contains the lengths of the words from "strArr"
const replaceWordWithLength = ( array ) => {

}

// 19. sort "strArr" in alphabetical order and return the array
const sortByAlphabet = ( array ) => {

}

// 20. return true if at least one word in "strArr" includes the letter "i"
const doesItHaveX = ( array ) => {

}

// 21. return true if every word in "strArr" includes the letter "a"
const everyWordHasA = ( array ) => {

}


// ↓↓ DO NOT MODIFY THE CODE BELOW THIS LINE ↓↓ //
function displayExercises ( from, to = from ) {
  if (from > to){
    return console.error('ERROR : From value is bigger than to value.');
  }
  for (let i = from - 1; i < to; i++){
    console.log(`\nTASK ${i + 1}`);
    console.log(exercises[i]);
  }
}
const exercises = [
nameAndFood(),
whereIsFox( str ),
replaceDog( str ),
upperCaseString( str ),
repeatedWords( str ),
reverseWord( word ),
palindromesOfArr( strArr ),
isAnagram( word1, word2 ),
longestWord( str ),
capitalizeFirstLetter( str ),
countWords( str ),
mostOccuringChar( word ),
firstNonRepeatChar( word ),
oCount( word ),
sortByLength( strArr ),
joinStrings( word1, word2),
replaceWordWithLength( strArr ),
sortByAlphabet( strArr ),
doesItHaveX( strArr ),
everyWordHasA( strArr )

];
// ↑↑ DO NOT MODIFY THE CODE ABOVE THIS LINE ↑↑ //

// TYPE IN WHICH TASKS TO PREVIEW (FROM , TO)
displayExercises(1, 21);