/* Question:42
Great Magicians: 
Start with a copy of your program from Exercise 41. Write a function called make_great() that 
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
show_magicians() to see that the list has actually been modified*/


// Define the Function to show magicians names
function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}

function make_great1(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}


// Define an array of magicians names
let magicianName = ["Deepak", "Aakash", "Rohit"]


// Call make_great Function to modify magicians names
let greatMagicians = make_great1(magicianName);


// Call show_magicians that show modified list of magicians 
show_magicians(greatMagicians);