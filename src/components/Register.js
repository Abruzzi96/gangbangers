// src/components/Register.js
import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmedPassword: ''
        };
    }
    
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic goes here
    }

    render() {
        return (
            <div>
            <h1><center>Register</center></h1>
            <form onSubmit={this.handleSubmit}>
                  <label htmlFor="email">
                    Email
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        aria-required="true"
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        aria-required="true"
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="confirmedPassword">
                    Confirm Password
                    <input
                        id="confirmedPassword"
                        name="confirmedPassword"
                        type="password"
                        value={this.state.confirmedPassword}
                        aria-required="true"
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit">Register</button>
            </form>
          </div>
        );
    }
}

export default Register;

