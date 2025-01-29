import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Forum from "./pages/Forum.jsx";
import Tentang from "./pages/Tentang.jsx";
import Info from "./pages/Info.jsx";
import Forgot from "./pages/Forgot.jsx";
import Reset from "./pages/Reset.jsx";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} /> {/* Route default */}
          <Route path="/landing" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/info" element={<Info />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset" element={<Reset />} />
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
