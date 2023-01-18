import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter email and password");
    } else {
      console.log(`Email: ${email} Password: ${password}`);
    }
  };

  return (
    <div className='card'>
      <form>
        <h2 className='title'>Log in</h2>
        <p className='subtitle'>
          Don't have an account? <a href='#'>sign Up</a>
        </p>

        <div className='social-login'>
          <button className='google-btn'>
            <img
              alt='Google'
              src='https://assets.materialup.com/uploads/82eae29e-33b7-4ff7-be10-df432402b2b6/preview'
            />
            <p className='btn-text'>Sign in with Google</p>
          </button>
          <button className='fb-btn'>
            <img
              alt='FB'
              src='https://orchardviewmississippi.ca/wp-content/uploads/2014/07/facebook-icon.png'
            />
          </button>
        </div>

        <p className='or'>
          <span>or</span>
        </p>

        <div className='email-login'>
          <label htmlFor='email'>
            <b>Email</b>
          </label>
          <input
            type='text'
            placeholder='Enter Email'
            name='uname'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='psw'>
            <b>Password</b>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            name='psw'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='cta-btn' onClick={handleSubmit}>
          Log In
        </button>
        <a className='forget-pass' href='#'>
          Forgot password?
        </a>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
