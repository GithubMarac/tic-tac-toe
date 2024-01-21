import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../Redux/authSlice';

export default function Login() {
  const dispatch = useDispatch();

 const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Function to handle form field changes
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      const response = await axiosInstance.post('/login/', {
        username: formData.username,
        password: formData.password,
      });

      localStorage.setItem("token", response.data.token)
      dispatch(loginSuccess());

      setFormData({
        username: '',
        password: '',
      });

    } catch (error: any) {
      console.error('Login error:', error.message);
    }
  };
    return (
      <>
        <div className="row p-5 w-[50%] m-auto">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange} />
                <label htmlFor="icon_prefix">Username</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field">
                <i className="material-icons prefix">lock_outline</i>
                <input  type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange} />
                <label htmlFor="icon_lock_outline">Password</label>
              </div>
            </div>
            <div className="row">
              <button className="blue darken-4 btn w-full" type="submit">Login</button>
            </div>
          </form>
        </div>
      </>
    );
  };
