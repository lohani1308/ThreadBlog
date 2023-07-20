// src/components/RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process register logic here with formData.name, formData.email, and formData.password
    axios.post('http://localhost:4444/register',{
        name:formData.name,
        email:formData.email,
        password:formData.password
    }).then(()=>{
        console.log("Registered");
    }).catch((err)=>{
        console.log(err);
    })

    console.log('Register form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          style={{border: "1px solid black"}}
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          style={{border: "1px solid black"}}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          style={{border: "1px solid black"}}
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" style={{ backgroundColor:"blue" ,border:"1px solid  black" , borderRadius:"10px", padding:"0.5rem" }}>Register</button>
    </form>
  );
};

export default RegisterForm;
