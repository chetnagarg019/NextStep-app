import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { easeInOut, motion } from "motion/react";
const Nav = () => {
  const [sideBar, setSideBar] = useState(false);

  const toggle = () => {
    setSideBar(!sideBar);
  };

  return (
    <motion.nav
    initial = {{opacity:0,y:-50}}
    animate = {{opacity:1,y:0}}
    transition={{duration:0.6,ease:easeInOut}}
     className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
            <span className="text-2xl tracking-tight">VirtualR</span>
          </div>

          {/* Desktop Nav Items */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li><a href="#" onClick={() => setSideBar(false)}>Features</a></li>
            <li><a href="#" onClick={() => setSideBar(false)}>Workflow</a></li>
            <li><a href="#" onClick={() => setSideBar(false)}>Pricing</a></li>
            <li><a href="#" onClick={() => setSideBar(false)}>Testimonials</a></li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md" onClick={() => setSideBar(false)}>Sign In</a>
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md" onClick={() => setSideBar(false)}>
              Create an account
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggle}>
              {sideBar ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {sideBar && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li className="py-4"><a href="#" onClick={() => setSideBar(false)}>Features</a></li>
              <li className="py-4"><a href="#" onClick={() => setSideBar(false)}>Workflow</a></li>
              <li className="py-4"><a href="#" onClick={() => setSideBar(false)}>Pricing</a></li>
              <li className="py-4"><a href="#" onClick={() => setSideBar(false)}>Testimonials</a></li>
            </ul>
            <div className="flex space-x-6 mt-6">
              <a href="#" className="py-2 px-3 border rounded-md" onClick={() => setSideBar(false)}>Sign In</a>
              <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" onClick={() => setSideBar(false)}>
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Nav;
