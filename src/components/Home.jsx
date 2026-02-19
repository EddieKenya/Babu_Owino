import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom'; // Import for navigation

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white select-none"> {/* select-none prevents text highlighting */}
      
      {/* HERO SECTION */}
      <section className="relative bg-white md:bg-[#334155] text-[#334155] md:text-white min-h-screen flex flex-col overflow-hidden">
        
        {/* Fixed: Passing darkText based on screen size logic or forced for mobile */}
        {/* On mobile bg is white, so we need darkText={true} for the icon to be visible */}
        <div className="md:hidden">
            <Header darkText={true} />
        </div>
        <div className="hidden md:block">
            <Header darkText={false} />
        </div>

        {/* Content Area */}
        <div className="relative flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-24 z-20">
          
          {/* Left Side: Campaign Text */}
          <div className="w-full md:w-[45%] flex flex-col justify-center py-10 md:py-0 text-center md:text-left z-30">
            <p className="text-[10px] md:text-[11px] font-bold tracking-[0.5em] text-blue-600 md:text-blue-300 uppercase mb-4">
              Official Campaign 2027
            </p>
            <h1 className="text-6xl md:text-[11rem] font-serif font-light leading-[0.9] md:leading-[0.8] mb-6 md:mb-10 tracking-tighter">
              BABU <br /> 
              <span className="font-bold">OWINO</span>
            </h1>
            <p className="text-xl md:text-2xl tracking-[0.2em] text-slate-600 md:text-slate-300 font-medium mb-8 md:mb-12">
              GOVERNOR OF NAIROBI
            </p>
            
            {/* Fixed: Button now leads to About.jsx */}
            <button 
              onClick={() => navigate('/about')}
              className="mx-auto md:mx-0 w-fit bg-[#334155] md:bg-white text-white md:text-[#334155] px-12 md:px-14 py-4 md:py-5 text-[10px] md:text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-2xl"
            >
              About the Candidate
            </button>
          </div>

          {/* Right Side: Image with No-Copy Protection */}
          <div className="w-full md:w-[55%] flex items-end md:items-center justify-center md:justify-end relative h-[65vh] md:h-full mt-auto">
            <img 
              src="/babu.png" 
              alt="Hon. Babu Owino" 
              onContextMenu={(e) => e.preventDefault()} // Disables right-click save
              draggable="false" // Prevents dragging image
              className="w-auto h-full md:h-[120vh] object-contain object-bottom md:object-right scale-[1.35] md:scale-150 md:-translate-y-12 md:-mr-20 z-10 pointer-events-none" 
            />
          </div>
        </div>

        <div className="hidden md:block absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-0" />
      </section>

      {/* VISION SECTION */}
      <section id="about" className="bg-white px-6 md:px-24 py-20 md:py-32 flex flex-col items-center">
         <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 md:mb-8">
              A Visionary Future
            </h2>
            <p className="text-lg md:text-2xl text-slate-600 leading-relaxed italic font-light">
              "Building a city that works for everyone, fueled by youth energy and transparent leadership."
            </p>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;