// Question 38
// call function for describe cities
function describe_country(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(": ".concat(city, " is in, country: ").concat(country));
}
// Calling the function with three different cities
describe_country("Karachi");
describe_country("Lahore");
describe_country("Tokyo", "Japan");
