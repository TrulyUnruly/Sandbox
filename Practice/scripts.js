// for (var i = 3= x  ; i >= 1 ; i--){
//     console.log(i);
// }

// let fullName = "Mary" + " " + "Brown"; 
// let gradesArray = [100, 79, 80, 90, 100];

// function lowestGrade (gradeBook) {
// if (gradeBook.length > 0) {
// let lowGrade=gradeBook[0];
// for (let grade of gradeBook) {
// if (grade < lowGrade) {
// lowGrade = grade;
// }
// }
// return lowGrade;
// } else {
//     return 0;
// }
// }

// console.log("\n\nStudent: " + fullName);
// console.log("Grades: ");
// for (let i = 0; i < gradesArray.length; i++) { 
// console.log("\t" + (i+1) + ": " + gradesArray[i]);
// }
// console.log("Evaluation: ");
// console.log("\tLowest Grade is: " + lowestGrade(gradesArray));


// function reverseArray(array) {
//     array.reverse();
//     return array;
// }


function isOdd(number) {
return number % 2 != 0;
}

function isEven(number) {
  return number % 2 === 0;
}

function isGreaterThanFive(number) {
  return number > 5;
}

function filter(numbers, fn) {
let results = [];
for (const number of numbers) {
if (fn(number)) {
results.push(number);
    }
   }
return results;
}

let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven));         // Output: [2, 4, 6]
console.log(filter(numbers, isGreaterThanFive)); // Output: [7, 6]


// const booleanFlag = false;
// let trueOrFalse = new Promise((resolve, reject) => {
// if (booleanFlag) {
// resolve("The flag is true!");
// } else {
// reject("The flag is false!");
// }
// });
// // This will print out the promise that you've just declared
// console.log(trueOrFalse);

// trueOrFalse
// .then(function successValue(result) {
// console.log(result);
// })
// .then(function successValue2() {
// console.log("You can call multiple functions this way.");
// })
// .catch(function failureValue(reject) {
// console.log(reject);
// });


const booleanFlag = true;
let trueOrFalse = new Promise((resolve, reject) => {
if (booleanFlag) {
resolve("The flag is true!");
} else {
reject("The flag is false!");
}
});
// This will print out the promise that you've just declared
console.log(trueOrFalse);

trueOrFalse
.then(function successValue(result) {
console.log(result);
})
.then(function successValue2() {
console.log("You can call multiple functions this way.");
})
.catch(function failureValue(reject) {
console.log(reject);
});