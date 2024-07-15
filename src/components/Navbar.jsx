import { Link, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/Brand_LOGO.png";
import { navItems } from "../constants";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <NavLink to={'/'} className="text-xl tracking-tight font-Lobster text-wrap">CapitalCompass</NavLink>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-E" >
                <NavLink to={item.href} >{item.label}</NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center ">
            <NavLink to="/Login" className="py-2 px-3 border rounded-md">
              Sign In
            </NavLink>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <NavLink to={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <NavLink to="#" className="py-2 px-3 border rounded-md">
                Sign In
              </NavLink>
              <NavLink
                to="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-F to-A"
              >
                Create account
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
