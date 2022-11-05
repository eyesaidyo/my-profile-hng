
import "./App.css";

import {Routes, Route } from 'react-router-dom'
import ContactMe from "./ContactMe";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/contact" element={<ContactMe/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
