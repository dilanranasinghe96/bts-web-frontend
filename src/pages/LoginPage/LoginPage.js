import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your login logic here (API call, validation, etc.)
    const isAuthenticated = true; // Replace this with your actual authentication logic

    if (isAuthenticated) {
      navigate('/HomePage'); // Navigate to the Home page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          required
        />
        <input
          type="password"
          placeholder="Password"
          required
        />


        <select required>
            <option value="" disabled selected>Select Role</option>
            <option value="main-admin">Main Admin</option>
            <option value="company-admin">Company Admin</option>
            <option value="plant-user">Plant User</option>
            <option value="user">User</option>
          </select>
          
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/RegisterPage">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
