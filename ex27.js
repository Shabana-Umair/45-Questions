/*Question 27
Alien colors #3
Turn your if else chain ex 5-4 into an if else chain*/
// make variables
var alienColor1 = "green";
// If the alien is gren print that player earned 5 points
// If alien is yellow print that player earned 10 points
// If alien is red print that print that player earned 15 points
// first version
if (alienColor1 === "green") {
    console.log("You shot green alien you earned 5 points");
}
else if (alienColor1 === "yellow") {
    console.log("You shot yellow allien so you earned 10 points");
}
else if (alienColor1 === "red") {
    console.log("You shot red alien so you earned 15 points");
}
// Second version
var alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("You shot green alien you earned 5 points");
}
else if (alienColor2 === "yellow") {
    console.log("You shot yellow allien so you earned 10 points");
}
else if (alienColor2 === "red") {
    console.log("You shot red alien so you earned 15 points");
}
// 3rd version
var alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("You shot green alien you earned 5 points");
}
else if (alienColor3 === "yellow") {
    console.log("You shot yellow allien so you earned 10 points");
}
else if (alienColor3 === "red") {
    console.log("You shot red alien so you earned 15 points");
}
