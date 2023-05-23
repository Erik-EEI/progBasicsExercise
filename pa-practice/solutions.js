import { products } from './data.js';
//** WARM UP **//

// TASK 1
const countProducts = ( productsArray ) => {
  return `Number of products : ${productsArray.length}`;
};

// TASK 2
const lastProductName = ( productsArray ) => {
  return `Name of the last product : ${productsArray[productsArray.length - 1]['name']}`;
};

// TASK 3
const getSongCountInFirst = ( productsArray ) => {
  return `Count of songs in first album : ${productsArray[0]['details'].length}`;
};

// TASK 4
const getAvailableAmount = ( productsArray ) => {

  const amount =  productsArray.filter(( product ) => product['status'] === 'available').length;

  return `Available albums : ${amount}`;
};

//** PA 1 **//

// TASK 1
const searchAlbums = ( productsArray, namePart ) => {
  const regex = new RegExp ( namePart, 'gi');
  return productsArray.filter( (album) => {
    const matches = album['name'].match(regex);
    if (matches){
      return true;
    }
    return false;
  });

};



const main = ( dataBase ) => {
  console.log('\nWARM UP');
  console.log('----------------8<-------------');

  console.log('\nTASK 1');
  console.log(countProducts( dataBase ));

  console.log('\nTASK 2');
  console.log(lastProductName( dataBase ));

  console.log('\nTASK 3');
  console.log(getSongCountInFirst( dataBase ));

  console.log('\nTASK 4');
  console.log(getAvailableAmount( dataBase ));

  console.log('\nPA 1');
  console.log('----------------8<-------------');

  console.log('\nTASK 1');
  console.log(searchAlbums( dataBase, 'rock' ));
};
main( products );
