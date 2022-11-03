// import logo from './logo.svg';
import "./App.css";
import { Routes ,Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React,{useState} from 'react'
import Alert from "./Components/Alert";
// import Navbar1 from "./Components/Navbar1";


function App() {
  const[mode,setMode]=useState('dark'); // whenever dark mode is enabe or not 
  const [alert,setAlert]=useState(null);
  const showalert=(message,type)=>{
     setAlert({
      msg : message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)

  }
  const toogleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='darkblue';
      showalert('Dark mode has been enabled','success');
      document.title ='Textutils-Dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showalert('Light mode has been enabled','success');
      document.title ='Textutils-Light mode';
    }
  }
  return (
      <Router>
        <Navbar title="textutils" hometext="Home" abouttext="About" searchicon="view" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />
        < div className="container">
          <Routes>
            <Route path="/" element={<Textform/>}/>   
            <Route path="/about" element={<About/>}>
              
             </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
