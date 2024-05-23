/* Question-32
Checking Usernames: do the following to create a programme that simulates ho websites ensure
that everyone has a unique username*/


// Make a list of five or more users name called current_users

let current_users =["Ali","adi","omer","hassan","usman"];

// Make another list of five users name called new_users,Make sure that one or two of them are in
// current_users

let new_users=["anaya","ali","fatima","aleena","adi"];

// Loop through the newusers to check usernames availibility



new_users.forEach(new_one_user =>{
    // making a condition for username already exist and save in our conidition variable
    let our_condition=current_users.some(current_one_user => current_one_user.toLocaleLowerCase()===new_one_user.toLocaleLowerCase()) 
//    print  different messages using if else statment 
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken`);
        
        
    }else{
        console.log(`this username ${new_one_user}is available`);
        
    }

})