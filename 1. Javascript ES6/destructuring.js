const numbers = [1, 2, 3, 4];
[num1, , num3] = numbers; // Extracts the 1st and 3rd element and assigns to the given variables.
console.log(num1, num3); // De-structures the numbers array and outputs: 1 and 3.

const object = {
    name: 'cam',
    msg: 'Hello House'
}

{name} = object; // Extracts name from the object Object and assigns it to the name variable.
console.log(name); // Outputs string: 'cam'. 
console.log(msg); // Outputs undefined.

