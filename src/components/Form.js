import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
const Form = props => {
    const formState = {
        formInputs: {
            name: {
                elementType: "input",
                elementConfigs: {
                    name: "name",
                    placeholder: "name",
                    type: "text",
                },
                value: ""
            },
            username: {
                elementType: "input",
                elementConfigs: {
                    name: "username",
                    placeholder: "username",
                    type: "text",

                },
                value: ""
            },
            email: {
                elementType: "input",
                elementConfigs: {
                    name: "email",
                    placeholder: "email",
                    type: "email",
                },
                value: ""
            },
            status: {
                elementType: "select",
                elementConfigs: {
                    options: [
                        { value: "married", displayValue: "married" },
                        { value: "free", displayValue: "free" }
                    ],
                    name: "status",
                },
                value: ""
            },
            message: {
                elementType: "textarea",
                elementConfigs: {
                    name: "message",
                    placeholder: "message",
                    type: "textarea",
                },
                value: ""
            }
        }
    }

    const [elements, setElements] = useState(formState)

    const formElements = []
    for (let key in elements.formInputs) {
        formElements.push({
            id: key,
            config: elements.formInputs[key]
        })
    }

    const onChangeHandler = (e, inputIdentifier) => {
        let value = e.target.value
        let updatedFormInputs = { ...elements.formInputs }
        let updatedElements = { ...updatedFormInputs[inputIdentifier] }
        updatedElements.value = value
        updatedFormInputs[inputIdentifier] = updatedElements
        setElements({ formInputs: updatedFormInputs })

    }

    const onSubmitHandler = e => {
        e.preventDefault();
        const data = {}
        for (let i in elements.formInputs) data[i] = elements.formInputs[i]
    }

    const form = (<form onSubmit={onSubmitHandler} > {
        formElements.map(el => <Input
            key={el.id}
            elementType={el.config.elementType}
            elementConfigs={el.config.elementConfigs}
            value={el.config.value}
            onChangeHandler={e => onChangeHandler(e, el.id)}
        />)
    }
        <Button btnType="Success" value="Submit" />
    </form>)

    return (
        <div>
            <h2> Form </h2>
            {form}
        </div>
    )
}

export default Form