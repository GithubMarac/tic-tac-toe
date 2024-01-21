import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  // Function to handle form field changes
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'confirmPassword') {
      setIsPasswordValid(value === formData.password);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!isPasswordValid) {
      alert("Passwords don't match");
      return;
    }

    
    try {
      const response = await axios.post('https://tictactoe.aboutdream.io/register/', {
        username: formData.username,
        password: formData.password,
      });


      setFormData({
        username: '',
        password: '',
        confirmPassword: '',
      });
      setIsPasswordValid(true);

      console.log("alert");

    } catch (error: any) {
      console.error('Registration error:', error.message);
    }
  };


  return (
    <>
      <div className="col s12 padtop40 w-[50%] mt-11 m-auto border shadow-2lg">
        <form className="m-auto" onSubmit={handleSubmit}>
          <div className="col m6 offset-m3 s12 z-depth-1 padtop10">
            <div className="m-auto input-field col s12">
              <input placeholder="Username" type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field col s12 ">
              <input placeholder="Password" type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field col s12 ">
              <input placeholder="Confirm Password" type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={isPasswordValid ? 'valid' : 'invalid'}
              />
            </div>
            <button className="blue darken-4 btn w-full" type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
};