
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//   } from "react-router-dom";

function App() {
    const [mode,setmode]=useState('light');
    const [alert,setAlert]=useState(null);
    const showAlert=(message,type)=>{
        setAlert({
            msg:message, 
            type:type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    const toggleMode=()=>{
        if(mode ==='light'){
            setmode('dark');
            document.body.style.backgroundColor='#042743';
            showAlert("Dark mode has been enabled","success");  
            document.title="MytextHelper-Dark Mode";
        }
        else{
            setmode('light');
            document.body.style.backgroundColor='white';
            showAlert("Light mode has been enabled","success");
            document.title="MytextHelper-Light Mode";
        }
    }
return(
<>
{/* <Router> */}
<Navbar title="MyTextHelper" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text Below" mode={mode}/>
          </Route>
</Switch> */}
<TextForm showAlert={showAlert} heading="Enter the text Below" mode={mode}/>
</div>
{/* </Router> */}
</>
);
}

export default App;
