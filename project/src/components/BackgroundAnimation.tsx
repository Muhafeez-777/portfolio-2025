import React from 'react';
import { Rocket } from 'lucide-react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Rockets */}
      <div className="absolute top-1/4 left-1/4 text-red-500 opacity-60 animate-float">
        <Rocket size={32} className="transform rotate-45" />
      </div>
      <div className="absolute top-1/2 right-1/4 text-red-500 opacity-40 animate-float-delayed">
        <Rocket size={24} className="transform rotate-12" />
      </div>
      <div className="absolute bottom-1/4 left-1/2 text-red-500 opacity-50 animate-float-slow">
        <Rocket size={28} className="transform -rotate-12" />
      </div>
      <div className="absolute top-3/4 right-1/2 text-red-500 opacity-30 animate-float">
        <Rocket size={20} className="transform rotate-90" />
      </div>

      {/* Wind Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="windPattern" patternUnits="userSpaceOnUse" width="20" height="20">
              <path
                d="M2,5 Q8,2 14,5 T26,5"
                stroke="#b5838d"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
                className="animate-wind"
              />
              <path
                d="M0,10 Q6,7 12,10 T24,10"
                stroke="#b5838d"
                strokeWidth="0.3"
                fill="none"
                opacity="0.2"
                className="animate-wind-delayed"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#windPattern)" />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundAnimation;