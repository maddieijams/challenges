// ***********************
// Challenge Assessment 1
// ***********************

// What is a palindrome?  A palindrome is a word that is spelled the same way, both forwards and backwards (i.e. bob, level, tacocat, racecar, etc.).  Notice that each of these words have the same spelling if you reversed the word.
// Using only JavaScript, create a function that takes in a parameter, then create a way to check if the parameter entered is in fact a palindrome.  If it is, have JavaScript console.log that their word is a palindrome; if it is not, have JavaScript console.log the opposite.


// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
// }

// function isPalindrome(str) {
//     var len = Math.floor(str.length / 2);
//     for (var i = 0; i < len, i++) {
//     if (str (i) !== str[str.length - i - 1])
//     console.log();
//     } else {
//     return true;

    }
}

function isPalindrome(word) {
    for (var i = word.length; i > 0; i++ ) {
    let sechalf = str.split("", 1).reverse("", 1).join(""); 
    if( palindrome.str.split("", 1) == sechalf) 
        console.log("its a palindrome")
    
} else {
    console.log("its a palindrome")


}
}



//INDEX str.indexOf()
//SPLIT str.split(" ",1) -->one split, comma in between the split
//If an empty string ("") is used as the separator, the string is split between each character.
//for loop inside of an if else statement
//if var string split is equal to second half of var string split backwards then palindrome
//splitString.reverse