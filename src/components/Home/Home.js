import React from 'react';
import { useEffect, useState } from 'react';
import Users from '../Users/Users';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    //console.log(users);
    return (
        <div>
            <h1>Users Counts: {users.length}</h1>
            {
                users.map(user => <Users friend={user}></Users>)
            }
        </div>
    );
};

export default Home;