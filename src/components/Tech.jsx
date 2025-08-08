import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Clean professional tech card with subtle animations
  const ProfessionalTechCard = ({ technology, index }) => (
    <div 
      className="group relative cursor-pointer"
      style={{
        animation: `fadeInUp 0.4s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Main Card - Dark theme matching */}
      <div className="relative bg-[#1a1a2e]/80 backdrop-blur-sm border border-[#16213e]/50
                     rounded-xl p-5 h-24 w-24 sm:h-28 sm:w-28
                     transition-all duration-300 ease-out
                     hover:border-[#0f3460]/80 hover:bg-[#16213e]/90
                     hover:transform hover:scale-105 hover:-translate-y-1
                     hover:shadow-lg hover:shadow-[#0f3460]/20"
           style={{
             animation: `float 4s ease-in-out ${index * 0.5}s infinite alternate`
           }}>
        
        {/* Subtle inner glow on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br 
                       from-[#0f3460]/0 via-[#0f3460]/10 to-[#0f3460]/0 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Technology Icon */}
        <div className="flex flex-col items-center justify-center h-full relative z-10">
          <div className="relative mb-1"
               style={{animation: `iconSway 3s ease-in-out ${index * 0.3}s infinite alternate`}}>
            <img 
              src={technology.icon} 
              alt={technology.name}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain
                         transition-all duration-300 ease-out
                         group-hover:scale-110 filter brightness-90 group-hover:brightness-110"
            />
            
            {/* Subtle icon glow on hover */}
            <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#0f3460]/20 rounded-lg blur-sm
                           scale-0 group-hover:scale-110 transition-transform duration-300" />
          </div>
          
          {/* Technology Name */}
          <span className="text-[10px] sm:text-xs text-gray-400 group-hover:text-white 
                           font-medium text-center leading-tight
                           transition-all duration-300 group-hover:font-semibold">
            {technology.name.split(' ')[0]}
          </span>
        </div>

        {/* Simple corner indicator */}
        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#0f3460] rounded-full
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Clean tooltip */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2
                     bg-[#1a1a2e] text-white text-xs px-3 py-1.5 
                     rounded-lg border border-[#16213e] shadow-lg
                     opacity-0 group-hover:opacity-100 
                     transition-all duration-300 group-hover:-translate-y-1
                     pointer-events-none whitespace-nowrap z-20">
        {technology.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2
                       border-l-4 border-r-4 border-t-4 border-transparent
                       border-t-[#1a1a2e] w-0 h-0" />
      </div>
    </div>
  );

  return (
    <>
      {/* Enhanced CSS Styles with Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        
        @keyframes iconSway {
          0%, 100% {
            transform: translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateX(2px) rotate(1deg);
          }
        }
        
        .tech-grid {
          animation: containerFade 0.6s ease-out 0.3s both;
        }
        
        @keyframes containerFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Tech Stack Grid with 3 columns on mobile and proper spacing */}
      <div className={`tech-grid ${isMobile ? 
        'grid grid-cols-3 gap-8 justify-items-center max-w-xs mx-auto px-4' : 
        'flex flex-row flex-wrap justify-center gap-10'
      }`}>
        {technologies.map((technology, index) => (
          <div key={technology.name}>
            {isMobile ? (
              <ProfessionalTechCard technology={technology} index={index} />
            ) : (
              <div className='w-28 h-28'>
                <BallCanvas icon={technology.icon} />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");