import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type, type_n) => {
    setAlert({
      msg: message,
      type: type,
      type_n: type_n
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#08081c';
      showAlert("Dark mode enabled", "warning", "Success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "warning", "Success")
    }
  }
  return (
    <>
      <Router>
        <Navbar cname="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-2">
            <Switch>
            <Route path="/about">
                <About mode={mode}/>
              </Route>
              <Route path="/">
                <TextForm showAlert={showAlert} heading="Text Utils" mode={mode} />
              </Route>
            </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
