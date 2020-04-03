// This uses ES7 Syntax to achieve the same thing as the classes.js file.

class Human {
    gender = 'female';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Cam';
    gender = 'male'; 

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender(); 