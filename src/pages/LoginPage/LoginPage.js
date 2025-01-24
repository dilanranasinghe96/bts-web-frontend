// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import "./LoginPage.css";

// function LoginPage() {
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Add your login logic here (API call, validation, etc.)
//     const isAuthenticated = true; // Replace this with your actual authentication logic

//     if (isAuthenticated) {
//       navigate('/HomePage'); // Navigate to the Home page
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleLogin}>
//         <h2>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//         />


//         <select required>
//             <option value="" disabled selected>Select Role</option>
//             <option value="main-admin">Main Admin</option>
//             <option value="company-admin">Company Admin</option>
//             <option value="plant-user">Plant User</option>
//             <option value="user">User</option>
//           </select>
          
//         <button type="submit">Login</button>
//         <p>
//           Don't have an account? <Link to="/RegisterPage">Register</Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;


import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        username,
        password,
        role
      });

      // Store user data in localStorage
      localStorage.setItem('username', response.data.user.username);
      
      // Navigate to home page
      navigate('/HomePage');
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select 
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="" disabled>Select Role</option>
          <option value="main admin">Main Admin</option>
          <option value="company admin">Company Admin</option>
          <option value="plant user">Plant User</option>
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