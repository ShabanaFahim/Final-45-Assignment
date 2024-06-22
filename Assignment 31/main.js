// Question 31
//define an array of usersname
var usernames = ["admin", "Sana", "Zara", "Aira", "Rida"];
//Check if the list of user is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Greet users 
    usernames.forEach(function (username) {
        if (username === "admin") {
            console.log("Hello! admin ,would you like to see a status report ?");
        }
        else {
            console.log("Hello! ".concat(username, ", thank you for logging in again!"));
        }
    });
}
// Removing all usernames ensures the message "We need to find some users!" is printed.
usernames = [];
//Check if the list of user is empty after removal
if (usernames.length === 0) {
    console.log("we need to find some users!");
}
