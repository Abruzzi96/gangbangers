import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

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
                // Send login request to backend
                const response = await axios.post('http://localhost:4000/login', { username, password });

                console.log('Login successful:', response.data);

                // Redirect to profile page or dashboard after successful login
                navigate('/profile'); // Replace with the desired redirect path
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
