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
█▀█ █▄▄ ░░█ █▀▀ █▀▀ ▀█▀ █▀
█▄█ █▄█ █▄█ ██▄ █▄▄ ░█░ ▄█
*/


// ↓↓ SAMPLE DATA - DO NOT MODIFY ↓↓ //

const person = {
  name: 'John Smith',
  age: 30,
  occupation: 'Software Developer',
  location: {
    city: 'New York',
    state: 'NY',
    country: 'USA',
  },
};

const book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925,
  genre: 'Fiction',
  publisher: 'Charles Scribner\'s Sons',
  ISBN: '978-0-684-85920-4',
  available: true,
};

const movie = {
  title: 'The Shawshank Redemption',
  director: 'Frank Darabont',
  year: 1994,
  genre: ['Drama', 'Crime'],
  cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  rating: 9.3,
  awards: ['Oscar for Best Actor in a Leading Role', 'Golden Globe for Best Motion Picture'],
  duration: '2h 22min',
};

const peopleArray = [
  {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
    },
    hobbies: ['reading', 'cooking', 'hiking'],
  },
  {
    name: 'Jane',
    age: 25,
    address: {
      street: '456 Elm St',
      city: 'Otherville',
      state: 'TX',
      zip: '67890',
    },
    hobbies: ['swimming', 'photography', 'traveling'],
  },
  {
    name: 'Bob',
    age: 40,
    address: {
      street: '789 Oak Ave',
      city: 'Somewhere',
      state: 'NY',
      zip: '54321',
    },
    hobbies: ['running', 'painting', 'playing guitar'],
  },
  {
    name: 'Samantha',
    age: 27,
    address: {
      street: '246 Pine St',
      city: 'Nowhere',
      state: 'IL',
      zip: '45678',
    },
    hobbies: ['dancing', 'baking', 'skiing'],
  },
  {
    name: 'David',
    age: 35,
    address: {
      street: '135 Maple Blvd',
      city: 'Anywhere',
      state: 'OH',
      zip: '98765',
    },
    hobbies: ['playing basketball', 'gardening', 'playing piano'],
  },
  {
    name: 'Mary',
    age: 29,
    address: {
      street: '369 Chestnut St',
      city: 'Someplace',
      state: 'PA',
      zip: '24680',
    },
    hobbies: ['yoga', 'reading', 'traveling'],
  },
  {
    name: 'Alex',
    age: 42,
    address: {
      street: '802 Walnut St',
      city: 'Elsewhere',
      state: 'MO',
      zip: '13579',
    },
    hobbies: ['playing golf', 'cooking', 'listening to music'],
  },
  {
    name: 'Lisa',
    age: 32,
    address: {
      street: '579 Cedar Rd',
      city: 'Overthere',
      state: 'FL',
      zip: '80246',
    },
    hobbies: ['hiking', 'camping', 'playing drums'],
  },
  {
    name: 'Peter',
    age: 28,
    address: {
      street: '932 Cherry Ln',
      city: 'Someville',
      state: 'NJ',
      zip: '36980',
    },
    hobbies: ['surfing', 'painting', 'playing soccer'],
  },
  {
    name: 'Karen',
    age: 37,
    address: {
      street: '2468 Aspen Dr',
      city: 'Anywhere',
      state: 'CO',
      zip: '57913',
    },
    hobbies: ['skiing', 'cooking', 'playing guitar'],
  },
];

const people = [
  { name: 'John', age: 25 },
  { name: 'Sarah', age: 30 },
  { name: 'David', age: 40 },
  { name: 'Emily', age: 20 },
  { name: 'Alex', age: 35 },
];

// ↑↑ SAMPLE DATA - DO NOT MODIFY ↑↑ //



// 1.return the person's name (from "person" object)
const whatIsYourName = ( object ) => {

};

// 2. return all of the object's values as strings in an array (from  "person" object)
const valuesAsStrings = ( object ) => {

};

// 3. return all of the object's keys as strings in an array (from  "person" object)
const keysAsStrings = ( object ) => {

};

// 4. add a new key ( haircolor ) to the person object, set its value to a color (string) and return it.
const addHairColor = ( object ) => {

};

// 5. return how many keys does the object have (from the "book" object)
const numberOfKeys = ( object ) => {

};

// 6. return the youngest person from "people" array
const youngestPerson = ( objectArray ) => {

};
// 7. return the oldest person from "people" array
const oldestPerson = ( objectArray ) => {

};

// 8. return the age difference between the "book" object and the "movie" object
const ageDifference = ( bookObject, movieObject ) => {

};

// 9. return the century, when the "movie" came out.
const centuryOfRelease = ( object ) => {

};

// 10. from "peopleArray" count how many people lives in every city and return an object, which has the cities as keys, and the amount of people living there as values.
const countByCity = ( array ) => {

};

// 11. from "peopleArray" list all the hobbies of the people, and count how many people does each one. Return an object, with the keys as hobbies, and their values as the amount of people doing them.
const countTheHobbies = ( array ) => {

};

// 12. from "peopleArray", sum the digits of the zip number ( for eg. 57913 -> 5+7+9+1+3 ) and return the person's name who has the highest value of the summed zip number.
const highestZipSum = ( array ) => {

};

// 13. from "peopleArray", return the first person, who is over 35 years old.
const firstOverThirtyFive = ( array ) => {

};

// 14. from peopleArray, return every person's name who is between the age of 20 and 30. ( 20 < person < 30)
const betweenTwoNumber = ( array ) => {

};

// 15.from peopleArray, return the average age, of every person in the list.
const averageAge = ( array ) => {

};

// 16.Add an "age" key to the "book" object, which is calculated from it's "year" key.
const calculateAge = ( object ) => {

};

// 17.return a new array, which is the "people" array, sorted by it's member's age, in descending order.
const sortByAge = ( object ) => {

};

// 18. from peopleArray, return the person's object, who lives in the state : "PA".
const personLivingInPA = ( array ) => {

};

// 19. from peopleArray, return a new array, which has every member's zip code in it. It must be sorted in descending order.
const zipCodesSorted = ( array ) => {

};

// 20. Add a new property "email" with value "john.smith@example.com" to the person object.
const addEmail = ( object ) => {

};

// 21. Add a new property language with value "English" to the book object.
const addLanguage = ( object ) => {

};

// 22. return the second actor from the cast of "movie"
const actorOfMovie = ( object ) => {

};

// 23. Remove the last element of genres in "movie".
const removeLastGenre = ( object ) => {

};

// 24. from peopleArray, return a new array, which contains all of the hobbies without duplications.
const allHobbies = ( array ) => {

};

// 25. return the sum of all ages in peopleArray
const sumOfAllAges = ( array ) => {

};




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
  whatIsYourName( person ),
  valuesAsStrings( person ),
  keysAsStrings( person ),
  addHairColor( person ),
  numberOfKeys( book ),
  youngestPerson( people ),
  oldestPerson( people ),
  ageDifference( book, movie ),
  centuryOfRelease( movie ),
  countByCity( peopleArray ),
  countTheHobbies( peopleArray ),
  highestZipSum( peopleArray ),
  firstOverThirtyFive( peopleArray ),
  betweenTwoNumber( peopleArray ),
  averageAge( peopleArray ),
  calculateAge( book ),
  sortByAge( people ),
  personLivingInPA( peopleArray ),
  zipCodesSorted( peopleArray ),
  addEmail( person ),
  addLanguage( book ),
  actorOfMovie( movie ),
  removeLastGenre( movie ),
  allHobbies( peopleArray ),
  sumOfAllAges( peopleArray ),
];
// ↑↑ DO NOT MODIFY THE CODE ABOVE THIS LINE ↑↑ //

// TYPE IN WHICH TASKS TO PREVIEW (FROM , TO)
displayExercises(1, 25);


