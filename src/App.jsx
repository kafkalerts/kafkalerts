import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
};

export default App;
