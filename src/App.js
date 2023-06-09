import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('');
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

// const removeBodyClasses=()=>{
//   document.body.classList.remove('bg-light');
//   document.body.classList.remove('bg-dark');
//   document.body.classList.remove('bg-success');
//   document.body.classList.remove('bg-danger');
//   document.body.classList.remove('bg-warning');
//   document.body.classList.remove('bg-primary');
// }

  const toggleMode = () => {
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enable", "success");
      // document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <TextForm showAlert={showAlert} heading="Enter the text analyze below" mode={mode} /> */}
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text analyze below" mode={mode} />} />
            <Route  path="/about" element={<About mode={mode}/>}  />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
