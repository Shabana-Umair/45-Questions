/*Question:39
City Names: write function called city_country() that takes in the name of a city and its country
striing format*/
// Function with parameters which return values in string
function city_country(city, country) {
    return "".concat(city, " ").concat(country);
}
// calling function
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Newyork", "USA"));
console.log(city_country("London", "England"));
