// Question 42
var magicians = ["Alice", "Devid", "Chris"];
//Function to add "the Great " to mgicians name
function make_great(magicianArry) {
    for (var i = 0; i < magicianArry.length; i++) {
        magicians[i] = "the Great " + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
make_great(magicians);
show_magicians(magicians);
