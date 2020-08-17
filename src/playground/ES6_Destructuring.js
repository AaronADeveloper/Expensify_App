// const person = {
//   name: "Aaron",
//   age: 24,
//   location: {
//     city: "New York",
//     temp: 90,
//   },
// };

// //const name = person.name;
// //const age = person.age;

// const { name = "Anonymous", age } = person; // 'anonymous' is a default value set if person.name does not exist

// console.log(`${name} is ${age}`);

// const { temp, city } = person.location;

// console.log(`It's ${temp} in ${city}`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

// const address = ["1299 S. Juniper Street", "New York", "NY", "11777"];
// const [, city, state, zip] = address; //can use commas to skip indeces in the array
// console.log(`You are in ${city}, ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [coffee, , medium_price] = item;

console.log(`A medium ${coffee} costs ${medium_price}.`);
