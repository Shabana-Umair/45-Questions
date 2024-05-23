/*Question:43
Great Magicians:  make function and array of magicians 
names and modify the function with "great"*/

function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name))
}

// Modify function with "Great"
function make_great(magicians:string[]){
  return  magicians.map(name=>`The Great ${name}`);
}




// define array of magician names
let magician_names1=["Herry","David","Albert"]

let great_magicians=make_great(magician_names1)


// to print in array form
console.log(great_magicians);

// to show in list
show_magicians(great_magicians)