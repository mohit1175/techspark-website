import { motion } from 'framer-motion';

function CyberLayout({ children }) {
  return (
    <div className="min-h-screen relative bg-cyber-dark-blue overflow-hidden">
      {/* Circuit Pattern with slower animation */}
      <div className="absolute inset-0 bg-cyber-circuit opacity-20 bg-[size:10px_10px] transition-opacity duration-3000" />
      
      {/* Animated Gradient Border with slower pulse */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink opacity-20"
          style={{
            animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default CyberLayout; 