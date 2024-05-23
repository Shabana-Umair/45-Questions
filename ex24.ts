/*Question 24
More conditional tests:
You dont have to limits the number of tests you create to
10 at least on true and one false from the fallowin*/

let apple ="apple";

// Test for equality and unequality ith string

console.log("Is apple is equal to apple?");
console.log(apple =="apple");

console.log("Is apple is not equal to apple?");
console.log(apple != "apple");


// Tests using the lowe case function

let upperCaseApple= "APPLE";
console.log("Is APPLE is equal to apple after converting it to lowercase");
console.log(upperCaseApple.toLowerCase()== "apple")

console.log("\n Is APPLE is not equal to apple after converting it to lowercase");
console.log(upperCaseApple.toLowerCase() != "apple");

// test on numerical values
// equal to, greater than, less than

let ten1 = "ten";

console.log("\n Is ten equal to twenty?");
console.log(ten1=="twenty");

console.log("Is ten is not equal to twenty?");
console.log(ten1 != "twenty");

console.log("\n Is ten is greater than 0");
console.log(ten1 > "0");

console.log("\n Is twenty is less than 10");
console.log("twenty"< ten1);

// tests on greater than and equals to, less than and equal to

console.log("\n  ten is greater than and equals to 5");
console.log(ten1 >= "5");

console.log("\n  twenty is less than and equals to 10");
console.log("twenty"<="10");

// Test using "AND " and "OR" operators

//   and
 let twenty="twenty"
console.log("\n Is twenty is not equal to ten and twenty is greater than 10");
console.log(twenty != "10" && twenty > "10" );

console.log("\n twenty is not equal to ten and greater than thirty");
console.log(twenty != "10" && twenty > "30");

// or
console.log("\n twenty is greater than fifity or twenty is equal to twenty");
console.log(20 > 50 || 20 ==20);

console.log("\n twenty is greater than fifity or twenty is not equal  to twenty");
console.log(20 > 50 || 20 !=20);

// test wether an item is array
let fruits =["apple","mango","orange"];
console.log("\n is orange include in my array");
console.log(fruits.includes ("orange"));

console.log("\n is orange not included in my array");
console.log(!fruits.includes("orange"));

