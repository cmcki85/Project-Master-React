import React from 'react'; 

const userOutput = (props) => {
    return(
        <div>
            <p value={props.userName}>{ props.userName }</p>
            <p>Welcome to React.JS</p>
        </div>
    )
}

export default userOutput;