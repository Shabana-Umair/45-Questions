/*Question 16/  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list*/
// Creating a Guest List Array
var Guestlist = ["shazia", "saima", "sidra", "Sawera"];
// Making Veriable for those Guest who can't come
var dontCome1 = Guestlist[0];
// Print the Name of Guest who cant come
console.log(dontCome1, "Can't make it to the dinner.");
// Add or Remove Values from Guest List Array
Guestlist.splice(0, 1, "aliya");
