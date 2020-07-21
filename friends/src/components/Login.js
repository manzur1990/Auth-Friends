import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



export const Login = () => {
    const history = useHistory();
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then(res => {
                console.log("from Login",res);
                localStorage.setItem('token', res.data.payload);
                history.push('/friends');

            })
            .catch(err => console.log(err.response));
        setCredentials({
            username: '',
            password: ''
        });
    };

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder='enter username'
                    value={credentials.username}
                    onChange={onChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='enter password'
                    value={credentials.password}
                    onChange={onChange}
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};
