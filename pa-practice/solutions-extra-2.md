1. How would you display the name of all the vendors in the products list? 
> I would initiate the ```Array.forEach()``` method on the ```products``` array, where in every iteration i would ```console.log()``` the following property: ```element.vendor.name```.<br>
For example:
```javascript
const displayVendors = ( products ) => {

  products.forEach( (album)  => {
    console.log(album.vendor.name);
  });
};
```

2. How would you filter the products list to only show products that require shipping? 
> + First, i would call the ```Array.filter()``` method on the ```products``` array. 
> + Then, i would create an anonym callback function that checks the value of every album's ```requires_shipping``` key, and return true or false depending on that value.<br>
For example : 
```javascript
const albumsRequireShipping = ( products ) => {

  return products.filter( (album) => {
    return album.requires_shipping ;
  });
};
```

3. How would you display the total price of all the products in the list? 
> + I would declare a variable that can store the current value of the summarizing process. 
> + After that, i would initiate an ```Array.forEach()``` method on the ```products``` array and add every album's price to the variable described earlier.
> + When the iteration is done, i would ```console.log()``` the value of the variable where we stored the value of the process.<br>
For example : 
```javascript
const sumPrices = ( products ) => {
  let currentSum = 0;
  products.forEach((album) => {
    currentSum += album.price;
  });
  console.log(currentSum);
};
```

4. How would you group the products by vendor and display the name of the vendor and the number of products associated with them? 
>+ I would create a frequency table from the albums in ```products```. In order to do that, first i would declare an empty object.
>+ Next, i would initiate an ```Array.forEach()``` method that iterates through the albums, and check if that album's vendor is already a ```key``` in the object that i've created. 
>> + If it is the case, than i would add +1 to the value of that+- key, 
>> + if it is not a key yet, i would create a key with this vendor and initalize it with the value : 1. 
> + After every iteration is done, i would display the results with the ```console.table()``` method.<br>
For example : 
```javascript
const groupByVendors = ( products ) => {
  const vendorFreqTable = {};

  products.forEach((album) => {
    if (vendorFreqTable[album.vendor.name]){
      vendorFreqTable[album.vendor.name]++;
    } else {
      vendorFreqTable[album.vendor.name] = 1;
    }
  });
  console.table(vendorFreqTable);
};
```

5. How would you find the average price of all the products in the list? 
> + First, I would create a variable that will store the sum of the price of all products.
> +  Next, I would initiate an  ```Array.forEach()``` method on the ```products``` array.
> + Inside the forEach's callback function I would add every element's ```price``` key's value to the variable mentioned above.
> + When the iteration of the ```products``` array is done, I would divide the gotten sum of prices with the number of items in ```products```.<br>
For example:
```javascript
const averagePrice = ( products ) => {
  let sumOfPrices = 0;
  products.forEach( (album) => {
    sumOfPrices += album.price;
  });
  return sumOfPrices / products.length;
};
```

6. How would you find the total number of tracks in the products list? 
> + I would create a variable that holds the current state of summarizing the tracks.
> + After it is done, i would use an ```Array.forEach()``` method, to iterate through the ```products``` array.
> + In the forEach's callback function, i would add the ```length``` of every album's ```details``` key.
> + After it is done, i would just have to return the variable, i made at the beginnig, since it holds the answer. <br>
For example:
```javascript
const totalNumOfTracks = ( products ) => {
  let trackCount = 0;
  products.forEach( (album) =>{
    trackCount += album.details.length;
  });
  return trackCount;
};
```

7. How would you filter the products list to only show products that are currently available? 
> + I would use the  ```Array.filter()``` method on the ```products``` array.
> + In the callback function of the method, i would check every element's ```status``` key.
> + With a simple ```If``` statement, i would
>> + Return ```true``` if the value of the key is ```available```.
>> + Return ```false``` if the value of the key is ```unavailable```.
> + After the method filtered the array, we can return it.<br>
For example:
```javascript
const filterAvailable = ( products ) => {
  return products.filter( (album) => {
    if (album.status === 'available'){
      return true;
    }
    return false;
  });
};
```

8. How would you display the name of the product and its vendor for each product in the list? 
> + I would initiate an iteration on the  ```products``` array with the ```Array.forEach()``` method.
> + in the method's callback function, in every iteration i would ```console.log()``` the value of the ```name``` and the ```vendor.name``` key's values.<br>
For example:
```javascript
const displayNameAndVendor = ( products ) => {
  products.forEach( (album) => {
    console.log(album.name);
    console.log(album.vendor.name);
  });
};
```

9. How would you find the total number of bytes of all the tracks in the products list? 
> + First, i would create a variable that will store the current state of summarization.
> + Next, i would initiate an ```Array.forEach()``` method on the ```products``` array to iterate through every album.
> + Inside the method's callback function, i would create an other ```Array.forEach()``` method on the album's ```details``` key to iterate throudh every track.
> + In every iteration of a track, i would add the value of the current track's ```bytes``` key to the variable mentioned above.
> + After all of the iterations are done, i would return the variable, holding the answer.<br>
For example:
```javascript
const totalBytes = ( products ) => {
  let byteCount = 0;
  products.forEach( (album) => {
    album.details.forEach( (track) => {
      byteCount += track.bytes;
    });
  });
  return byteCount;
};
```

10. How would you find the average number of milliseconds for all the tracks in the products list? 
> + For this solution, i would need the total number of milliseconds of all tracks, and the total number of tracks.
>> + I would create a variable that will hold the total number of milliseconds.
>> + I would also create a variable that will store the number of tracks.
> + With an ```Array.forEach()``` method, i would start an iteration on the  ```products``` array first.
> + Inside the method's callback function, i would start a new iteration, on the current album's ```details``` key's value.
> + In every iteration of  ```details```, i would:
>> + Add the value of  ```milliseconds``` key to the variable that counts the milliseconds.
>> + Add +1 to the variable that counts the number of tracks.
> + After the iterations are done, i would divide the Milliseconds variable with the Number of tracks variable and return the result.<br>
For example:
```javascript
const acerageMilliseconds = ( products ) =>{
  let totalMilliseconds = 0;
  let numberOfTracks = 0;

  products.forEach( (album) => {
    album.details.forEach( (track) => {
      totalMilliseconds += track.milliseconds;
      numberOfTracks++;
    });
  });
  return totalMilliseconds / numberOfTracks;
};
```

11. How would you filter the products list to only show products that are taxable? 
> + I would use an ```Array.filter()``` method on the ```products``` array.
> + In the callback funtion of the method, i would check every album's ```taxable``` key, and since their values are boolean, i would just filter the albums based on that.<br>
For example:
```javascript
const filterTaxables = ( products ) => products.filter((album) => {
  return album.taxable;
});
```

12. How would you find the total number of unique vendors in the products list? 
> + I would create an empty object, to store the vendor ID's as keys inside of it.
> + Next, i would use the ```Array.forEach()``` method on the ```products``` array, to iterate through every album.
> + Inside the method's callback function, i would check if the currently inspected album's vendor ID is already a key in the object i've created.
>> + If it is already a key with the current ID, this function would not do anything.
>> + If there is no key with the current vendor's ID, this function would create one, with a value of : ```1```.
> + After the iteration of the array is done, i would return the ```length``` of the object's keys ( with ```Object.keys(object)```) which holds the vendors.<br>
For example:
```javascript
const totalUniqueVendors = ( products ) => {
  const vendors = {};

  products.forEach( (album) => {
    if (!vendors[album.vendor_id]){
      vendors[album.vendor_id] = 1;
    }
  });
  return Object.keys(vendors).length;
};
```

13. How would you display the name of the product, its price, and its vendor for each product in the list? 
> + First, i would start with the initialization of an iteration on the `products` array with the `Array.forEach()` method.
> + For better readibility, in the method's callback function i would create three variables.
>> + One for storing the `name` of the product.
>> + One for storing the `price` of the product.
>> + One for storing the `vendor` of the product.
> + After the variables i would `console.log()` the three variables.<br>
For example:
```javascript
const infoOnAlbums = ( products ) => {
  products.forEach( (album) => {
    const name = `Name : ${album.name}\n`;
    const price = `Price : ${album.price}\n`;
    const vendor = `Vendor : ${album.vendor.name}\n`;

    console.log(name, price, vendor);
  });
};
```

14. How would you find the total number of tracks with a unit price of 0.99 in the products list? 
> + I would create a variable, that holds the count of the tracks that fits the criteria.
> + Next, i would start iterating through the `products` array with an `Array.forEach()` method.
> + In the method's callback function, i would start a second iteration on the `details` key's value, also with an `Array.forEach()` method.
> + In the second method that iterates through the tracks, i would check the value of track's `unit_price` key. If it matches the criteria ( 0.99 ), we add `1` to the variable that counts the tracks.<br>
For example:
```javascript
const totalNumberOfCheapTracks = ( products ) => {
  let trackCount = 0;

  products.forEach( (album) => {
    album.details.forEach( (track) => {
      if (track.unit_price === 0.99){
        trackCount++;
      }
    });
  });
  return trackCount;
};
```

15. How would you group the products by genre and display the name of the genre and the number of products associated with them? 
> + I would create an empty object first. That would hold the frequency list of the genres.
> + Next, i would start iterating through the `products` array with the `Array.forEach()` method.
> + Inside of the method's callback function i would start a new iteration, with the same method, on the value of the current album's `details` key.
> + Inside the callback function of the previous method, with an `if` statement, i would check if the current track's genre is already a key in the object.
>> + If **it is** already a key : check if that key's value already includes the current album.
>> + If it is **not** a key : create this new key, with the value of the current album's name.
> + After the iteration is done, i would use a `for...in` loop, to go through every key in the object that holds the genres, and map every key's value to its own length.
> + And finally, i would display the result with the `console.table()` method.<br>
For example:
```javascript
const groupByGenre = ( products ) => {
  const genres = {};

  products.forEach( (album) => {
    album.details.forEach((track) => {
      if (!genres[track.genre_id]){
        genres[track.genre_id] = [album.name];
      } else if (!Object.values(genres[track.genre_id]).includes(album.name)){
        genres[track.genre_id].push(album.name);
      }
    });
  });
  for (const genre in genres){
    genres[genre] =  genres[genre].length;
  }
  console.table(genres);
};
```