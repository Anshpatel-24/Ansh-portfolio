import React, { useState } from 'react';
import { IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline, IoChevronDown, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

//   [cite_start]// Resume Data [cite: 1, 2, 3, 5]
  const contactInfo = [
    {
      icon: <IoMailOutline />,
      title: "Email",
      value: "anshpatel240324@gmail.com",
      link: "mailto:anshpatel240324@gmail.com"
    },
    {
      icon: <IoPhonePortraitOutline />,
      title: "Phone",
      value: "+91 9484410310",
      link: "tel:+919484410310"
    },
    {
      icon: <IoLocationOutline />,
      title: "Location",
      value: "Surat, Gujarat, India",
      link: "https://maps.app.goo.gl/SQAN2LBRbUGQpCPu6"
    }
  ];

  return (
    <aside className={`bg-bgCard border border-borderDark rounded-3xl p-6 shadow-card transition-all duration-300 z-20 
      ${isActive ? "h-auto" : "h-[120px] overflow-hidden"} 
      lg:h-fit lg:sticky lg:top-10 lg:w-[280px] mb-8 lg:mb-0`}
    >
      <div className="flex gap-4 relative lg:justify-self-center justify-self-auto">
        {/* Profile Image */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 min-w-20 rounded-full lg:rounded-3xl lg:size-36 size-20 overflow-hidden flex justify-center items-center shadow-lg">
          <img src="images/profile.jpg" alt="Ansh Patel" className="w-full h-full object-cover" />
        </div>

        <div className="lg:hidden">
            <h1 className="text-white text-xl font-bold">Ansh Patel</h1>
            <p className="inline-block bg-[#2b2b2c] text-white text-xs px-3 py-1 rounded-lg mt-2 mr-10">B.E. Final Year Computer Eng. Student</p>
        </div>

        {/* Mobile Toggle Button */}
        <button 
            className="absolute top-0 right-0 text-accent bg-gradient-to-br from-[#2b2b2c] to-[#252526] border border-borderDark p-2 rounded-xl shadow-lg lg:hidden"
            onClick={() => setIsActive(!isActive)}
        >
            <IoChevronDown className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className={`mt-8 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
        <div className="text-center hidden lg:block">
            <h1 className="text-textLight text-2xl font-bold tracking-wide">Ansh Patel</h1>
            <p className="inline-block bg-[#2b2b2c] text-textLight text-xs px-4 py-1.5 rounded-lg mt-4 font-medium">B.E. Final Year Computer Eng. Student</p>
        </div>

        <div className="w-full h-[1px] bg-borderDark my-8"></div>

        <ul className="grid gap-6">
          {contactInfo.map((item, index) => (
            <li key={index} className="flex gap-4 items-center">
              <div className="text-accent text-lg bg-gradient-to-br from-[#2b2b2c] to-[#252526] border border-borderDark p-3 rounded-xl shadow-sm hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-medium mb-1">{item.title}</p>
                {item.link ? (
                    <a href={item.link} className="text-textLight text-sm font-medium hover:text-accent truncate block lg:max-w-[150px] max-w-[210px]" title={item.value}>{item.value}</a>
                ) : (
                    <time className="text-textLight text-sm font-medium">{item.value}</time>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="w-full h-[1px] bg-borderDark mt-8 mb-5"></div>

        <div className="flex justify-center gap-4">
            <a href="https://github.com/Anshpatel-24" target="_blank" className="text-gray-400 hover:text-white text-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125 hover:shadow-white shadow-md rounded-full hover:animate-bounce"><IoLogoGithub /></a>

            <a href="https://linkedin.com/in/ansh-patel-559306301" target="_blank" className="text-gray-400 hover:text-blue-500 text-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125 hover:shadow-blue-300 shadow-lg rounded-sm hover:animate-bounce"><IoLogoLinkedin /></a>

            <a href="https://www.instagram.com/anshpatel2403" target="_blank" className="text-gray-400 hover:text-pink-600 text-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125 hover:shadow-pink-400 shadow-inner rounded-md hover:animate-bounce"><IoLogoInstagram /></a>
            

            <a href="https://www.facebook.com/share/17hWmBTeSr" target="_blank" className="text-gray-400 hover:text-sky-300 text-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125 hover:shadow-sky-500 shadow-md rounded-full hover:animate-bounce"><IoLogoFacebook /></a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
