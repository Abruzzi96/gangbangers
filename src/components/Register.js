import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== confirmedPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/register', { email, username, password });
            console.log('User registered successfully:', response.data);
            // Optionally redirect or show a success message
            navigate('/login'); // Navigate to login page
        } catch (error) {
            console.error('Registration error:', error);
            // Handle error, show an alert, etc.
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') setEmail(value);
        else if (name === 'username') setUsername(value);
        else if (name === 'password') setPassword(value);
        else if (name === 'confirmedPassword') setConfirmedPassword(value);
    };

    return (
        <div>
            <h1><center>Register</center></h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="username">
                    Username
                    <input
                        id="username"
                        name="username"
                        type="username"
                        value={username}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="confirmedPassword">
                    Confirm Password
                    <input
                        id="confirmedPassword"
                        name="confirmedPassword"
                        type="password"
                        value={confirmedPassword}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
