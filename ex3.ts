/*Question 03:-Name cases
Store a person’s name in a variable, and then print that person’s name 
in lowercase, uppercase, 
and titlecase.*/

// lowerCase
let perName:string = "SHABANA UAMIR";
console.log(perName.toLowerCase());

//uppercase
function toUpperCase(str:string): string {
    return `${str}`.toUpperCase();
}
let inputString:string = "shabana umair";
let UpperCaseString:string = toUpperCase(inputString);
console.log(UpperCaseString);

//titlecase 
let personName:string = "i am learning typescript"
//step 01
let words:string[] = personName.split(" ");

//step 02
let titleCaseName: string ="";

//step 03
//fword10
for (let i = 0; i < words.length; i++) {
titleCaseName += words[i].charAt(0).toUpperCase()+words [i].slice(1).toLowerCase() + " "};
console.log(titleCaseName);