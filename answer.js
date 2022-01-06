/**
 * @preserve 76810db5d55af030731fff40d1159434
 *
 * 76810db5d55af030731fff40d1159434
 * javascript1
 * lab3
 * v2
 * dbwebb clone javascript1
 * 2019-10-16 15:02:05
 * v4.0.0 (2019-03-05)
 *
 * Generated 2019-10-16 17:02:05 by dbwebb lab-utility v4.0.0 (2019-03-05).
 * https://github.com/dbwebb-se/lab
 */

/*jshint maxcomplexity:false */
/* eslint-disable indent */
/* jscs:disable indent */
(function (dbwebb) {
"use strict";

var ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 3 - arrays
 *
 * Practise arrays. You might find useful help here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Arrays
 *
 * To copy an array use array.slice() to make a real copy, not a shallow one.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create a variable `array2` holding an array with the words:
 * `[potato,carrot,onion,leek,cabbage]`. Return the element on position: `1`
 * in array2.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let array2 = ["potato", "carrot",  "onion", "leek", "cabbage"]
console.log(array2);

ANSWER = array2[1];

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Use the variable `array2`. Concatenate the first item and the last item as
 * a string. Separate the string with `-`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
let array2String = array2[0] + "-" + array2[array2.length - 1];

console.log(array2String);

ANSWER = array2String;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Create an array, `array1`, with the items `47,98,-13,0,-412,499,3,1200`.
 *
 * Merge the two arrays, `array1` and `array2`, into a third variable
 * `array3`.
 *
 * Answer with array3.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let array1 = [47, 98, -13, 0, -412, 499, 3, 1200];
let array3 = array1.concat(array2);

console.log(array3);


ANSWER = array3;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Create a variable `array21` as a clone of `array2`.
 * Sort `array21`.
 * (Hint:
 * http://stackoverflow.com/questions/3978492/javascript-fastest-way-to-duplic
 * ate-an-array-slice-vs-for-loop)
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let array21 = array2.slice();
array21.sort();

console.log(array21);


ANSWER = array21;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Create a variable `array11` as a copy of `array1`.
 * Sort `array11` according to its values. The smallest value comes first and
 * the largest value comes last.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let array11 = array1.slice();
array11.sort(function(a, b){return a - b});

ANSWER = array11;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6 (1 points)
 *
 * Create a variable `array22` which holds the same content as `array2` - but
 * all strings are uppercase.
 * Use the built-in Array-function `map()` to solve it.
 *
 * Answer with the array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
 let array22 = array2.slice();


function toUpperC(word){
    word = word.toUpperCase();
    return word;
    
}



ANSWER = array22.map(toUpperC);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/**
 * Exercise 1.7 (1 points)
 *
 * Create a new array, `array12`. It should contain all positive numbers from
 * the `array1`.
 * Use the built-in array-function `filter()` to solve it.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let array12 = array1.slice();
// array12.filter(positive)

function positiveNumber (value){
    return value > 0;
}




ANSWER = array12.filter(positiveNumber);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8 (1 points)
 *
 * Create a function `arrayAverage()` that takes one array as argument and
 * returns the average of all elements in that array.
 *
 * Try out the function using `array1` and answer with the rounded integer
 * result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function arrayAverage(inputArray) {
    let average = 0;
    for (let i = 0; i < inputArray.length; i++) {
        average += inputArray[i];
    }
    return Math.round(average / inputArray.length);
}

ANSWER = arrayAverage(array1);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Modify arrays
 *
 * Learn how to modify arrays.
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Create a new array `myArray` and make it a copy of `array1`. Switch place
 * on the first and the last element, with the help of built-in
 * array-functions.
 * Use the array-functions `pop(), push(), shift() and unshift()`.
 *
 * Answer with `myArray`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let myArray = array1.slice();

let tempLast = myArray.pop();
let tempFirst = myArray.shift();
myArray.unshift(tempLast);
myArray.push(tempFirst);

ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points)
 *
 * In `myArray` change the `3rd and 4th` value to the boolean value `false`
 * using built-in array-function `splice()`.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

myArray.splice(2, 2, false, false);


ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (1 points)
 *
 * Remove the `4th and 5th` item in 'myArray'. Then insert the string `MEGA`
 * after the item `3rd`. Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

myArray.splice(3, 2, "MEGA")





ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 .  Arrays with loops
 *
 * Learn how to loop array elements
 *
 */


/**
 * Exercise 3.1 (1 points)
 *
 * Create a variable "myString2" that holds an empty string.
 * Create an array "myArray2" that holds 5 values.
 * Manually fill each space in the array with the word "JavaScript".
 * Then concatinate the array elements into "myString2", using a loop.
 * Do not set a specific number to determine the number of loops. 
 * Use instead the array-function .length to determine how many times you want to loop.
 * 
 * Answer with the resulting "myString2" variable
 * 
 * Write your code below and put the answer into the variable ANSWER.
 */


let myString2 = "";
let myArray2 = ["JavaScript", "JavaScript", "JavaScript", "JavaScript", "JavaScript"];

for(let i = 0; i < myArray2.length; i++) {
    myString2 += myArray2[i];
}

// for (let i in myArray2) {
//     console.log(`index:${i} value:${myArray2[i]}`);
//     myString2 += myArray2[i];
//     console.log(`string:${myString2}`);
// }





ANSWER = myString2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);




/**
 * Exercise 3.2 (3 points)
 *
 * Create an array "myList" and assign it the following elements 1, 3, 5, 7, 9.
 * Create a variable "search" with the value 5
 * 
 * If the "search" number is in the array, answer "The number is in the array",
 * otherwise "The number is not in the array" 
 *
 * Make a loop that searches through the array. 
 * You must check each position in the array against the value. 
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let myList = [1, 3, 5, 7, 9];
let search = 5;
let answer = "";

for(let x = 0; x < myList.length; x++) {

    if(search == myList[x]){
        console.log("Turn:" + x + " if");
        answer = "The number is in the array";
        break;
    } else {
        console.log("Turn:" + x + " else");
        answer = "The number is not in the array";
    }
}
 
ANSWER = answer;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
