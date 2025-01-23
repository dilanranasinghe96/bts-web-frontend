// import React from "react";
// import Navbar from "./components/navbar/Navbar";
// import TableDisplay from "./components/TableDisplay/TableDisplay";
// import LoginPage from "./pages/LoginPage/LoginPage";


// function App() {
//   return (
//     <div className="App">
//       {/* <Navbar />
//       <TableDisplay /> */}
//       <LoginPage />
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import TableDisplay from "./components/TableDisplay/TableDisplay";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

