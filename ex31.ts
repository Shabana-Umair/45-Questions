/*= 31
No users
Add an if test to ex 30 to make sure list of users is not empty

if the list is empty,print the message we need to find some users
Remove all the users name from your array,and make sure the correct message is printed*/

let userName=["Admin","shabana","Ayesha","Muzammil"];

// To check if there is users in array
if (userName.length=== 0) {
    console.log(" Your array is empty,We need to find some users!");
    
    
}else{

userName.forEach(oneUser =>{
    if (oneUser==="Admin") {
        console.log(`Hello ${oneUser},Would you like to see status report?`);
        
        
    }else{
        console.log(`Hello ${oneUser},Thank you for login in again`);
        
    }


})
 }

//  if array is empty
let userName3=[];
if (userName3.length=== 0) {
    console.log(" Your array is empty,We need to find some users!");
    
    
}else{

userName.forEach(oneUser =>{
    if (oneUser==="Admin") {
        console.log(`Hello ${oneUser},Would you like to see status report?`);
        
        
    }else{
        console.log(`Hello ${oneUser},Thank you for login in again`);
        
    }


})
 }