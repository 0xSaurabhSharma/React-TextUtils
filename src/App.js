import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Trying to manage state of all components from app.js only

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is on or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      console.log("To Dark");
      setMode("dark");
      document.body.style.backgroundColor = "#34383d";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      console.log("To Light");
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/" element={<Home/>}/> */}
        {/* <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={ */}
        <TextForm
          heading="Enter The Text To Analyze"
          showAlert={showAlert}
          mode={mode}
        />
        {/* }
          /> */}
        <Alert alert={alert} />
      </div>
      {/* </Routes>
    </Router> */}
    </>
  );
}

export default App;
