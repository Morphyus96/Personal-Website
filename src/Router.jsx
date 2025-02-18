import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Router() {
  console.log('Router component rendered')

  return (
    <Routes>
      <Route path="/" element={<div>Hello</div>} />
    </Routes>
  )
}

export default Router