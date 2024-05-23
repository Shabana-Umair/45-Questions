/*Q=35
Animals list
Atleast 3 animals with same characterstics print a sentence any of these animals would a great pet*/
var petAnimals = ["Cat", "Parrot", "cow"];
// using for loop
for (var _i = 0, petAnimals_1 = petAnimals; _i < petAnimals_1.length; _i++) {
    var onePet = petAnimals_1[_i];
    console.log("A ".concat(onePet, " would make a great pet"));
}
// print a message outside of for-loop
console.log("Any of these animals would make a great pet");
