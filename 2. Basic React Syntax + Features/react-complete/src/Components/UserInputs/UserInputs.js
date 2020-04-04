import React from 'react'; 

const userInput = (props) => {
    return(
        <div>
            <input type='text' onChange={props.change} ></input>
        </div>
    )
}

export default userInput;

