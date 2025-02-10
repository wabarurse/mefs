import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';


const NavigationBar = () => {   
    const location = useLocation();
    const navigate = useNavigate();
    const leftPathMap = {
        "/experiences": "about",
        "/projects": "experiences",
    };
    const rightPathMap = {
      "/": "experiences",
      "/about": "experiences",
      "/experiences": "projects",
    };

    const handleLeftArrowClick = () => {
      const newPath = typeof leftPathMap[location.pathname] === "undefined" ? "/about" : ("/" + leftPathMap[location.pathname]);
      navigate(newPath);
    };

    const handleRightArrowClick = () => {
      const newPath = typeof rightPathMap[location.pathname] === "undefined" ? "/projects" : ("/" + rightPathMap[location.pathname]);
      navigate(newPath);
    };

    const NavigationLeftArrow = ({ icon }) => (
      <button 
        onClick={handleLeftArrowClick}
        className="navbar-left-arrow group">
        {icon}
        <span className="navbar-left-text group-hover:scale-100">
          {leftPathMap[location.pathname]}
        </span>
      </button>
    );
  
    const NavigationRightArrow = ({ icon }) => (
      <button 
        onClick={handleRightArrowClick}
        className="navbar-right-arrow group">
        {icon}
        <span className="navbar-right-text group-hover:scale-100">
          {rightPathMap[location.pathname]}
        </span>
      </button>
    );


    return (
      <div className="bg-color fixed top-0 h-20 w-screen m-0 shadow-lg flex justify-center items-center gap-x-4 z-10">
        <a href="/about">
          <img 
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="Logo" 
            className="hover-zoom-large absolute left-4 top-1/2 -translate-y-1/2 h-12 w-auto" 
          />
        </a>
        
        
        <NavigationLeftArrow 
          icon={<BsArrowLeftShort size="30"/>} 
        />
        <NavigationRightArrow 
          icon={<BsArrowRightShort size="30"/>} 
        />
      </div>
    );
  };

  export default NavigationBar;
  