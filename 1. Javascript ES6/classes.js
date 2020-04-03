class Human { // class declares a class object.
    constructor() { // constructor creates properties that can be used by the class. 
        this.gender = 'male'; // gender is the property of the class.
    }

    printGender() { // printGender is the method of the class.
        console.log(this.gender);
    }
}


class Person extends Human { // extends Human makes the Person class inherit the Human class including all methods and properties.
    constructor() {
        super(); // The super keyword allows the child class to inherit the properties and methods from its parent class (the Human Class).
        this.name = 'Cam';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person(); // This decleration creates a new instance of the Person class.
person.printMyName(); // This calls the method printMyName from the person class. 
person.printGender(); // This calls the method printGender from the person class as it was inherited from the Human class. 