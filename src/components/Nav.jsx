import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useNavigate } from "react-router-dom";

import { Navbar } from "flowbite-react";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <Navbar fluid rounded className="z-10">
        <Navbar.Brand onClick={() => navigate("/")} className="cursor-pointer">
          <img
            src={headerLogo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navLinks.map((item) => (
            <Navbar.Link
              key={item.label}
              // href={item.path}
              onClick={() => navigate(item.path)}
              className="font-montserrat leading-normal text-lg text-slate-gray"
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
