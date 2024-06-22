"use strict";
// Storing a person name in a variable
let personName = "Shabana";
// printing a person name in lower case
console.log("Lowercase:", personName.toLowerCase());
// printing a person name in upper case
console.log("Uppercase:", personName.toUpperCase());
// printing a person name in title case
console.log("Titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
