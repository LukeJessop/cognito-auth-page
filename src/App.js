import "./App.scss";
import ExploroLogo from './SCSS/assets/ExploroLogo.svg'

import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";

import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const switchPageTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <img src={ExploroLogo} alt='exploro-logo' width={'80%'}/>
      <Login switchPageTo={switchPageTo} />
    </div>
  );
}

export default App;
