// ***********************
// Challenge Assessment 2
// ***********************
// Using JS only, take an array of numbers (i.e. an array that lists numbers between 1 and 10).  Create two arrays from this original one, where one array list all of the even numbers, and the second lists all of the odd.
// Example:
// Input:
// originalArray = [1,2,3,4];
// Output:
// evenArray = [2,4];
// oddArray = [1,3];

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// string = arr.toString(arr);


// function list(odd, even) {
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             arr.push(arr.splice(i, 1)[0]);
//             console.log()
//         } else if {
//             (arr[i] % 1 === 0) {
//             arr.push(arr.splice(i, 1)[0]);
//             console.log()
//         }
//     }
// }
// }






// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function shift(numbers){
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         arr.push(arr.splice(i, 1)[0]);
//         return numbers
//     }
// }
// }
// console.log(shift(numbers));
// let newArrayOne = [];
// let newArrayTwo = [];

// function getNewArrays() {

    
//     while (arr.length > newArrayOne.length) {
//         newArrayOne.push(arr.splice(arr.length - 1)[0]);
       
//     }
// }

// console.log(getNewArrays());



// var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// var c = [];
// while (arr.length > c.length) {
//     c.push(arr.splice(arr.length - 1)[0]);
// }
// console.log(c);
// console.log(arr);


// for (i = 1; i < arr.length; i ++) {
    //     if (i % 2 === 0) {
        //        evenArray.push(i);
        //     } else {
            //         oddArray.push(i);
            //     }
            // }
            // console.log(oddArray, evenArray);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddArray = [];
let evenArray = [];
            
function sortArray(dog) {
    for (i = 1; i < dog.length; i ++) {
        if (i % 2 === 0) {
           evenArray.push(i);
        } else {
            oddArray.push(i);
        }
    }
    console.log(oddArray, evenArray);
}

sortArray(arr);



