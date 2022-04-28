import * as React from "react";
import "./App.css";
import Homepage from './components/Homepage.js'
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Homepage/>
      <Routes>
        <Route path="/" />
        <Route path="/save" />
      </Routes>
    </div>
  );
}

export default App;