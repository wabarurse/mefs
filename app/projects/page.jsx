"use client"; // in order to use useState and useEffect

import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { BiDownArrow } from "react-icons/bi";
import { useState, useEffect } from "react";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-color">
      <div className="page-fade-in flex justify-center items-center h-screen">
        <h1 className="font-crazy text-9xl font-bold text-color-1">Projects</h1>
        <BiDownArrow size={48} className="absolute bottom-8 animate-bounce text-color-1" />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-32">
        <div className="grid grid-cols-2 gap-10 justify-items-center">

          <div onClick={() => setIsOpen(true)}>
            <ProjectCard
              
              logo="/images/education/uw_se.png"
              name="Voice Controlled Car"
              description="I designed and built a voice-controlled robotic car."
              skills={[
                { name: "python", image: "/images/skills/python.png" },
                { name: "git", image: "/images/skills/git.png" },
                { name: "github", image: "/images/skills/github.png" },
              ]}
              link="https://github.com/raphael-64/voice-controlled-wheelchair"
            />
          </div>
          
          <div onClick={() => setIsOpen(true)}>
            <ProjectCard
              
              logo="/images/projects/tourni.png"
              name="Tourni" 
              description="Tourni is a tournament portal for community and intramural activities, seamlessly connecting participants and organizers."
              skills={[
                { name: "typescript", image: "/images/skills/ts.png" },
                { name: "react", image: "/images/skills/react.png" },
                { name: "tailwind", image: "/images/skills/tailwind.png" },
                { name: "postgres", image: "/images/skills/postgres.png" },
                { name: "git", image: "/images/skills/git.png" },
                { name: "github", image: "/images/skills/github.png" },
              ]}
              link="https://github.com/allenlian1/tourni"
            />
          </div>

          <div onClick={() => setIsOpen(true)}>
            <ProjectCard
              
              logo="/images/projects/swype.png"
              name="Swype"
              description="I developed Swype, an educational app that enhances math practice for younger students by gamifying learning and fostering friendly competition within a classroom setting."
              skills={[
                { name: "swift", image: "/images/skills/swift.png" },
                { name: "swiftui", image: "/images/skills/swiftui.png" },
                { name: "git", image: "/images/skills/git.png" },
                { name: "github", image: "/images/skills/github.png" },
              ]}
              link="https://github.com/Jam-Cai/Swype"
            />
          </div>
        </div>


        {/* <div className="max-w-4xl mx-auto px-4 flex justify-center items-center py-16">
          <button className="button scroll-zoom">
            <p className="font-nunito text-color-1 text-xl font-bold">More Projects</p>
          </button>
        </div> */}

        {isOpen && <Popup onClose={() => setIsOpen(false)} />}
      </div>
    </div>
  );
}

const ProjectCard = ({ logo, name, description, link, skills }) => (
  <div className="scale-100 hover-zoom">
    <div className="project-card flex flex-col items-center">
    <div className="flex items-center justify-center bg-[#272727] w-full h-32 rounded-lg py-4">
      <img
        className="max-h-full max-w-full object-contain"
        src={logo}
        alt="logo"
      />
    </div>
    <h1 className="p-4 font-nunito text-color-1 text-2xl font-bold">{name}</h1>
    <p className="px-4 font-nunito text-color-2">{description}</p>
    <div className="flex flex-row items-center">
      <div className="grid grid-cols-4 py-8 gap-x-8 gap-y-12">
        {skills.map((skill) => (
          <Skill name={skill.name} image={skill.image}/>
        ))}
      </div>
    </div>
    <div class="hover-zoom-large absolute bottom-4 right-4 w-8 h-8">
        <a href={link} target="_blank" rel="noreferrer">
          <BsLink45Deg size={32} color="#CECECE" />
        </a>
    </div>
    </div>
  </div>
);


function Popup({ onClose }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  const closePopup = () => {
    setActive(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`popup ${active ? "active" : ""}`}>
      <div className="overlay" onClick={closePopup}></div>
      <div className="popup-content">
        <h2 className="text-lg font-semibold text-color-1">Pop up coming soon!</h2>
        <p className="text-color-2 mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          inventore et ullam, porro eius velit.
        </p>
        <div className="close-button">
          <button
            className="px-3 py-1 bg-red-500 text-white rounded-md"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

const Skill = ({ name, image }) => (
  <div className="flex flex-col h-12 w-12 items-center justify-center space-y-1">
    <img
      src={image}
      alt="Item 1"
      className="w-full h-full object-contain"
    />
    <h3 className="text-md items-center font-nunito font-bold text-color-2">{name}</h3>
  </div>
)

export default Projects;

