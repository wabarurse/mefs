import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { BiDownArrow } from "react-icons/bi";


function Experiences() {
  return (
    <div className="bg-color">
      <NavigationBar />
      <div className="page-fade-in flex justify-center items-center h-screen">
        <h1 className="font-crazy text-9xl font-bold text-color-1">Experiences</h1>
        <BiDownArrow size={48} className="absolute bottom-8 animate-bounce text-color-1" />
      </div>
      <div className="max-w-5xl mx-auto px-4 py-48">
      <Experience
          direction={0}
          logo="/images/experiences/orbital.png"
          title="Software Developer"
          company="@ UW Orbital"
          description={[
            "Optimized API endpoints to create and delete system commands, ensuring efficient database transactions and proper error handling.",
            "Designed an asynchronous logging middleware to capture and log request-response cycles, improving system observability and debugging efficiency."
          ].join('\n')}
          date="October 2024 - Present"
          link="https://www.uworbital.com/"
        />
      <Experience
          direction={1}
          logo="/images/experiences/caci.png"
          title="Automation Testing Analyst Assistant"
          company="@ CACI"
          description={[
            "Assisted senior analysts in developing future testing strategies and practices in Micro Focus ALM.",
            "Executed UFT automation and manual test scripts alongside SMEs to assess program quality, performance, capacity, and release readiness."
          ].join('\n')}
          date="July 2024 - August 2024"
          link="https://www.caci.com/"
        />
        
        <Experience
          direction={0}
          logo="/images/experiences/checkmate.png"
          title="Hardware and Software Developer"
          company="@ Checkmate Robotics"
          description={[
            "Collaborated on a movement library written in C++ under the Purdue Robotics Operating System (PROS), implementing PID feedback loops to ensure precise direction and speed for consistent autonomous routes.",
            "Qualified for the VEX World Championships for 4 consecutive years"
          ].join('\n')}
          date="June 2019 - May 2024"
          link="https://www.youtube.com/@16868"
        />
        <Experience
          direction={1}
          logo="/images/experiences/uhn.png"
          title="Summer Student"
          company="@ Princess Margaret Cancer Center"
          description={[
            "Operated the Laser Capture Micro-dissection (LCM) to remove tumor cells from heterogeneous H&E stained biopsy samples, obtaining over 100 tumor samples for both research and diagnosis.",
            "Observed the application of various biomedical systems in extracting complex medical data for clinical diagnosis and cancer treatment."
          ].join('\n')}
          date="August 2022, 2023"
          link="https://www.uhn.ca/OurHospitals/PrincessMargaret"
        />
      </div>
      <Footer />
    </div>
  );
}

const Experience = ({
  direction,
  logo,
  title,
  company,
  description,
  date,
  link,
}) => (
  <div className="scroll-fade relative flex gap-4 h-[400px]">
    <div className="experience-vertical-line"></div>
    <div className="hover-zoom experience-logo">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={process.env.PUBLIC_URL + logo} alt="company logo" className="h-auto w-[60px]" />
      </a>
    </div>
    <div className="w-full">
      <div className="scale-100">
        <div
          className={`experience-card ${direction === 0 ? "left-4" : "right-4"
            }`}
        >
          <h2 className="font-nunito text-color-1 text-2xl font-bold">{title}</h2>
          <h3 className="font-nunito text-color-1 text-xl font-bold py-2">{company}</h3>
          <hr className="w-full border-t-2 text-color-1 my-2"></hr>
          <ul className="list-disc pl-4">
            {description.split('\n').map((item, index) => (
              <li key={index} className="text-color-2">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div
      className={`experience-date ${direction === 0
        ? "left-1/2 translate-x-16"
        : "right-1/2 -translate-x-16 "
        }`}
    >
      <h3 className="font-nunito text-color-1 text-xl font-bold">{date}</h3>
    </div>
  </div>
);

export default Experiences;
