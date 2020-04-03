// Regular Function Decleration
function printMyName (name) {
    console.log(name);
}

printMyName('Cam'); // Outputs Cam as string. 

const printMyNameArrow = (name) => {
    console.log(name);
}

printMyNameArrow('Cam'); // Outputs Cam as a string.

let printBob = () => {
    console.log('Bob');
}

printBob(); // Prints Bob as a string but takes no input args.

const multiply = number => number * 2; 

console.log(multiply(2)); // Outputs 4 but this function can only be done if the function has a single arg and single return. 