// Question 37
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " T-shirt with the message: \"").concat(message, "\""));
}
// Create a large shirt with default message
make_shirt();
// Create a medium shirt with default message medium
make_shirt("Medium");
// Create a shirt of any size with a different message
make_shirt("Small", "Dive into coding");
