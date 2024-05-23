/*Q=28
Stages of life
Write an if else statement that determines a stage of life set a value of variable age then*/


// creating a variable
let age= 33;

// baby

if (age < 2) {
    console.log("You are a baby");
    
    
}
//  toddler
else if (age >= 2 && age < 4) {
    console.log("You are a toddler");
    
    
}

// kid
else if(age >=4 && age < 13 ){

    console.log("You are kid");
    
}

// teenager
else if(age >=13 && age < 20){
    console.log("You are a teenager");
    
}


// adult
else if(age >=20 &&  age < 65){ 
    console.log("You are adult");
    

}

// elder
else if (age >= 65){
    console.log("You are an elder");
    
}