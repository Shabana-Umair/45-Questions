/*Question 03:-Name cases
Store a person’s name in a variable, and then print that person’s name
in lowercase, uppercase,
and titlecase.*/
// lowerCase
var perName = "SHABANA UAMIR";
console.log(perName.toLowerCase());
//uppercase
function toUpperCase(str) {
    return "".concat(str).toUpperCase();
}
var inputString = "shabana umair";
var UpperCaseString = toUpperCase(inputString);
console.log(UpperCaseString);
//titlecase 
var personName = "i am learning typescript";
//step 01
var words = personName.split(" ");
//step 02
var titleCaseName = "";
//step 03
//fword10
for (var i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titleCaseName);
