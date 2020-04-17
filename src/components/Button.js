import PropTypes from 'prop-types'
import React from 'react'

const Button = (props) => {
    const { action, value } = props
    return <button onClick={action}>{value}</button>
}
Button.propTypes = {
    value: PropTypes.string.isRequired,
    action: PropTypes.func
}
export default Button