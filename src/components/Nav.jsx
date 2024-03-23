import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../Contexts/FilterContext";
import { Navbar } from "flowbite-react";
import React, { useContext } from 'react';

const Nav = () => {
  const navigate = useNavigate();

  const handleNavbarrButtonClick = (label, topic, path) => {
    console.log('clicked gender button on navbar');
    navigate(path, { state: { topic, label } }); // Pass topic and label as state
  };


  return (
    <header className="  h-auto w-full">
      <Navbar fluid  className="">
        <Navbar.Brand onClick={() => navigate("/")} className="cursor-pointer">
          <img
            src={headerLogo}
            className="mr-3 h-4 sm:h-9 "
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2 ">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navLinks.map((item) => (
            <Navbar.Link
              key={item.label}
              onClick={() =>handleNavbarrButtonClick(item.label,item.topic,item.path) }
              className="font-montserrat leading-normal text-lg text-slate-gray mt-10 "
            >
              {item.label}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Nav;
