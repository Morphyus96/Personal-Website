import React from 'react';
import { Navigate, Routes, Route, useNavigate } from 'react-router-dom';

import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Projects from './Pages/Projects';

function Router() {
  const navigate = useNavigate();

  const header = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

  const buttonBox = {
    display: 'flex',
    gap: '10px'
  }

  return (
    <>
      <div id="header" style={header}>
        <h1>RJF</h1>
        <span id="button-box" style={buttonBox}>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/blog')}>Blog</button>
          <button onClick={() => navigate('/projects')}>Projects</button>
        </span>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </>
  )
}

export default Router