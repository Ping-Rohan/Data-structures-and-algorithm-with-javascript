/*  
    LOOKUP = O(1)
    PUSH = O(1)
    INSERT = O(N)
    DELETE = O(N)

*/

const strings = ["a", "b", "c", "d"];

// LOOKUP
console.log(strings[3]); // O(1)

// POP
strings.pop(); // O(1)

// PUSH
strings.push("n"); // O(1)

// UNSHIFT
strings.unshift("k"); // O(N) BECAUSE WE NEED TO SHIFT ALL THE ELEMENT TO ONE PLACE RIGHT

// SPLICE
strings.splice(2, 0, "v"); // O(N)

console.log(strings);
