import React from 'react';

// Functional Person component 
const person = ( props ) => {
    return (
        <div>
            <p>I am {props.name} and i am {props.age}. </p>
            <p>{props.children}</p>
        </div>
        
    )
}

export default person;