import React, { useState } from 'react';
import { NavLink }  from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
   // Sign up logic here
  };


  return (
      <div className = "signup-container">
          <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>  Username:
                  <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                </label>
                <label>  Password:
                  <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <label>   Email:
                  <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </label>
                <label>   Date of Birth:
                  <input type="date" value={dob} onChange={(event) => setDob(event.target.value)} />
                </label>
                <label>   Gender:
                  <select>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label>   Phone Number:
                  <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                </label>
                <label>   Address:
                  <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
                </label>

                  <button type="submit">Sign Up</button>
              </form>
                <p>
                  Already have an account? <NavLink to="/sign-in">Sign In</NavLink>
                </p>
                <p>
                  <NavLink to="/home">Home</NavLink>
                  <NavLink to="/contact-us">Contact Us</NavLink>
                  <NavLink to="/about">About</NavLink>
                </p>

        </div>
  );
};
export default SignUp;
