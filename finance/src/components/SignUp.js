import { useState } from 'react';
import axios from 'axios'
import Footer from './Footer';
import Navbar from './Navbar';
import './SignUp.css';
export default function SignUp() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Age, setAge] = useState();
  const [UserName, setUsername] = useState('');
  const [Password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { FirstName,LastName, Age, UserName , Password};
    console.log(newUser)
    axios
      .post('http://localhost:4000/user/create/', newUser)
      .then((res) => {
        window.location = "/";
      });
  }

  return (
    <div>
    <Navbar/>
    <div className="SignUp">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="FirstName">First Name:</label>
          <input type="text" id="firstName" value={FirstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={LastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="form-field">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={Age} onChange={(e) => setAge(e.target.value)} required />
        </div>
        <div className="form-field">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={UserName} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
}