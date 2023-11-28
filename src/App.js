
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Routes,
  BrowserRouter
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
    }, 1500);
  }
  const changeredColor = () => {
    document.body.style.backgroundColor = '#ED2B2A';
  }
  const changeyellowColor = () => {
    document.body.style.backgroundColor = '#FFC436';
  }
  const changegreenColor = () => {
    document.body.style.backgroundColor = '#A3B763';
    console.log("green");
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title='TextUtils - Light Mode';
    }
  }


  return (
    <>
      {/*<Navbar title="TextUtils" aboutText="About TextUtils"/>*/}
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} changeredColor={changeredColor} changeyellowColor={changeyellowColor} changegreenColor={changegreenColor} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes> 
      <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
      </Routes>
        </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;
