import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home.jsx';
import EditarArticulo from './Component/Edit/Edit.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/edit' component={<EditarArticulo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
