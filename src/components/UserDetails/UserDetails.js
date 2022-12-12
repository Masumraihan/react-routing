import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const {userId} = useParams();
    const [user,setUser] = useState({});
        useEffect(() => {
            const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
            fetch(url)
           .then(res => res.json())
           .then(data => setUser(data));
        },[])
    return (
        <div>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    );
};

export default UserDetails;