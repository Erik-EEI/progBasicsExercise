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

// TASK 2
const averageTrackcount = ( productsArray ) =>{
  let trackCount = 0;
  productsArray.forEach((album) => {
    trackCount += album.details.length;
  });

  return trackCount / productsArray.length;
};

//TASK 3
const getAlbumsWithHigherPrice = ( productsArray, minPrice ) => {

  return productsArray.filter( (album) => {
    if (album.price > minPrice){
      return true;
    }
    return false;
  });
};

//** PA 2 **//

//TASK 1
const getAlbumRuntime = ( product ) => {
  let secondsSum = 0;
  product.details.forEach((track) => {
    secondsSum += track.milliseconds;
  });
  return  secondsSum / 1000;
};

//TASK 2
const getMostValuableAlbumForRuntime = ( productsArray ) => {
  let highestRatio = productsArray[0];

  productsArray.forEach((album)=>{
    if (album.price > highestRatio.price && getAlbumRuntime(album) < getAlbumRuntime(highestRatio)){
      highestRatio = album;
    }
  });
  return highestRatio;
};

//** PA 3 **//

//TASK 1
const getGenreCount = ( album ) => {

  const genres = {};

  album.details.forEach((track) => {
    if (genres[track.genre_id]){
      genres[track.genre_id]++;
    } else {
      genres[track.genre_id] = 1;
    }
  });
  return Object.keys(genres).length;
};

//TASK 2
const getAlbumsWithMultipleGenres = ( productsArray ) => {

  return productsArray.filter((album)=>{
    const genreCount = getGenreCount(album);
    if (genreCount > 1){
      return true;
    }
    return false;
  });
};

//TASK 3
const getOneWordArtistNames = ( productsArray ) => {
  const vendors = {};
  const regex = new RegExp (' ', 'gi' );
  productsArray.forEach((album) => {
    if (!album.vendor.name.match(regex)){
      if (vendors[album.vendor.name]){
        vendors[album.vendor.name]++;
      } else {
        vendors[album.vendor.name] = 1;
      }
    }
  });
  return Object.keys(vendors);
};

//** EXTRA **//

//TASK 1
const getMostComplexSong = ( productsArray ) => {
  let mostComplexSong = productsArray[0].details[0];

  productsArray.forEach((album) => {
    album.details.forEach((track)=>{
      const trackRatio = track.bytes / track.milliseconds;
      const mostComplexRatio = mostComplexSong.bytes / mostComplexSong.milliseconds;

      if (trackRatio > mostComplexRatio){
        mostComplexSong = track;
      }
    });
  });
  return mostComplexSong.name;
};





const main = ( dataBase ) => {
  console.log('\nWARM UP');
  console.log('----------------8<-------------');

  console.log('\n[WARMUP] - TASK 1');
  console.log(countProducts( dataBase ));

  console.log('\n[WARMUP] - TASK 2');
  console.log(lastProductName( dataBase ));

  console.log('\n[WARMUP] - TASK 3');
  console.log(getSongCountInFirst( dataBase ));

  console.log('\n[WARMUP] - TASK 4');
  console.log(getAvailableAmount( dataBase ));

  console.log('\nPA 1');
  console.log('----------------8<-------------');

  console.log('\n[PA 1] - TASK 1');
  console.log(searchAlbums( dataBase, 'world' ));

  console.log('\n[PA 1] - TASK 2');
  console.log(averageTrackcount( dataBase ));

  console.log('\n[PA 1] - TASK 3');
  console.log(getAlbumsWithHigherPrice( dataBase, 1595 ));

  console.log('\nPA 2');
  console.log('----------------8<-------------');

  console.log('\n[PA 2] - TASK 1');
  console.log(getAlbumRuntime( dataBase[dataBase.length - 1] ));

  console.log('\n[PA 2] - TASK 2');
  console.log(getMostValuableAlbumForRuntime( dataBase ));

  console.log('\nPA 3');
  console.log('----------------8<-------------');

  console.log('\n[PA 3] - TASK 1');
  console.log(getGenreCount(dataBase[140]));

  console.log('\n[PA 3] - TASK 2');
  console.log(getAlbumsWithMultipleGenres(dataBase));

  console.log('\n[PA 3] - TASK 3');
  console.log(getOneWordArtistNames(dataBase));

  console.log('\nEXTRA');
  console.log('----------------8<-------------');

  console.log('\n[EXTRA] - TASK 1');
  console.log(getMostComplexSong(dataBase));

  console.log(totalBytes(dataBase));
};
main( products );
