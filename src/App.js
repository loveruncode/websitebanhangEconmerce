import React from "react";
import Navbar from './components/nav';
import { BrowserRouter } from "react-router-dom";
import Rout from "./components/rout";

const  App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Rout/>
    </BrowserRouter>
    </>
  );
}

export default App;
