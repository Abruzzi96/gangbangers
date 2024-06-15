// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AuthContext } from './context/AuthContext';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Robbery from './components/Robbery';
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import backgroundImage from './assets/images/wallpaper.jpg';
import Chat from './components/ChatApp';

import CarGame from './components/CarGame';

function App() { 
  return (
    <Router>
      <div style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        height: '100vh'
      }}>
      <div className="App">
      </div>
        <AuthProvider> 
          <Header />
          <main role="main">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
            <Route path="/robbery" element={<Robbery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> 
            <Route path="/chat" element={<Chat />} />
            <Route path="/cargame" element={<CarGame />} />
            </Routes>  
          </main>
          <Footer />
        </AuthProvider>
      </div>
    </Router>
  );
}

// PrivateRoute component to protect routes
const PrivateRoute = ({ element }) => {
  const { user } = useContext(AuthContext);
  return user ? element : <Navigate to="/login" />;
};

export default App;
