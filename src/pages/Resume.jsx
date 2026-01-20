import React from 'react';
import { motion } from 'framer-motion';
import { IoBookOutline, IoBriefcaseOutline } from "react-icons/io5";

const TimelineItem = ({ title, subtitle, date, desc }) => (
  <li className="relative ml-12 mb-10 timeline-item">
    <div className="absolute -left-[46px] top-1 bg-[#2b2b2c] border border-borderDark p-2 rounded-full text-accent shadow-sm z-10">
      <div className="w-2 h-2 rounded-full bg-accent"></div>
    </div>
    <h4 className="text-textLight text-base font-bold mb-1">{title}</h4>
    <span className="text-accent text-sm font-medium mb-2 block">{date}</span>
    <p className="text-textGray text-sm mb-2">{subtitle}</p>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </li>
);

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
      className="pt-4"
    >
      <header className="mb-10">
        <h2 className="text-3xl text-textLight font-bold relative pb-4 group">Resume
          <span className="absolute left-0 bottom-0 h-1.5 bg-accent rounded-md w-12 transition-all duration-300 ease-in-out group-hover:w-32" />
        </h2>
      </header>

      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#2b2b2c] p-3 rounded-xl text-accent text-xl border border-borderDark shadow-sm">
                <IoBookOutline />
            </div>
            <h3 className="text-2xl text-textLight font-bold">Education</h3>
        </div>
        <ul>
            <TimelineItem 
                title="B.E. Computer Engineering"
                subtitle="C.K. Pithawala College of Engineering & Tech (GTU)"
                date="2022 — Present"
                desc="Currently pursuing with a CGPA of 7.72."
            />
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-4 mb-6">
             <div className="bg-[#2b2b2c] p-3 rounded-xl text-accent text-xl border border-borderDark shadow-sm">
                <IoBriefcaseOutline />
            </div>
            <h3 className="text-2xl text-textLight font-bold">Experience</h3>
        </div>
        <ul>
            <TimelineItem 
                title="AI & Green Skills Intern"
                subtitle="Edunet Foundation (GTU-Shell Skills4Future)"
                date="July 2025"
                desc="Focused on Green Skills, AI concepts, and sustainability practices."
            />
            <TimelineItem 
                title="AI/ML Intern"
                subtitle="Spark to Ideas"
                date="Feb 2025 - Mar 2025"
                desc="Gained hands-on experience with AI/ML fundamentals, Python data pre-processing, and model building."
            />
        </ul>
      </div>

       {/* Skills Section */}
       <div className="mt-12">
        <h3 className="text-2xl text-textLight font-bold mb-6">My Skills</h3>
        <div className="bg-bgCard border border-borderDark p-6 rounded-2xl">
            <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'Python', 'Machine Learning', 'Java', 'MongoDB', 'Tailwind'].map(skill => (
                    <span key={skill} className="bg-[#2b2b2c] text-gray-300 text-sm px-4 py-2 rounded-lg border border-borderDark hover:text-accent hover:border-accent transition-colors cursor-default">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;