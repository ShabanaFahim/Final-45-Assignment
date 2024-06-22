// Question no 14
// Define array of guest
// let guestList : string [] =["Ayesha","Umama","sara","Faria"];
// //Invite each guest for dinner
// guestList.forEach(guest => {
//     console.log(`Dear ${guest}, you are cordially invited to dinner`)
// });
// // map
// //Invite guest
// let invitation:string []=guestList.map(guest=>`Dear ${guest}, you are cordially invited to dinner`);
// console.log(invitation);
// // for each
// invitation.forEach(invitations => {
//     console.log(invitations);
// });
//Question no 15:
var guestLists = ["Ayesha", "Umama", "sara", "Faria"];
//print the name who cant make dinner
var unableAttend = guestLists.splice(1, 1)[0];
console.log("".concat(unableAttend, " cant make dinner"));
//push
guestLists.push("Aira");
// print amessage
guestLists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cardially invited"));
});
//Question no 16
console.log("Great news! we found abigger table");
//Unshift
guestLists.unshift("Hafsa");
//Splice()
guestLists.splice(Math.floor(guestLists.length / 2), 0, "Ziva");
//push()
guestLists.push("Asma");
console.log(guestLists);
