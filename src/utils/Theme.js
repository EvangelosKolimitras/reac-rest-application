import React from 'react'

const Theming = (Wrapper, classes) => {
    return (props) => (
        <div className={classes}>
            <Wrapper {...props} />
        </div>
    )
}

export default Theming