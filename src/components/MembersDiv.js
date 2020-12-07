import React from 'react';

const Divcard = (props) => {
    return (
        <div>
            {props.members.map((user, index) => (
            <div key={index} className='member'>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.role}</p>
            </div>
))}
        </div>
    )
};

export default Divcard;