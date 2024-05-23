/*Question-45
Cars: make function that stores information about car in an object the function should always recieve
a manufacturer and a model name*/


// Define a function to create a car object with optional options...
function createCar(manufacturer: string, model: string, ...options: string[]) {
    // Initialize an empty object to store car information
    let car: { [key: string]: string } = {
        manufacturer: manufacturer,
        model: model
    };
    

    // Iterate over the options array and add key-value pairs to the car object
    options.forEach(option => {
        // Split the option string into key and value
        let [key, value] = option.split(":");
        // Trim whitespace from key and value, then add to the car object
        car[key.trim()] = value.trim();
    });
    

    // Return the car object
    return car;
}

// Call the function to create a car object
let my_car = createCar("Range Rover", "Range Rover Sport", "color: Silver", "year: 2024");


// Print the car object to the console
console.log(my_car);