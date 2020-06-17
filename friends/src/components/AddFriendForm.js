import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const AddFriendForm = () => {
    const [addedFriend, setAddedFriend] = useState(false);
    const [inputs, setInputs] = useState({
        name: '',
        age: '',
        email: ''

    });

    const onSubmit = (e) => {
        e.preventDefault();
        setAddedFriend(true)
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', inputs)
            .then(res => {
                console.log(res);
                setAddedFriend(false);
            })
            .catch(err => {
                console.log(err.response);
                setAddedFriend(false);
            });
        setInputs({
            name: '',
            age: '',
            email: ''
        });
    };
    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            {
                addedFriend && (
                    <div>
                        Friend added successfully!
                    </div>
                )
            }
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='enter name'
                    value={inputs.name}
                    onChange={onChange}
                />

                <input
                    type='text'
                    name='age'
                    placeholder='enter age'
                    value={inputs.age}
                    onChange={onChange}
                />

                <input
                    type='email'
                    name='email'
                    placeholder='enter email'
                    value={inputs.email}
                    onChange={onChange}
                />

                <button type="submit">
                    Submit
            </button>
            </form>
        </div>
    );
}; 