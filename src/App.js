import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "react-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState();

  const showAlert =(message, type)=>{
     setAlert({ msg : message,
      type : type})
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  // }
 
  const toggleMode= ()=>{
    // document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      setBtnText('Enable Light Mode');
      document.body.style.backgroundColor='#183654'
      showAlert("Dark mode has been enable","success");
      }
    else{
      setMode('light');
      setBtnText('Enable Dark Mode');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success");

  }}
  return (
  <>
<BrowserRouter>
<Navbar tittle="TextUtils" aboutText ="About Us" toggleMode={toggleMode} btnText={btnText} mode={mode}/>
<Alert alert={alert}/>
<div className="container" >
    <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text below" mode={mode}/>}/>
    </Routes>
</div>
</BrowserRouter>
    </>
  );
}

export default App;