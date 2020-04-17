import axios from 'axios'
import React, { useEffect, useState } from 'react'
import App from '../App'
const GetData = (props) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const users = await axios.get("https://jsonplaceholder.typicode.com/users")
            const limitedUsers = await users.data.slice(0, 5)
            setUsers(limitedUsers)
        }
        fetchData()
    }, [App])
    console.log(users)

    return (
        <div>
            <h2>Online fetched people</h2>
            {users.map(user => {
                return (
                    <p key={user.id}>{user.name}</p>
                )
            })}
        </div>
    )
}

export default GetData