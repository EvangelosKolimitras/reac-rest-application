import React from 'react';
import classes from './Input.module.css';

const Input = props => {
    let inputElement = null
    switch (props.elementType) {
        case ("input"):
            inputElement = <input
                className={classes.inputElement}
                {...props.elementConfigs}
                value={props.value}
                onChange={props.onChangeHandler}
            />
            break;
        case ("select"):
            inputElement = <select
                className={classes.inputElement}
                value={props.value}
                {...props.elementConfigs}
                onChange={props.onChangeHandler} >
                {
                    props.elementConfigs.options.map(option => <option key={option.value} value={option.value}>{option.displayValue}</option>)
                }
            </select>
            break;
        case ("textarea"):
            inputElement = <textarea
                className={classes.inputElement}
                {...props.elementConfigs}
                value={props.value}
                onChange={props.onChangeHandler}
            />
            break;
        default:
            inputElement = <input
                className={classes.inputElement}
                {...props.elementConfigs}
                value={props.value}
                onChange={props.onChangeHandler}
            />
    }
    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input