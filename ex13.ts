/*Question 13:-. Your Own Array: 
Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list 
that stores several examples. Use your list to print a series of statements about these items, such as 
“I would like to own a Honda motorcycle.”*/

let transporationMode: string[] = ["Car", "BRV", "Bus", "Bicycle", "Motercycle"];

for (let i = 0; i < transporationMode.length; i++){
console.log(`I would to own a ${transporationMode[i]}`);
}

transporationMode.forEach(mode => {
    console.log(`I would to own a ${mode}`);
});