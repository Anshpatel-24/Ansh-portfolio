import React from 'react';
import { motion } from 'framer-motion';
import { IoPaperPlaneOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
      className="pt-4"
    >
      <header className="mb-8">
        <h2 className="text-3xl text-textLight font-bold relative pb-4 group">Contact
          <span className="absolute left-0 bottom-0 h-1.5 bg-accent rounded-md w-12 transition-all duration-300 ease-in-out group-hover:w-32" />
        </h2>
      </header>

      {/* Map Section */}
      <div className="rounded-2xl overflow-hidden mb-10 h-[300px] border border-borderDark brightness-75 contrast-125">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.43296718295!2d72.80083360997335!3d21.135161084036053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053d0451db751%3A0x219ca519e21a4ea4!2sMarvella%20Residency!5e0!3m2!1sen!2sin!4v1767964860191!5m2!1sen!2sin" 
          width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy">
        </iframe>
      </div>

      {/* <div className="rounded-2xl overflow-hidden mb-10 h-[300px] border border-borderDark grayscale invert brightness-75 contrast-125">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709425553!2d72.74109895066367!3d21.15934029868731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709876543210!5m2!1sen!2sin" 
          width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy">
        </iframe>
      </div> */}

      <h3 className="text-2xl text-textLight font-bold mb-6">Contact Form</h3>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full name" className="bg-transparent border border-borderDark rounded-xl px-4 py-3 text-textGray text-sm focus:border-accent focus:outline-none placeholder:text-gray-500" />
            <input type="email" placeholder="Email address" className="bg-transparent border border-borderDark rounded-xl px-4 py-3 text-textGray text-sm focus:border-accent focus:outline-none placeholder:text-gray-500" />
        </div>
        <textarea placeholder="Your Message" rows="5" className="w-full bg-transparent border border-borderDark rounded-xl px-4 py-3 text-textGray text-sm focus:border-accent focus:outline-none placeholder:text-gray-500"></textarea>
        
        <div className="flex justify-end">
            <button type='submit' className="flex items-center gap-2 bg-[#2b2b2c] border border-borderDark text-accent px-6 py-3 rounded-xl hover:text-textLight hover:bg-borderDark transition-all text-sm font-medium shadow-sm">
                <IoPaperPlaneOutline /> Send Message
            </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;