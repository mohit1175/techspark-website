import { motion, AnimatePresence } from 'framer-motion';
import CyberLayout from '../components/CyberLayout';
import { useState } from 'react';

const events = [
  {
    date: "8",
    month: "FEB",
    year: "2025",
    title: "TechSpark Day 1",
    description: "Join us for exciting technical events, workshops, and competitions. Experience cutting-edge technology demonstrations and network with industry experts.",
    location: "Mithibai College, Mumbai",
    time: "9:00 AM - 6:00 PM",
    subEvents: [
      {
        title: "Techspark Hackathon",
        description: "Join us for a 48-hour hackathon where you can unleash your creativity and skills to build amazing projects across the cyberverse. Whether you are interested in hacking the web, the cloud, the blockchain, or anything in between, this is the event for you.",
        status: "REGISTRATION LIVE"
      },
      {
        title: "Logic Ladder (Code Relay)",
        description: "The Code Relay event is a collaborative coding activity where participants take turns writing sections of code to create a functioning program, similar to a relay race.",
        status: "REGISTRATION LIVE"
      },
      {
        title: "Syntax Sprint (Speed Coding)",
        description: "Speed coding challenge where participants solve coding problems within 45 minutes. Test your quick thinking and problem-solving skills under pressure.",
        status: "REGISTRATION LIVE"
      },
      {
        title: "PixelPlotter (Scratch)",
        description: "Discover the world of coding at PixelPlotter! Create interactive stories, games, and animations using Scratch.",
        status: "REGISTRATION LIVE"
      }
    ]
  },
  {
    date: "9",
    month: "FEB",
    year: "2025",
    title: "TechSpark Day 2",
    description: "The grand finale featuring gaming tournaments, cultural performances, and prize distribution ceremony. Don't miss the closing ceremony!",
    location: "Mithibai College, Mumbai",
    time: "9:00 AM - 8:00 PM",
    subEvents: [
      {
        title: "Warrior's Wrath Warfare (Mortal Kombat)",
        description: "Best-of-three matches with finals in best-of-five format. All characters available except custom variations.",
        status: "REGISTRATION LIVE"
      },
      {
        title: "Ultimate Goal Gala (FC24)",
        description: "FIFA tournament with 6-minute halves, live mode enabled for all teams. No duplicate teams allowed.",
        status: "REGISTRATION LIVE"
      },
      {
        title: "Cypher Clash Carnival (Valorant)",
        description: "Standard competitive mode settings. Team compositions locked after tournament begins.",
        status: "REGISTRATION LIVE"
      },
      {
        title: "Survivor's Showpiece (BGMI)",
        description: "Battle royale tournament with latest game version required. In-game voice chat permitted.",
        status: "CLOSED"
      }
    ]
  }
];

const eventRules = {
  "Survivor's Showpiece (BGMI)": {
    rules: [
      "Players must use their own mobile devices for competition.",
      "The use of any external devices like controllers, keyboards, or mouse is strictly prohibited.",
      "Players must be connected to the provided tournament WiFi network.",
      "Game version: All players must install the latest version of the game.",
      "Teams must land at a pre-designated location chosen by the tournament organisers.",
      "The use of in-game voice chat is allowed but external communication is prohibited during matches.",
      "Team killing is not allowed and may result in disqualification."
    ]
  }
};

function Events() {
  const [selectedRules, setSelectedRules] = useState(null);

  const RulesModal = ({ title, rules, onClose }) => (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-black/90 rounded-xl border border-cyber-blue/30 p-8 max-w-2xl w-full
                   shadow-[0_0_30px_rgba(0,243,255,0.2)]"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-cyber-blue">{title} Rules</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-cyber-blue transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-4">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="text-cyber-blue">•</span>
              <p className="text-slate-400">{rule}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="mt-8 px-6 py-3 bg-black text-cyber-blue font-bold rounded-lg
                     border border-cyber-blue/30 hover:border-white
                     hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]
                     transition-all duration-300 w-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClose}
        >
          CLOSE
        </motion.button>
      </motion.div>
    </motion.div>
  );

  const handleViewRules = (eventTitle) => {
    if (eventRules[eventTitle]) {
      setSelectedRules({
        title: eventTitle,
        rules: eventRules[eventTitle].rules
      });
    }
  };

  return (
    <CyberLayout>
      <div className="min-h-screen px-3 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl text-center mb-8 sm:mb-12 font-bold text-slate-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            UPCOMING EVENTS
          </motion.h1>

          <div className="space-y-8 sm:space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-8 
                           border border-cyber-blue/30 
                           shadow-[0_0_15px_rgba(0,243,255,0.2)]
                           hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]
                           transition-all duration-700
                           group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Main Event Info */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-8 items-center mb-6 sm:mb-8">
                  {/* Date Section */}
                  <div className="text-center p-4 sm:p-6 rounded-lg 
                                bg-gradient-to-br from-black to-cyber-blue/20
                                border border-cyber-blue/30 group-hover:border-white/30
                                transition-all duration-500
                                max-w-[200px] mx-auto md:max-w-none">
                    <h3 className="text-3xl sm:text-4xl font-bold text-cyber-blue mb-1 sm:mb-2">{event.date}</h3>
                    <p className="text-lg sm:text-xl text-slate-400">{event.month}</p>
                    <p className="text-base sm:text-lg text-slate-500">{event.year}</p>
                  </div>

                  {/* Event Details */}
                  <div className="md:col-span-4 space-y-3 sm:space-y-4 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-cyber-blue group-hover:text-white
                                 transition-colors duration-700">
                      {event.title}
                    </h2>
                    <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="text-cyber-blue">📍</span>
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyber-blue">⏰</span>
                        {event.time}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub Events */}
                <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {event.subEvents.map((subEvent, subIndex) => (
                    <motion.div
                      key={subIndex}
                      className="p-4 sm:p-6 bg-black/60 rounded-lg border border-cyber-blue/20
                               hover:border-cyber-blue/40 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: subIndex * 0.1 }}
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-cyber-blue">
                          {subEvent.title}
                        </h3>
                        <span className={`px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap
                                       ${subEvent.status === "REGISTRATION LIVE" 
                                         ? "bg-cyber-blue/20 text-cyber-blue animate-pulse" 
                                         : "bg-cyber-blue/10 text-cyber-blue"}`}>
                          {subEvent.status}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4">
                        {subEvent.description}
                      </p>
                      <motion.button
                        className="w-full sm:w-auto px-4 py-2 text-sm bg-black text-cyber-blue font-bold rounded-lg
                                 border border-cyber-blue/30 hover:border-white
                                 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]
                                 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleViewRules(subEvent.title)}
                      >
                        View Rules
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedRules && (
          <RulesModal
            title={selectedRules.title}
            rules={selectedRules.rules}
            onClose={() => setSelectedRules(null)}
          />
        )}
      </AnimatePresence>
    </CyberLayout>
  );
}

export default Events; 