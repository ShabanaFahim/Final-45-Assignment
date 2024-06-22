function stringTests() {
    // Tests for equality and inequality with strings
    const string1: string = "Hello";
    const string2: string = "hello";
    const string3: string = "World";

    // Test for equality
    console.log(string1 === string2); // false

    // Test for inequality
    console.log(string1 !== string3); // true

    // Tests using the lower case function
    // Test for equality after converting to lowercase
    console.log(string1.toLowerCase() === string2.toLowerCase()); // true

    // Test for inequality after converting to lowercase
    console.log(string1.toLowerCase() !== string3.toLowerCase()); // false
}

stringTests();
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const a: number = 5;
const b: number = 10;

console.log("Equality test:", a === b); // false
console.log("Inequality test:", a !== b); // true
console.log("Greater than test:", a > b); // false
console.log("Less than test:", a < b); // true
console.log("Greater than or equal to test:", a >= b); // false
console.log("Less than or equal to test:", a <= b); // true

// Tests using "and" and "or" operators
const x: number = 7;
const y: number = 12;

console.log("AND operator test:", x > 5 && y < 15); // true
console.log("OR operator test:", x === 7 || y === 10); // true

// Test whether an item is in an array
const array: number[] = [1, 2, 3, 4, 5];

console.log("Item in array test:", array.includes(3)); // true

// Test whether an item is not in an array
console.log("Item not in array test:", !array.includes(6)); // true
