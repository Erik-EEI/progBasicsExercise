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
█▀▄▀█ █▀▀ ▀█▀ █░█ █▀█ █▀▄ █▀
█░▀░█ ██▄ ░█░ █▀█ █▄█ █▄▀ ▄█
*/

const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];




// 1. replace the 2 in numbers with 8 (splice)
const spliceArray = ( array ) => {

}

// 2. return every element in numbers from index 1 to index 4 (slice)
const sliceArray = ( array ) => {

}

// 3. double every number in the array (map)
const numsDoubled = ( array ) => {

}

// 4. remove the odd numbers from the array (filter)
const removeOdd = ( array ) => {

}

// 5.  check if 'kiwi' is included in 'fruits' array (includes)
const isKiwiIncluded = ( array ) => {

}

// 6. return the sum of the numbers (reduce)
const sumAllNumbers = ( array ) => {

}

// 7. join the two arrays into one (concat)
const joinArray = ( array1, array2 ) => {

}

// 8. return true if there are elements in "numbers" that are bigger than 4 (some)
const includesBigger = ( array ) => {

}

// 9. return true if every element is even in "numbers" (every)
const everyNumEven = ( array ) => {

}

// 10. return a new array, which has every word from the fruits array followed by its length (for eg.: [apple 5, banana 6 ...]) (forEach)
const addLength = ( array ) => {

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
    spliceArray( numbers ),
    sliceArray( numbers ),
    numsDoubled( numbers ),
    removeOdd( numbers ),
    isKiwiIncluded( fruits ),
    sumAllNumbers( numbers ),
    joinArray( numbers, fruits ),
    includesBigger( numbers ),
    everyNumEven( numbers ),
    addLength( fruits )
  ];
  // ↑↑ DO NOT MODIFY THE CODE ABOVE THIS LINE ↑↑ //
  
  // TYPE IN WHICH TASKS TO PREVIEW (FROM , TO)
  displayExercises(1, 10);