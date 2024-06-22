// Question 38
// call function for describe cities
function describe_country(city: string, country: string = "Pakistan"){
    console.log(`: ${city} is in, country: ${country}`);
}

// Calling the function with three different cities
describe_country("Karachi");
describe_country("Lahore");
describe_country("Tokyo", "Japan");
