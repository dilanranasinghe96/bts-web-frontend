import React from 'react';
import { Link } from 'react-router-dom';
import "./RegisterPage.css";


function RegisterPage() {
  return (
    
      <div className="register-container">
        <form className="register-form">
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            required
            
          />
          <input
            type="email"
            placeholder="Email"
            required
            
          />
          <input
            type="password"
            placeholder="Password"
            required
            
          />
           <input
            type="phone"
            placeholder="Phone Number"
            required
            
          />

          <select required>
            <option value="" disabled selected>Select Role</option>
            <option value="main-admin">Main Admin</option>
            <option value="company-admin">Company Admin</option>
            <option value="plant-user">Plant User</option>
            <option value="user">User</option>
          </select>
          <button type="submit" >Register</button>
          <p>
            Already have an account? <Link to="/LoginPage">Login</Link>
          </p>
        </form>
      </div>
   
  )
}

export default RegisterPage
