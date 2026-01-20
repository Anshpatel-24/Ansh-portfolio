import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar'; // <--- 1. Import this
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex justify-center items-center py-4 md:py-10 px-4">
        
        {/* Main Grid Layout */}
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-6">
          
          {/* Left Column: Sidebar */}
          <Sidebar />

          {/* Right Column: Main Content */}
          <div className="flex-1 bg-bgCard border border-borderDark rounded-3xl relative shadow-card min-h-[500px] mb-16 md:mb-0">
            
            {/* Desktop Navbar (Hidden on Mobile) */}
            <Navbar />

            {/* Scrollable Content Area */}
            {/* Added 'pb-24' to ensure content clears the mobile navbar */}
            <div className="p-6 md:p-10 scroll-smooth pb-24 md:pb-10"> 
               <Routes>
                 <Route path="/" element={<About />} />
                 <Route path="/resume" element={<Resume />} />
                 <Route path="/portfolio" element={<Portfolio />} />
                 <Route path="/contact" element={<Contact />} />
               </Routes>
            </div>

          </div>
        </div>

        {/* Mobile Navbar (Fixed at bottom, Visible only on Mobile) */}
        <MobileNavbar />

      </div>
    </Router>
  );
}

export default App;