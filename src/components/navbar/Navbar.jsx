import React, { useState } from "react";
import Links from "../Links/Links";
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
const [open, setOpen]  = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/About" },
    { id: 3, name: "Contact", path: "/Contact" },
    { id: 4, name: "Users", path: "/users" },
    { id: 5, name: "Services", path: "/Services" },
  ];

  return (
    <nav className="bg-purple-400">
        <div className="md:hidden" onClick={() => setOpen(!open)}>

      <span>{
          open ? 
          <XMarkIcon className="h-6 w-6 text-blue-500" />: 
          <Bars3Icon className="h-6 w-6 text-blue-500" />
      }</span>
       
        </div>
      
      <ul className={`md:flex absolute md:static duration-300 pl-8 py-2 bg-purple-400 ${open ? 'top-6':'-top-48'}`}>
        {routes.map((route) => (
          <Links route={route} key={route.id}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
