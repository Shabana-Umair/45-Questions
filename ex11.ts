/*Question 11:-. Names: 
Store the names of a few of your friends in an array called names. Print each person’s name by 
accessing each element in the list, one at a time*/

//Array
//Defines an array of names
let names: string[] = ["Ayesha","sana","shabana","mariyam","sadia","Aqsa"];

//loop //for each //for of loop
for (let i = 0; i < names.length; i++) {
   console.log(names[i]);    
}
//for each
names.forEach(friend => {
    console.log(friend);
});
//for of loop
for (const friendName of names) {
    console.log(friendName);
}