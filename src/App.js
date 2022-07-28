import React from "react"
import './App.css';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import HomePage from './page/home'

function App() {
  return (
    <Router>
     <Routes>
      <Route path='/home' element={<HomePage/>} />
    </Routes>
    </Router>
  );
}

export default App;
