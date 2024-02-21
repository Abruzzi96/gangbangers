// src/components/Login.js
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = e => {
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
            // Perform login
            console.log(username, password);
        }
    };

    return (
        <div>
            <h1><center>Login</center></h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username 
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} required/>
                </label>
                {errors.username && <p>{errors.username}</p>}

                <label>
                    Password  
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required/> 
                </label>
                {errors.password && <p>{errors.password}</p>}

                <input type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default Login;
