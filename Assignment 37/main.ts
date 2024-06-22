// Question 37
function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} T-shirt with the message: "${message}"`);
}

// Create a large shirt with default message
make_shirt();

// Create a medium shirt with default message medium
make_shirt("Medium");

// Create a shirt of any size with a different message
make_shirt("Small", "Dive into coding");
