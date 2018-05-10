// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const { name = "John Doe", age } = person;

// console.log(`${name} is ${age} years old.`)

// const { city, temp: temperatura } = person.location;

// console.log(`It's ${temperatura} degrees in ${city}.`);

const book = {
    title: "ABC book",
    author: "John ABC",
    publisher: {
        name: "books Rus",

    }
};

const {name:publisherName = "Self-Published"} = book.publisher;

console.log(publisherName);

const item = ["coffee", "$2.00", "$2.50", "$2.75"];

const [name, small, medium, large] = item;

console.log(`A medium ${name} costs ${medium}`);