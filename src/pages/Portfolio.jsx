import React from 'react';
import { motion } from 'framer-motion';
import { IoEyeOutline } from "react-icons/io5";

const projects = [
  {
    title: "EcoClassify Vision",
    category: "AI / ML",
    img: "images/Eco_Classify_Vision_1.png", 
    link: "https://eco-classify-vision-ivory.vercel.app/"
  },
  {
    title: "Bollywood Game",
    category: "Web Development",
    img: "images/bollywood_game.png",
    link: "https://anshpatel-24.github.io/Bollywood_Game"
  },
  {
    title: "Tic Tac Toe AI",
    category: "Web Development",
    img: "images/tic-tac-toe.png",
    link: "https://anshpatel-24.github.io/Tic-Tac-Toe"
  },
  {
    title: "Street Bites Hub",
    category: "React Application",
    img: "images/Street_Bites_Hub.jpeg",
    link: null
  }
];

const Portfolio = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
      className="pt-4"
    >
      <header className="mb-8">
        <h2 className="text-3xl text-textLight font-bold relative pb-4 group">Portfolio
          <span className="absolute left-0 bottom-0 h-1.5 bg-accent rounded-md w-12 transition-all duration-300 ease-in-out group-hover:w-32" />
        </h2>
      </header>

      {/* Filter Buttons (Visual Only for now) */}
      <ul className="flex flex-wrap gap-6 mb-8 text-textGray text-sm font-medium">
        <li className="text-accent cursor-pointer">All</li>
        <li className="hover:text-accent cursor-pointer transition-colors">Web Design</li>
        <li className="hover:text-accent cursor-pointer transition-colors">Applications</li>
        <li className="hover:text-accent cursor-pointer transition-colors">Web Development</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="group">
            <div className="relative rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/40 z-10 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-[#2b2b2c] p-3 rounded-xl text-accent text-2xl scale-0 group-hover:scale-100 transition-transform duration-300">
                    <IoEyeOutline />
                </div>
              </div>
              <div className="bg-cover bg-center" style={{ backgroundImage: `url('${item.img}')` }}>
                <div className='w-full backdrop-blur-xl'>
                  <img src={item.img}  alt={item.title} className="w-max justify-self-center h-48 object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>
            <div className="mt-4 px-2">
                <h4 className="text-textLight font-bold text-base">{item.title}</h4>
                <span className="text-gray-400 text-sm">{item.category}</span>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;