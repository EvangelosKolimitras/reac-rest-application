import PropTypes from 'prop-types';
import React from 'react';
import Person from './Person';

const Persons = (props) => {
    const { users } = props
    return (
        <>
            {
                users.map(user => <Person key={user.id} {...user} />)
            }
        </>
    )
}

Persons.propTypes = {
    users: PropTypes.array.isRequired
}

export default Persons