//src/components/Login.js
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
/* eslint-enable no-unused-vars */

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formErrors = {};

        if (!username) {
            formErrors.username = 'Username is required';
        }

        if (!password) {
            formErrors.password = 'Password is required';
        }

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:4000/login', { username, password });

                console.log('Login successful:', response.data);

                login(response.data.user); // Assuming your response includes user data
                navigate('/profile');
            } catch (error) {
                console.error('Login error:', error);
                // Handle login error, e.g., display error message
            }
        }
    };

    return (
        <div>
            <h1><center>Login</center></h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                </label>
                {errors.username && <p>{errors.username}</p>}

                <label>
                    Password
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </label>
                {errors.password && <p>{errors.password}</p>}

                <input type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default Login;
