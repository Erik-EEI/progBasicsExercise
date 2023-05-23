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
▄▀█ █▀▀ █▀▀ █▀▀ █▀ █▀ █ █▄░█ █▀▀
█▀█ █▄▄ █▄▄ ██▄ ▄█ ▄█ █ █░▀█ █▄█
*/


// ↓↓ SAMPLE DATA - DO NOT MODIFY ↓↓ //

const library = {
  name: 'Central Library',
  address: {
    street: 'Main St',
    number: '123',
    city: 'New York',
    state: 'NY',
    zip: '10001',
  },
  books: [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      year: 1925,
      copies: [
        {
          id: 'A1',
          available: true,
        },
        {
          id: 'A2',
          available: false,
        },
      ],
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Classic',
      year: 1960,
      copies: [
        {
          id: 'B1',
          available: true,
        },
        {
          id: 'B2',
          available: true,
        },
        {
          id: 'B3',
          available: false,
        },
      ],
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Classic',
      year: 1951,
      copies: [
        {
          id: 'C1',
          available: true,
        },
        {
          id: 'C2',
          available: true,
        },
        {
          id: 'C3',
          available: true,
        },
        {
          id: 'C4',
          available: true,
        },
        {
          id: 'C5',
          available: true,
        },
      ],
    },
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      year: 1954,
      copies: [
        {
          id: 'D1',
          available: true,
        },
        {
          id: 'D2',
          available: true,
        },
        {
          id: 'D3',
          available: true,
        },
      ],
    },
  ],
};

// ↑↑ SAMPLE DATA - DO NOT MODIFY ↑↑ //



// 1. return the name of the library
const printName = ( object ) => {

};

// 2. return the address of the library as one string ("Main st 123 New York...")
const addressString = ( object ) => {

};

// 3. return the name of the first book on the list
const firstBookName = ( object ) => {

};

// 4. return the number of copies of the second book
const howManyCopies = ( object ) => {

};

// 5. return true if there are at least one copy available of the second book
const copyAvailable = ( object ) => {

};

// 6. return an array with all of the id's inside of it of the third book
const copiesID = ( object ) => {

};

// 7. add a new key (age) to each book, and calculate its value
const addAge = ( object ) => {

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
  printName( library ),
  addressString( library ),
  firstBookName( library ),
  howManyCopies( library ),
  copyAvailable( library ),
  copiesID( library ),
  addAge( library ),
];
// ↑↑ DO NOT MODIFY THE CODE ABOVE THIS LINE ↑↑ //

// TYPE IN WHICH TASKS TO PREVIEW (FROM , TO)
displayExercises(1, 7);
