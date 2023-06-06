// 1. - taken from example -Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  console.log("=======================================================================================================================================================");

// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = function(a,b,c) {

    if (a>b && a>c){
        return "Largest number is " + a;
    } else if (b>a && b>c){
        return "Largest number is " + b;
    } else if (c>a && c>b){
        return "Largest number is " + c;
    }
}

console.log(maxOfThree(16,25,14));
console.log(maxOfThree(19,55,14));
console.log(maxOfThree(16,25,88));
console.log("=======================================================================================================================================================");

// 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(letter){
   
    if (letter === 'a' || letter === 'e' || letter === 'i'|| letter === 'o' || letter === 'u' || letter === 'y'){
        return `True - ${letter} is a vowel`;
    } else {
        return `False - ${letter} is NOT a vowel`;
    }
}

console.log(isCharAVowel("a"));
console.log(isCharAVowel("p"));
console.log(isCharAVowel("n"));
console.log(isCharAVowel("o"));
console.log(isCharAVowel("u"));
console.log("=======================================================================================================================================================");

// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
let arraySum = [16,25,88,12,14];

const sumArray = function(sumEach) {

        let sum = 0;

        for (let i = 0; i<sumEach.length; i++){
            sum += sumEach[i];
        }
        return `sum of ${arraySum} is: ${sum}`;
}

console.log(sumArray(arraySum)); 
console.log("=======================================================================================================================================================");

// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
let arrayMultiply = [5,10,4];

function multiplyArray(multiplyEach){

        let multiply = multiplyEach[0];

        for (let i = 1; i<multiplyEach.length; i++){

            multiply *= multiplyEach[i];
        }
        return `Product of multiplying ${arrayMultiply} is: ${multiply}`;
}

console.log(multiplyArray(arrayMultiply));
console.log("=======================================================================================================================================================");

// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
let arrayNumArgs = [5,10,4,6,8,55,90,14,32,44];

const numArgs = function(args){
    
    return `Number of arguments using array are ${args.length}`;

}

const numArgs2 = function(...args2){
    return `Number of arguments using spread are ${args2.length}`;
}

console.log(numArgs(arrayNumArgs));
console.log(numArgs2(5,10,4,6,8,55,90,14,32,44));
console.log("=======================================================================================================================================================");

// 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
function reverseString(a){

    // let split = a.split("");
    // let newArray = [];
    // let x = split.length-1;

    // for(i=0;i<split.length;i++){
    //     newArray.push(split[x]);
    //     x--;
    // }

    // let joined = newArray.join("");


    //better way
    let joined = a.split("").reverse().join("");
   
    return `${a} reversed is ${joined}`;
}

console.log(reverseString("Erik Kowalski"));
console.log("=======================================================================================================================================================");

// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
let stringArray = ["longestStringInArray", "that", "takes", "an", "array", "of", "strings"];

const longestStringInArray = function(strings) {
    let highest = 0;
    let longestString;

    //loop through array variable to determine the longest string
    for (i = 0; i<strings.length;i++){

        //check if highest count is more or less than current string
        if (highest<strings[i].length){
     
            highest = strings[i].length;
            longestString = strings[i];
          
        }
    }
        return `Longest string is ${longestString} and is ${highest} characters long`;
    
}

console.log(longestStringInArray(stringArray));
console.log("=================================================================================");

// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
let stringArray2 = ["stringsLongerThan", "that", "takes", "an", "array", "of", "strings"];
let stringArray3 = ["stringsLongerThan", "that123456", "takes", "an", "array", "of", "strings1234567890"];

function stringsLongerThan(array, num){

    let returnArray = [];

    for (let i = 0; i<array.length;i++){
        if (array[i].length>num){
            returnArray.push(array[i]);
        }
    }

    return `The strings with at least ${num} characters from the array are: ` + returnArray;

}

console.log(stringsLongerThan(stringArray3, 8));
console.log(stringsLongerThan(stringArray2, 4));
console.log("=======================================================================================================================================================");


// function stringsLongerThan(array, num){

  
    // let longest;
    // let longestStringArray = [];
    // let highestCount = 0;
    // let returnArray = [];

//     //loop through array variable and add the longest once determined to a new array
//    for (let x = 0; x<array.length;x++){

//         //loop through array variable to determine the longest string
//         for (let i = 0; i<array.length;i++){

//             //check if highest count is more or less than current string and makes sure that string is not included in new array
//             if (highestCount<array[i].length && !(longestStringArray.includes(array[i]))){

//                 highestCount = array[i].length;
//                 longest = array[i];  
//             } 
//         }

//         //adds longest string to new array and resets highest count
//         longestStringArray.push(longest);
//         highestCount = 0;
        
//     }
       
    // adds a certain amount determined by num variable to a new array to return

// console.log(stringsLongerThan(stringArray, 4));

/////////////////////////////////////////////////////////////////////////////////////////////

//alternate solution
const stringsLongerThan2 = (arrayOfStrings2,number2) => {
    
        let longerStrings2 = []
    
        arrayOfStrings2.forEach((string2) => {
            if(string2.length > number2){
                longerStrings2.push(string2)
            } 
        })
        
        return longerStrings2
    }
    
    console.log( "returns array of strings longer than number given:",stringsLongerThan2(['say', 'hello', 'in', 'the', 'morning'], 3) )
    