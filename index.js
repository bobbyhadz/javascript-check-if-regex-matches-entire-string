// EXAMPLE 1 - Check if a Regex matches an Entire String

const str = 'hello';

const test = /^hello$/.test(str);
console.log(test); // 👉️ true

const match = str.match(/^hello$/);
console.log(match); // 👉️ ['hello']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Getting an array of the matches

// const str = 'hello123';

// const match = str.match(/^hello[0-9]+$/g);
// console.log(match); // 👉️ ['hello123']

// console.log(match[0]); // 👉️ 'hello123'
