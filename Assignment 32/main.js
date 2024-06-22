//Question 32
// Checking Usernames
var current_user = ["admin", "Sana", "Zara", "Aira", "Rida"];
var new_user = ["admin", "Sana", "Rahima", "Faria", "Hafsa",];
new_user.forEach(function (new_user) {
    if (current_user.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("".concat(new_user, " will need to enter anew username."));
    }
    else {
        console.log("".concat(new_user, " is available."));
    }
});
