import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { useSignIn } from 'react-auth-kit';



function Login() {
  const [UserName, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const signIn = useSignIn();


  const [error, setError] = useState('');

const handleSubmit = async (event) => {
  event.preventDefault();
  const user = { UserName , Password};
  try {
    const response = await axios.post('http://localhost:4000/user/login', user)
    signIn({
      token: response.data.token,
      expiresIn:3600,
      tokenType:"Bearer",
      authState: {UserName: user.UserName, _id : response.data._id}
    })

    window.location = "/"
    
  } catch (error) {
    setError('Invalid username or password');
  }
};

return (
  <div>
    <Navbar/>
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        value={UserName}
        onChange={(event) => setUsername(event.target.value)}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        value={Password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      {error && <div className="error">{error}</div>}
      <button type="submit">Log In</button>
    </form>
    <Footer/>
  </div>
);
}

export default Login;