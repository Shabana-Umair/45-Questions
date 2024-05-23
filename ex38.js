/*Question:38
Cities: write a function called describe_city() that accept the names of cities and its country*/
// function
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// calling function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Madina", "Saudi Arab");
