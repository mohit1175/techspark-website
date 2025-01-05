import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CyberLayout from '../components/CyberLayout';

function Home() {
  return (
    <CyberLayout>
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col justify-center items-center px-8">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute w-[800px] h-[800px] opacity-5 z-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <img src="/techspark-logo.png" alt="TechSpark Logo Background" className="w-full h-full" />
        </motion.div>

        {/* Floating Images */}
        <motion.div
          className="absolute top-20 -left-10 w-40 h-40"
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
          className="absolute bottom-40 right-20 w-32 h-32"
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
          className="relative z-20 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-7xl mb-6 text-white font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TechSpark 2024
          </motion.h1>
          
          <motion.p
            className="text-2xl md:text-3xl text-white max-w-2xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Across the Cyberverse
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            8th - 9th February 2025
          </motion.p>
          
          <Link to="/events">
            <motion.button
              className="mt-8 px-10 py-4 text-lg bg-black text-cyber-blue font-extrabold  rounded-full 
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
      <div className="py-20 px-8 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
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
              className="text-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </CyberLayout>
  );
}

export default Home;