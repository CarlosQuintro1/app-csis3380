import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';




export default function UserInfo () {
  const [UserName, setUserName] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Age, setAge] = useState('');
  const [updated, setUpdated] = useState('');

  
  let id = '';
  const cookie1 = document.cookie.split(";").map(cookie => cookie.split("%22"))[1][7];
  const cookie2 = document.cookie.split(";").map(cookie => cookie.split("%22"))[3][7];


    if(cookie1 !== undefined){
        id = cookie1
        console.log(id)
        
    }else if(cookie2 !== undefined){
        id = cookie2
        console.log(id)

    }
  const signOut = useSignOut();
  const navigate = useNavigate();

    //setUserId(id)
  // eslint-disable-next-line no-unused-expressions
  useEffect(() => { 
    axios.post(`http://localhost:4000/user/${id}`)
    .then(response => {
    setFirstName(response.data.FirstName)
    setLastName(response.data.LastName)
    setAge(response.data.Age)
    setUserName(response.data.UserName)
  console.log(response.data);})
   .catch(error => {
  console.log(error);
   }); 

  },[id])

  const logout = () =>{
        signOut();
        navigate('/')
    }

    
   
    
    
  const handleSubmit = (event, action) => {
    event.preventDefault();
    if (action === 'edit') {
      const data = {FirstName, LastName, Age, UserName}

      axios.post(`http://localhost:4000/user/update/${id}`, data)
        .then(response => {
          console.log(response.data);
        navigate('/Account')
        setUpdated('User Updated!')
          
          
        })
        .catch(error => {
          console.log(error);
        });
    } else if (action === 'delete') {

      axios.delete(`http://localhost:4000/user/delete/${id}`)
        .then(response => {
          console.log(response.data);
          logout()
          window.location = '/'
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <div >
    <Navbar/>
    <div className='form-user'>
    <form >
      <label>
        First Name:
        <input type="text" value={FirstName} onChange={e => setFirstName(e.target.value)} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={LastName} onChange={e => setLastName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="text" value={Age} onChange={e => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        UserName:
        <input type="text" value={UserName} onChange={e => setUserName(e.target.value)} />
      </label>
      <br />
      <label>{updated}</label>
      <button className="edit-button" onClick={e => handleSubmit(e, 'edit')}>Edit</button>
      <button className="delete-button" onClick={e => handleSubmit(e, 'delete')}>Delete</button>
      <button className="logout-button" onClick={logout}>Logout</button>
    </form>
    
    </div>
    <Footer/>
    </div>
    
  );
};
