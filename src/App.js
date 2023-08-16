//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light")
  const [toggleBtn, setToggleBtn] = useState("Dark Mode : Off")
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark")
      setToggleBtn("Dark Mode : On")
      document.body.style.backgroundColor = '#15222f'
      document.body.style.color = 'white'
      showAlert("Dark Mode Enabled", "success")
      document.title = "Textutils - Dark Mode"
      setTimeout(() => {
        document.title = "Textutils - Home"  
      }, 3000);
    }
    else{
      setMode("light")
      setToggleBtn("Dark Mode : Off")
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode Enabled", "success")
      document.title = "Textutils - Light Mode"
      setTimeout(() => {
        document.title = "Textutils - Home"  
      }, 3000);
    }
  }

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null)
        }, 1500);
  }
  return (
    <>
     <Router>
       <Navbar title="TextUtils" aboutName="About" textName="Text Area" mode={mode} btnText={toggleBtn} toggleMode={toggleMode}/>
       <Alert alert={alert} />
       <div className="container my-3">
       <Routes>
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/textform" element={<TextForm heading = "Enter the text" showAlert={showAlert}/>} />
        </Routes>
       </div>
      </Router>   
    </>   
      );
}

export default App;
