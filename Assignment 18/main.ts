//Question

import { reverse } from "dns";

//Define the array of places

let placesTovisit: string []=  ["China","London","Pyramids","Alaqsa Masjid","Turkiya"];

//Print the original order
console.log("original order:",placesTovisit);


//Print array in alphabetical order without modifying the actual list

console.log("Alphabetical order:",placesTovisit.slice().sort());


// Array is still in its original order by printing it
console.log("Original order:",placesTovisit);

//print array in  reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:",placesTovisit.slice().reverse());


//Reverse the order of the list.Print the array to show that your order has changed

console.log("reverse order changed:");
placesTovisit.reverse();
console.log(placesTovisit);

// Reverse the order of the list
placesTovisit.reverse();
console.log("\nReversed order:");
console.log(placesTovisit);

// Reverse the order of the list again to get back to original order
placesTovisit.reverse();
console.log("original order:",placesTovisit.sort());
console.log(placesTovisit);

//Sort to change array so it's store in reverse alphabetical order.print the array that its orderhas been changed 

console.log("reverse alphabetical order:",placesTovisit.sort().reverse());
console.log(placesTovisit);


