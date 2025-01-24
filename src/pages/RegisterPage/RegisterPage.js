// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./RegisterPage.css";


// function RegisterPage() {
//   return (
    
//       <div className="register-container">
//         <form className="register-form">
//           <h2>Register</h2>
//           <input
//             type="text"
//             placeholder="Username"
//             required
            
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             required
            
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             required
            
//           />
//            <input
//             type="phone"
//             placeholder="Phone Number"
//             required
            
//           />

//           <select required>
//             <option value="" disabled selected>Select Role</option>
//             <option value="main-admin">Main Admin</option>
//             <option value="company-admin">Company Admin</option>
//             <option value="plant-user">Plant User</option>
//             <option value="user">User</option>
//           </select>
//           <button type="submit" >Register</button>
//           <p>
//             Already have an account? <Link to="/LoginPage">Login</Link>
//           </p>
//         </form>
//       </div>
   
//   )
// }

// export default RegisterPage


import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./RegisterPage.css";

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', {
        username,
        email,
        password,
        phone,
        role
      });

      // Optional: Show success message
      alert('Registration successful');
      
      // Navigate to login page
      navigate('/LoginPage');
    } catch (error) {
      // Handle registration errors
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/LoginPage">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;