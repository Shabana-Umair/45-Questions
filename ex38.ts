/*Question:38
Cities: write a function called describe_city() that accept the names of cities and its country*/

// function
function describe_city(city:string,country:string="Pakistan"){
    console.log(`${city} is in ${country}`);
    
    }
    // calling function
    describe_city("Karachi")
    
    describe_city("Lahore")
    
    describe_city("Madina","Saudi Arab")