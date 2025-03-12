import React, { useState } from "react";
import logo from "../assets/logo.svg";
import crossicon from "../assets/cross_icon.png";

import profile from "../assets/profile_pic.png";
import dropdown from "../assets/dropdown_icon.svg";
import menuicon from "../assets/menu_icon.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate()}
        className="w-44 cursor-pointer"
        src={logo}
      ></img>
      <ul className="hidden md:flex gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="m-auto w-3/5 text-[var(--color-primary)] hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">All DOCTORS</li>
          <hr className="m-auto w-3/5 text-[var(--color-primary)] hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="m-auto w-3/5 text-[var(--color-primary)] hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className=" m-auto w-3/5 text-[var(--color-primary)] hidden" />
        </NavLink>
      </ul>
      <div>
        {token ? (
          <div className="flex gap-2 relative group">
            <img className="w-8 rounded-full" src={profile}></img>
            <img className="w-2.5" src={dropdown}></img>
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={menuicon}
        ></img>
        {/* mobile menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          }md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={logo} alt="" />
            <img className="w-7" onClick={() => setShowMenu(false)} src={crossicon} alt="" />
          </div>
          <ul  className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to='/'>Home</NavLink>
            <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to='/doctors'>All Doctors</NavLink>
            <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to='/about'>About</NavLink>
            <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to='/contact'>Contact</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
