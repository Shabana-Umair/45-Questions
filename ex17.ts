/*Q=17
Shrinking Guest List 
You just found out that your new dinner table won't arrive in time for the dinner,and you have space
for only two people for dinner
Start with your programme from ex 16 print a message that you can invite only two people for dinner
Remove guest from guest list one at a time until only two members remain in list each time you Pop a name 
from your list print a messageto that person letting him know you are sorrt you can not invite
them to dinner
print a message to each of the two people still on your list,letting them know they are still invited
Remove last two names from your list,so you have an empty List.print your list to make sure you
actually have an empty list at the end of your programme*/


let guestList:string[]=['Parsa','Anaya','Aleena','Fatima'];
//making a variable for who will not come
let dontCome2 = guestList[0];
//print the name who ill not come
console.log(dontCome2, "nhn aa sakte hen");
//add and remove value from list
guestList.splice(0, 1, "ayesha");
//message print for bigger table
console.log("good news,we have a bigger table for dinner");
//adding a new array at starting index of array
guestList.unshift("Jaweria");
//adding a new guest at ending index of array
guestList.push("nini");
//making a variable and logic to find middle index
var midddleIndex = Math.floor(guestList.length / 2);
//adding a new guest in middle index of array
guestList.splice(midddleIndex, 0, "pari");
//print message for update list
console.log("update list of new guest");
//sending invitation messages to all our guest one by one
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",would you like to hve dinner with me?")); });
// inform that only 2 guests are invited for dinner
console.log("Unfortunately,The new dinner table wont arrive on time,so i can only invite two guests at dinner");

//  Using whlie loop to remove guests from the array until 2 names remain

while(guestList.length >2){
let removesGuest=guestList.pop();
console.log(`sorry ${removesGuest} i cant invite you at dinner`);

}

// Printing an invitation last 2 guests from list

console.log("invitations to last 2 guests");

// Remove last 2 names from list so that we have empty list



guestList.forEach(lasttwo => console.log(`luckely ${lasttwo},You are still invited at dinner`))

guestList.pop();
guestList.pop();

console.log("Empty List:",guestList);