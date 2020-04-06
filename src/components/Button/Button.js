import React from 'react';
import "./Button.css"

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = ""
    
    let types = ['primary', 'danger', 'success', 'warning', 'default']

    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }

    // if (//state is clicked) {
    //     classList += ` button-${props.type}-clicked`
    // }

    return <button className={classList} onClick={props.onClick}>
        {props.label}
    </button>
}

export default Button; 