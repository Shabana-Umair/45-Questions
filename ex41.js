/*Question:41
Magician: Define function to print each magician name from an array*/
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Array containing magicians names
var magician_names = ["Herry", "David", "Albert"];
// call function to print each magician name
show_magicians(magician_names);
