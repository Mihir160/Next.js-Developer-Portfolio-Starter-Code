import React from "react";

import { motion } from "framer-motion";

const Skills = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark
       text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skill = () => {
  return (
    <>
      <h2 className="font-bold text-6xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center rounded-full justify-center bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skills name="HTML" x="-25vw" y="2vw"></Skills>
        <Skills name="CSS" x="5vw" y="-10vw"></Skills>
        <Skills name="Javascript" x="23vw" y="6vw"></Skills>
        <Skills name="ReactJs" x="0vw" y="12vw"></Skills>
        <Skills name="React-Redux" x="-20vw" y="-15vw"></Skills>
        <Skills name="NextJs" x="15vw" y="-12vw"></Skills>
        <Skills name="Typescript" x="32vw" y="-5vw"></Skills>
        <Skills name="NodeJs" x="0vw" y="-20vw"></Skills>
        <Skills name="Mon" x="0vw" y="-20vw"></Skills>
        <Skills name="NodeJs" x="0vw" y="-20vw"></Skills>
        <Skills name="Mongodb" x="-25vw" y="10vw"></Skills>
        <Skills name="ExpressJs" x="20vw" y="-19vw"></Skills>
        <Skills name="Tailwind CSS" x="18vw" y="16vw"></Skills>
        <Skills name="Bootstrap" x="-12vw" y="2vw"></Skills>
        <Skills name="Material UI" x="-22vw" y="18vw"></Skills>
      </div>
    </>
  );
};

export default Skill;
