import React, { useState } from 'react';

const MembershipForm = (props) => {
    const {setMembers, members} = props

    const [user, setNewUser] = useState({
            name: props.name,
            email: props.email,     //since props is an object im assigning the name/email/role to the object
            role: props.role
        })

        const formDetail = (event) => {
            event.preventDefault();
            setMembers(user)
        };

        const handleChange = (event) => {
            const targetMember = {
           ...user, [event.target.name] : event.target.value,
            }
            setNewUser(targetMember);
        };

        return (
            <form onSubmit={formDetail}>
                <label htmlFor='name'>Name:</label>
                <input name='name' type='text'
                placeholder='Enter Name' value={user.name} onChange={handleChange} />

                <label htmlFor='email'>Email: </label>
                <input name='email' type='text'
                placeholder='Enter Email' value={user.email} onChange={handleChange} />

                <label htmlFor='role'>Role:</label>
                <input name='role' type='text' placeholder='Enter Role'
                value={user.role} onChange={handleChange} />
                <button className='SubButton'>Add Member</button>
            </form>
        )

};

export default MembershipForm;





