//Question 27

let alian_colour :string = "green";

// • If the alien is green, print a message that the player earned 5 points.
if (alian_colour == "green") {
    console.log ("the player just earn 5 points!");
}

// • If the alien is yellow, print a message that the player earned 10 points.
 if (alian_colour == "yellow") {
    console.log ("the player just earn 10 points!");
}
// • If the alien is red, print a message that the player earned 15 points.
 if (alian_colour == "red") {
    console.log ("the player just earn 15 points!");
}
else {
    console.log ("please select right alien colour")
}
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// Version 2

let alien_Color: string = "red";

if (alien_Color === "green") {
    console.log("The player earned 5 points.");
} else if (alien_Color === "yellow") {
    console.log("The player earned 10 points.");
} else if (alien_Color === "red") {
    console.log("The player earned 15 points.");
}
else {
    console.log("Please select the right alien color.");
}

// Version 3

let alienColor: string = "yellow";

if (alienColor === "green") {
    console.log("The player earned 5 points.");
} else if (alienColor === "yellow") {
    console.log("The player earned 10 points.");
} else if (alienColor === "red") {
    console.log("The player earned 15 points.");
} else {
    console.log("Please select the right alien color.");
}



