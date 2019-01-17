// ***********************
// Challenge Assessment 3
// ***********************

// Using only JS, take an object with various properties.  Then create a new object that switches the keys and values.
// Example:
// Input:
// originalObject = {
//  age: 19,
//  name: 'Luke Skywalker',
//  eyeColor: 'blue',
//  isJedi: true
// };
// Output:
// newObject = {
//  19: 'age',
//  'Luke Skywalker': 'name',
//  blue: 'eyeColor',
//  true: 'isJedi'
// };
//square bracket notation

let originalObject = {
    name: 'Daria',
    favoriteColor: 'black',
    enemy: 'Quinn',
    age: 17
};

let values = Object.values(originalObject);
// console.log(values);
let keys = Object.keys(originalObject);
// console.log(keys);


let newObject = {

};


for (i=0; i < keys.length; i++) {
    newObject[values[i]] = keys[i];
}

console.log(newObject);

