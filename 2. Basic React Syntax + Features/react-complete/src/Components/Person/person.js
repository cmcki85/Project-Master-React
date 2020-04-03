import React from 'react';
import './person.css';

// Functional Person component 
const person = ( props ) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>I am {props.name} and i am {props.age}. </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value= {props.name}></input>
        </div>
        
    )
}

export default person;