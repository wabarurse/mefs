import React from 'react'
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import { BiDownArrow } from "react-icons/bi";

function About() {
  return (
    <div className="bg-color">
      <NavigationBar />
      <div className="page-fade-in flex justify-center items-center h-screen">
        <h1 className="font-crazy text-9xl font-bold text-color-1">
          About Me
        </h1>
        <BiDownArrow size={48} className="absolute bottom-8 animate-bounce text-color-1" />
      </div>
      <div className="scroll-fade bg-color flex justify-center mx-auto px-4 py-24">
        <div className="profile-picture">
          <img src={process.env.PUBLIC_URL + "/images/me.jpeg"} alt="profile" className="w-full h-full rounded-full" />
        </div>
        <div className="flex flex-col space-y-4 max-w-screen-lg">
          <h1 className="text-6xl font-nunito font-bold text-color-1 px-16">Hi 👋, I'm Richard</h1>
          <p className="text-2xl font-nunito text-color-2 px-16">
            I'm a software engineering student passionate about creating cool software solutions to 
            solve real world problems. I am also interested in healthcare software and artificial 
            intelligence. In my free time, I enjoy playing badminton, video games, chill coding 
            and digging for new music.
          </p>
        </div>
      </div>

      <div className="scroll-fade flex flex-col space-y-2 mx-auto py-16 max-w-screen-xl">

        <h1 className="text-6xl font-nunito font-bold text-color-1">🎓 Education</h1>
        <h2 className="text-4xl font-nunito font-bold text-color-1">University of Waterloo - Software Engineering (2024 - 2029)</h2>
        <p className="text-color-2 font-nunito">Waterloo, ON, Canada</p>
        <p className="text-color-2 font-nunito py-2">
          Software Engineering is an interdisciplinary program supported by both the Faculty
          of Mathematics and the Faculty of Engineering applying both computer science and 
          engineering principals and practices to the creation, operation, and maintenance 
          of software systems. The tight knit cohort systems in the software engineering 
          program creates a great sense of community fostering strong and meaningful 
          relationships with your classmates.
        </p>


        <div className="flex space-x-8 col-start-3 items-center justify-center py-4">

          <EducationImage image="/images/education/uw.png" link="https://uwaterloo.ca/" />
          <EducationImage image="/images/education/uw_se.png" link="https://uwaterloo.ca/software-engineering/" />
          <EducationImage image="/images/education/uw_eng.png" link="https://uwaterloo.ca/engineering/" />
          <EducationImage image="/images/education/uw_math.png" link="https://uwaterloo.ca/math/" />
          <EducationImage image="/images/education/uw_orbital.png" link="https://www.uworbital.com/" />
          <EducationImage image="/images/education/uw_bc.png" link="https://badmintonclub.uwaterloo.ca/" />

        </div>
      </div>


      <div className="scroll-fade mx-auto max-w-screen-xl py-16">
        <h1 className="text-6xl font-nunito font-bold text-color-1 py-4">🛠️ Technical Skills</h1>

        <div className="flex flex-col items-center space-y-4 ">
          <div className="grid grid-cols-6 gap-y-16 container py-12 place-items-center">

            <Skill name="c++" image="/images/skills/c++.png" />
            <Skill name="c" image="/images/skills/c.png" />
            <Skill name="python" image="/images/skills/python.png" />
            <Skill name="javascript" image="/images/skills/js.png" />
            <Skill name="typescript" image="/images/skills/ts.png" />
            <Skill name="html" image="/images/skills/html.png" />
            <Skill name="css" image="/images/skills/css.png" />
            <Skill name="tailwind" image="/images/skills/tailwind.png" />
            <Skill name="react" image="/images/skills/react.png" />
            <Skill name="node" image="/images/skills/node.png" />
            <Skill name="express" image="/images/skills/express.png" />
            <Skill name="mongoDB" image="/images/skills/mongo.png" />
            <Skill name="postgreSQL" image="/images/skills/postgres.png" />
            <Skill name="swift" image="/images/skills/swift.png" />
            <Skill name="swiftUI" image="/images/skills/swiftui.png" />
            <Skill name="git" image="/images/skills/git.png" />
            <Skill name="github" image="/images/skills/github.png" />


          </div>
        </div>

      </div>



      <div className="scroll-fade flex flex-col space-y-4 mx-auto py-16 max-w-screen-xl">
        <h1 className="text-6xl font-nunito font-bold text-color-1">🎵 Current Favorite Songs</h1>

        <Song songCode="5MSshyHGM9ajWSEoBcR0jv" />
        <Song songCode="4qS2KPWvsQzLvRa9oCHw41" />
        <Song songCode="2aL4lMGhWdPpyPL6COPou7" />

      </div>

      <div className="flex justify-center mx-auto px-4 py-8"> </div>
      <Footer />
    </div>
  )
}



const Skill = ({ name, image }) => (
  <div className="flex flex-col h-16 w-16 items-center justify-center space-y-1">
    <img
      src={process.env.PUBLIC_URL + image}
      alt="Item 1"
      className="w-full h-full object-contain"
    />
    <h3 className="text-md items-center font-nunito font-bold text-color-2">{name}</h3>
  </div>
)

const EducationImage = ({ image, link }) => (
  <div className="hover-zoom h-16">
    <a href={link}>
      <img
        src={process.env.PUBLIC_URL + image}
        alt="Item 1"
        className="w-full h-full object-cover"
      />
    </a>
  </div>
)

const Song = ({ songCode }) => (
  <iframe
    className="rounded-xl px-16"
    src={`https://open.spotify.com/embed/track/${songCode}?utm_source=generator&theme=0`}
    width="100%"
    height="152"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    title="Spotify music player"
  >
  </iframe>

)

export default About