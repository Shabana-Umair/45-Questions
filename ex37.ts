/*Question;37
Large Shirt amd medium shirt: make function with default message
 amd a shirt of any size with different message*/


// Making function

function make_shirt (size: string="Large", printMessage:string="I Love Typescript"){
    console.log(`Making a ${size} shirt with ${printMessage} prints on shirt`);
    
}
// calling function with by-default values

make_shirt()

// calling function now with medium size shirt with by-default values

make_shirt("Medium")

// callinf function now with any size and different message
make_shirt("Small Size","I love Python")