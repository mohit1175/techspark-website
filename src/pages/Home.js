import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CyberLayout from '../components/CyberLayout';

function Home() {
  return (
    <CyberLayout>
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute w-[200px] sm:w-[400px] md:w-[800px] h-[200px] sm:h-[400px] md:h-[800px] opacity-5 z-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <img src="/techspark-logo.png" alt="TechSpark Logo Background" className="w-full h-full" />
        </motion.div>

        {/* Floating Images - Hidden on small screens */}
        <motion.div
          className="hidden sm:block absolute top-20 -left-10 w-20 sm:w-40 h-20 sm:h-40"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img src="/floating-image1.png" alt="Tech Element 1" className="w-full h-full object-contain" />
        </motion.div>

        <motion.div
          className="hidden sm:block absolute bottom-40 right-20 w-16 sm:w-32 h-16 sm:h-32"
          animate={{
            y: [0, -30, 0],
            rotate: [0, -15, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <img src="/floating-image2.png" alt="Tech Element 2" className="w-full h-full object-contain" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="relative z-20 text-center px-4 sm:px-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 text-cyber-blue font-bold font-tech 
                       tracking-wider leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TECHSPARK'25
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-slate-400 max-w-2xl mx-auto 
                       leading-relaxed mb-4 sm:mb-8 font-tech tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ACROSS THE CYBERVERSE
          </motion.p>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            8th - 9th February 2025
          </motion.p>
          
          <Link to="/events">
            <motion.button
              className="w-full sm:w-auto mt-4 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg 
                        bg-black text-cyber-blue font-extrabold rounded-full 
                        hover:-translate-y-1 transition-transform duration-200 shadow-lg
                        border border-cyber-blue/30 hover:border-white
                        hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-20 px-4 sm:px-8 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12">
          {[
            {
              title: "Technical Events",
              description: "Hackathons, Coding Competitions, and Technical Workshops",
              icon: "🖥️"
            },
            {
              title: "Creative Events",
              description: "Poster Making, UI/UX Design, and Digital Art Competitions",
              icon: "🎨"
            },
            {
              title: "Gaming Events",
              description: "E-Sports Tournaments and Gaming Competitions",
              icon: "🎮"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 sm:p-8 rounded-xl bg-black/40 backdrop-blur-sm
                         border border-cyber-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)]
                         hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]
                         transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-cyber-blue">{feature.title}</h3>
              <p className="text-sm sm:text-base text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </CyberLayout>
  );
}

export default Home;