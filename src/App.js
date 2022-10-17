import { useState } from "react";
import {Route, Routes} from 'react-router-dom'

import "./App.scss";
import ExploroLogo from './SCSS/assets/ExploroLogo.svg'

import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";



function App() {

  return (
    <div className="App">
      <img src={ExploroLogo} alt='exploro-logo' width={'70%'}/>
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/forgot-password'element={<ForgotPassword />}/>
      </Routes>
    </div>
  );
}

export default App;
