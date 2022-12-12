import React from 'react';
import { Link } from 'react-router-dom';
import './Users.css';

const Users = (props) => {
    //console.log(props.friend)
    const {name,email,id} = props.friend;
    //console.log(id)
    return (
        <div className='user_container'>
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <Link to={`/users/ ${id}`}>
                <button>More Details</button>
            </Link>
        </div>
    );
};

export default Users;