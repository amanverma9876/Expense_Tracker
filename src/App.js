import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser}/>}/>
        <Route path="/register" element={<RegisterPage setUser={setUser}/>}/>
        <Route path="/dashboard" element={user ? <DashboardPage /> : <LoginPage setUser={setUser} />}/>
        <Route path="/" element={<LoginPage setUser={setUser} />}/>
      </Routes>
    </Router>
  );
}

export default App;
