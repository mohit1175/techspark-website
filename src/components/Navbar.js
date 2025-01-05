import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <nav className="px-4 py-4 bg-black fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center gap-3 no-underline">
              <img 
                src="/techspark-logo.png" 
                alt="TechSpark Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-wide">TechSpark</span>
                <span className="text-sm text-cyber-blue tracking-widest -mt-1">2025</span>
              </div>
            </Link>
          </motion.div>

          <div className="flex items-center gap-10">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/team', label: 'Team' },
              { path: '/contact', label: 'Contact' },
              { path: '/events', label: 'Events' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white font-medium relative group no-underline 
                          hover:text-cyber-blue transition-colors duration-300
                          text-lg tracking-wide"
              >
                {link.label}
                <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 
                               bg-cyber-blue transition-all duration-300 
                               group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;