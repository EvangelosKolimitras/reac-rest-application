import PropTypes from 'prop-types';
import React from 'react';
import Theming from '../utils/Theme';
import classes from './Person.module.css';
const Person = (props) => {
    const { id, name, username } = props

    return (
        <div>
            <p>Name: {id}</p>
            <p>ID: {name}</p>
            <p>Username: {username}</p>
        </div>
    )
}

Person.propType = {
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string
}

export default Theming(Person, classes.Person)