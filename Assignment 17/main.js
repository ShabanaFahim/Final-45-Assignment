// Question 17
var guestlist = ["Ayesha", "umama", "Sara", "Faria"];
//for each
guestlist.forEach(function (Friend) {
    console.log(Friend);
});
//Print the message
console.log("Unfotunately! the new dinner table wont arrive in time so we can invite only two guest");
guestlist.unshift("Shabana", "Hafsa");
//print message updated list
console.log("updated list of guest:", guestlist);
//Remove guest from the list
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    if (removeguest !== undefined) {
        console.log("Sorry, ".concat(removeguest, ", we cant invite you"));
    }
}
//Print the message each of the two guest still on your list, letting them 
guestlist.forEach(function (guest) {
    console.log("dear ".concat(guest, ", you are both invited for the dinner"));
});
// Remove last two names from the list
guestlist.splice(0, guestlist.length);
//Print updated empty list
console.log("updated list of guest:", guestlist);
