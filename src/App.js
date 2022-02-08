
import './App.css';
// import About from './MyComponents/About';
import NavBar from './MyComponents/NavBar';
import TextForm from './MyComponents/TextForm';
import React, { useState } from 'react';
import Alert from './MyComponents/Alert';



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const [btn, setbtn] = useState('primary');
  const showAlert= (msg , type) => {
    setalert({
      msg : msg,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const toggle=() =>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#101010';
      setbtn('primary')
      showAlert("Dark Mode", "success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor ='white'
      setbtn('primary')
      showAlert("Light Mode", "success")
    }
  }

  const changeColor= (e) =>{
    const colorbtn =e.target.id;
    switch(colorbtn){
      case 'danger':
        document.body.style.backgroundColor ='#c41b1b'
        setbtn('dark')
        break;
      case 'warning':
        document.body.style.backgroundColor ='#c8e026'
        setbtn('dark')
        break;
      case 'info':
        document.body.style.backgroundColor ='#2588a1'
        setbtn('dark')
        break;  
      default:
        document.body.style.backgroundColor ='white'
        break;   
    }
  }
  return (
  <>
     <NavBar title="TextUtils" mode={mode} toggle={toggle} changeColor={changeColor}/>
      <Alert alert={alert}/>
      <TextForm heading="Drop Your Text" mode={mode} btn={btn}/>
  </>
  );
}

export default App;
