import React from 'react';
import { motion } from 'framer-motion';
import { IoCodeSlashOutline, IoServerOutline, IoStatsChartOutline, IoTerminalOutline } from "react-icons/io5";

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-gradient-to-br from-[#242424] to-[#1d1d1d] p-6 rounded-2xl border border-borderDark shadow-sm relative z-1 flex gap-4 items-start hover:bg-[#282828] transition-colors">
    <div className="text-accent text-4xl">{icon}</div>
    <div>
      <h4 className="text-textLight text-lg font-bold mb-2">{title}</h4>
      <p className="text-textGray text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
      className="pt-4"
    >
      <header className="mb-8">
        <h2 className="text-3xl text-textLight font-bold relative pb-4 group">
          About Me
          <span className="absolute left-0 bottom-0 h-1.5 bg-accent rounded-md w-12 transition-all duration-300 ease-in-out group-hover:w-36" />
        </h2>

      </header>

      <section className="text-textGray leading-7 mb-10 space-y-4">
        <p>
          I am a Final Year <strong>Computer Engineering student</strong> at C.K. Pithawala College of Engineering (GTU) with a CGPA of 7.72. 
          I have a passion for <strong>Data Science</strong> and <strong>Web Development</strong>, bridging the gap between complex algorithms and beautiful interfaces.
        </p>
        <p>
          My experience includes internships as an AI/ML Intern at Spark to Ideas and an AI & Green Skills Intern at Edunet Foundation.
          I enjoy building things that live on the internet, from clones of popular apps to AI-powered utility tools.
        </p>
      </section>

      <h3 className="text-2xl text-textLight font-bold mb-6">What I'm Doing</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServiceCard 
            icon={<IoCodeSlashOutline />}
            title="Web Development"
            desc="Building responsive sites using React, Tailwind, and the MERN Stack. High-quality development at a professional level."
        />
        <ServiceCard 
            icon={<IoStatsChartOutline />}
            title="Data Science"
            desc="Analyzing data and building ML models using Python, TensorFlow, and Pandas."
        />
        {/* <ServiceCard 
            icon={<IoServerOutline />}
            title="Backend Dev"
            desc="Creating robust APIs and server-side logic using Node.js, Express, and MongoDB."
        />
         <ServiceCard 
            icon={<IoTerminalOutline />}
            title="App Development"
            desc="Building functional Android applications using Java and Android Studio."
        /> */}
      </div>
    </motion.div>
  );
};

export default About;