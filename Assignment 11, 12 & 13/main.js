//Question 11
var names = ["Ayesha", "Sahar", "Umama", "Aiza"];
// loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//  For each
names.forEach(function (friend) {
    console.log(friend);
});
//for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
//question no 12
// loop
for (var i = 0; i < names.length; i++) {
    console.log("Hello,".concat(names[i], "! how are you today?"));
}
// for each
names.forEach(function (friend) {
    console.log("Hi,".concat(friend, "! how are you today?"));
});
// for of each
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var friendName = names_2[_a];
    console.log("Dear,".concat(friendName, "! how are you today?"));
}
// Question no 13
var transportationMode = ["car", "motorcycle", "bicycle", "bus"];
//for loop
for (var i = 0; i < transportationMode.length; i++) {
    console.log("i would like to own ".concat(transportationMode[i]));
}
//for each
transportationMode.forEach(function (mode) {
    console.log("i would like to own,".concat(mode));
});
//for of each
for (var _b = 0, mode_1 = mode; _b < mode_1.length; _b++) {
    var transportationMode_1 = mode_1[_b];
    console.log("i would like to own,".concat(transportationMode_1));
}
