import axios from 'axios'
import React, { useEffect, useState } from 'react'
import App from '../App'
import Form from './Form'
const GetData = (props) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const users = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(users.data)
        }
        fetchData()
    }, [App, Form])
    console.log(users)

    return (
        <div>
            <div>Online people</div>
            {users.map(user => {
                return (
                    <li>{user.name}</li>
                )
            })}
        </div>
    )
}

export default GetData