import './App.css';
import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleDark = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#00000c';
      showAlert("Dark mode enabled", "success");
    }
  }
  const toggleRed = () => {
    if (mode === 'danger') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
    else {
      setMode('danger');
      document.body.style.backgroundColor = '#cf7474';
      showAlert("Red mode enabled", "success");
    }
  }
  const toggleGreen = () => {
    if (mode === 'success') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
    else {
      setMode('success');
      document.body.style.backgroundColor = '#97ff97';
      showAlert("Green mode enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleDark={toggleDark} toggleRed={toggleRed} toggleGreen={toggleGreen} />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
          <Route exact path='/about' element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter Text Here" mode={mode} />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
