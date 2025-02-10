import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { BsLink45Deg } from "react-icons/bs";
import { BiDownArrow } from "react-icons/bi";

function Projects() {
  return (
    <div className="bg-color">
      <NavigationBar />
      <div className="page-fade-in flex justify-center items-center h-screen">
        <h1 className="font-crazy text-9xl font-bold text-color-1">Projects</h1>
        <BiDownArrow size={48} className="absolute bottom-8 animate-bounce text-color-1" />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-32">
        <div className="grid grid-cols-2 gap-10 justify-items-center">

          <ProjectCard
            logo="/images/education/uw_se.png"
            name="Voice Controlled Car"
            description=
            "I designed and built a voice-controlled robotic car using a 3D-printed chassis, Arduino motors, 
            an L298 motor driver, and a Raspberry Pi Zero W. To enable voice control, I integrated VOSK, a 
            speech recognition model, to process voice input into a string, which was then transmitted to 
            the Raspberry Pi via a Netcat pipeline. A Bash script then captured the incoming command, while a 
            Python script interfaced with the L298 motor driver to enable real-time control of the car's movement."
            link="https://github.com/raphael-64/voice-controlled-wheelchair"
          />
          <ProjectCard
          logo="/images/projects/tourni.png"
          name="Touni" 
          description=
          "Tourni is a tournament portal for community and intramural activities, seamlessly connecting participants 
          and organizers. With a user-friendly interface, organizers can set up tournaments in under a minute. 
          Tourni integrates WebRTC for live streaming, enabling easy match broadcasting. It also tracks stats and 
          match histories, featuring a unique card-collection system where athletes earn digital badges for defeated 
          opponents—fostering competition, celebrating achievements, and giving players goals to chase."
          link="https://github.com/allenlian1/tourni"
          />
          <ProjectCard 
            logo="/images/projects/swype.png"
            name="Swype" 
            description=
            "I developed Swype, an educational app that enhances math practice for younger students by gamifying 
            learning and fostering friendly competition within a classroom setting. Instead of viewing short-form 
            videos as a distraction, I leveraged them as a tool for education, addressing the challenge of shortening
            attention spans by making learning more engaging and interactive."
            link="https://github.com/Jam-Cai/Swype"
          />
          


        </div>
        <div className="max-w-4xl mx-auto px-4 flex justify-center items-center py-16">
          {/* <button className="button scroll-zoom">
            <p className="font-nunito text-color-1 text-xl font-bold">More Projects</p>
          </button> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const ProjectCard = ({ logo, name, description, link }) => (
  <div className="scroll-fade hover-zoom">
    <div className="project-card">
      <div class="absolute top-4 left-4 w-8 h-8">
        <img src={process.env.PUBLIC_URL + logo} alt="logo" />
      </div>
      <div className="absolute flex top-4 left-16 h-8 w-auto items-center">
        <h1 className="font-nunito text-color-1 text-2xl font-bold">{name}</h1>
      </div>
      <div className="font-nunito text-color-2 absolute top-14 w-auto p-4">
        <p>{description}</p>
      </div>
      <div class="hover-zoom-large absolute bottom-4 right-4 w-8 h-8">
        {" "}
        <a href={link}>
          <BsLink45Deg size={32} color="#CECECE" />
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
