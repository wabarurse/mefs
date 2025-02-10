import React from 'react'
import { BiLogoGmail, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";


function Footer() {
  return (
    <footer className="bg-color text-white py-4">
      <div className="flex flex-col items-center justify-center space-y-2">
      <div className='flex flex-row mx-auto items-center justify-center space-x-4'>
            <Socials
            icon={<BiLogoGmail size={24} />}
            href="mailto:wabarurse@gmail.com"
            />
            <Socials
            icon={<BiLogoLinkedin size={24} />}
            href="https://www.linkedin.com/in/r123huang/"
            />
            <Socials
            icon={<BiLogoGithub size={24} />}
            href="https://github.com/wabarurse"
            />
      </div> 
      <p className="font-nunito text-bold text-color-1">
        © 2024 Richard Huang
      </p>
      </div>
        
      
    </footer>
  );
}


const Socials = ({ icon, href }) => (
    <a 
    href={href}
    className="socials"
    >
        {icon}
    </a>
);

export default Footer