import React, { useState } from 'react';
import  { NavLink } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   // Sign in logic here
  };

  return (
        <div className = "singin-container">
          <h1>Sign In</h1>
              <form onSubmit={handleSubmit}>
                <label>Username:
                  <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />  
                </label>
                <label>Password:
                  <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />  
                </label>
                  <button type="submit">Sign In</button>
              </form>
                <p>
                  Don't have an account? <NavLink to="/sign-up">Sign Up</NavLink>
                </p>
          </div>
  );
};
export default SignIn;
