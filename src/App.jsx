import { useState } from "react"; 
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Outlet, useNavigation } from "react-router-dom";

function App() { 
  const navigation = useNavigation();

  return (
    <>
    <Navbar/> 
       <p className="text-center">{navigation.state === 'loading' && 'loading'}</p>
       <Outlet/>
    </>
  );
}

export default App;
