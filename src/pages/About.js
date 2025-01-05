import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import CyberLayout from '../components/CyberLayout';

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/about/slide1.jpg',
    '/about/slide2.jpg',
    '/about/slide3.jpg',
    '/about/slide4.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <CyberLayout>
      <div className="px-8 pt-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl mb-8 text-white font-bold text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            About TechSpark
          </motion.h1>

          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl mb-6 text-cyber-blue font-bold">What is Techspark</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              TechSpark is an intercollegiate festival organized by the Department of Computer Science at Mithibai College. 
              The events range from immensely challenging ones like quizzes on various topics, coder battles like Hackathons 
              and time-crunching Programming Challenges to ones that have more of an artistic appeal such as Poster Making, 
              Treasure Hunts, etc.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Image Slideshow Section with slower transitions */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,243,255,0.3)]">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentSlide === index ? 1 : 0,
                  scale: currentSlide === index ? 1 : 1.1
                }}
                transition={{ 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={image} 
                  alt={`TechSpark Moment ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
            
            {/* Slide Indicators with slower transitions */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-700 ${
                    currentSlide === index ? 'bg-cyber-blue scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid with slower animations */}
      <div className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Guest Lectures",
                description: "We invite eminent speakers as guest lecturers to broaden our horizons on modern technologies.",
                icon: "🎓"
              },
              {
                title: "Interactive Events",
                description: "Students participate and collaborate with great enthusiasm in various interactive sessions.",
                icon: "🤝"
              },
              {
                title: "Theme 2024",
                description: "This year's theme 'Across the Cyberverse' explores the mysteries and nuances of digital realms.",
                icon: "🌐"
              },
              {
                title: "Competition",
                description: "Participate in challenging competitions designed to test your technical and creative skills.",
                icon: "🏆"
              },
              {
                title: "Networking",
                description: "Connect with industry professionals and like-minded students from various colleges.",
                icon: "🔗"
              },
              {
                title: "Innovation",
                description: "Experience cutting-edge technology and innovative solutions in the IT industry.",
                icon: "💡"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-cyber-blue/30 
                  shadow-[0_0_15px_rgba(0,243,255,0.2)] 
                  hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] 
                  transition-all duration-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-cyber-blue">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Details with slower animations */}
      <div className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-cyber-blue">Event Details</h2>
            <div className="inline-flex flex-col md:flex-row gap-8 text-lg">
              <div className="bg-black/50 backdrop-blur-sm px-8 py-6 rounded-xl border border-cyber-blue/30 
                shadow-[0_0_15px_rgba(0,243,255,0.2)]
                transition-all duration-700"
              >
                <span className="font-bold text-cyber-blue">Dates:</span>
                <span className="text-gray-300 ml-2">9th - 10th February 2024</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm px-8 py-6 rounded-xl border border-cyber-blue/30 
                shadow-[0_0_15px_rgba(0,243,255,0.2)]
                transition-all duration-700"
              >
                <span className="font-bold text-cyber-blue">Venue:</span>
                <span className="text-gray-300 ml-2">Mithibai College Campus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </CyberLayout>
  );
}

export default About; 