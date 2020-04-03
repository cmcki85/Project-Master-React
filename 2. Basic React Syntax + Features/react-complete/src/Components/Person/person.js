import React from 'react';

// Functional Person component 
const person = ( props ) => {
    return (
        <p>I am {props.name} and i am {props.age}. </p>
    )
}

export default person;