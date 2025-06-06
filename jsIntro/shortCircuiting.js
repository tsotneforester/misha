//example: greeteng will be 'Welcome back!' if user is logged in
const isLoggedIn = true;
let greeting = isLoggedIn && 'Welcome back!';

console.log(greeting);

//🔰 Set displayName to inputName if it exists, otherwise use nickname, and if that’s also falsy, use "Anonymous".
const inputName = ''; // Try: null, "Alice"
const nickname = ''; // Try: "Bob"

//let displayName = ...

//🔰 Check if a user exists and has age >= 18 without causing an error if user is null.

const user = 'tsotne'; // Try changing to ""
const age = 20; // Try changing to 17

//let canDrink = ...

console.log(canDrink); // Should log false (or true if user exists and age >= 18)
