//  Spread operator used in Arrays.
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5];

console.log(newNumbers); // outputs the array:  [1, 2, 3, 4, 5]; 
console.log([numbers, 5]); // outputs the array: [[1, 2, 3, 4], 5];

// Spread operator used on Objects. 
const person = {
    name: 'cam'
};

const newPerson = {
    ...person,
    age: 19
}

console.log(newPerson); // outputs an object containing:  {age: 19, name: 'cam'}

// Rest operator
const filter = (...args) => {
    return args.filter(el => el === 1); // Returns elements that match: 1
}

console.log(filter(1, 2, 3, 4)) // outputs 1 in an array.