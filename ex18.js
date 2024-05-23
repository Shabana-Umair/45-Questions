/*Question 18/
Seeing the worid:
Think of atleast five places in the world you wuold like to visit
Store the location in the array.Make sure that array is not in alphabetical order
Print your array in its original order
Print your array in alphabetical orderwithout modifying the ac tual list
Showthat your array is still in its original order by printing it
Print your array in reverse alphabatical order without changing the order of the original list
Show that your array is still in its orignial order by printing it again
Reverse the order of your list,Print the array to show that its order has changed
Reverse the order of your list again,Print the list to show its back to its orignal order
Sort your array so its stored in alphabetical order. print the array to show that its order
has been changed*/
var placetoVisit = ["Saudi Arab", "Switzerland", "Paris", "Usa"];
// Print in original order
console.log("original order:", placetoVisit);
//  In alphabetical order
console.log(" Alphabetical Order:", placetoVisit.slice().sort());
// In original order
console.log("original order:", placetoVisit);
// Reverse alphabetical order
console.log("Reverse Alphabatical Order:", placetoVisit.slice().sort().reverse());
// original order
console.log("original order:", placetoVisit);
// Reverse the order of list and print that order of list has changed
console.log("Reverse order changed");
placetoVisit.reverse();
console.log(placetoVisit);
// Reverse the order again to its original order
console.log("Original order:", placetoVisit.sort());
console.log(placetoVisit);
// Sort your array so it is stored in alphabetical order.print the array to show that itd order has been chamged
console.log("reverse alphabetical order changed", placetoVisit.sort().reverse());
console.log(placetoVisit);
