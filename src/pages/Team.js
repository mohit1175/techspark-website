import { motion } from 'framer-motion';
import CyberLayout from '../components/CyberLayout';

function Team() {
  const teamMembers = {
    inCharge: [
      { name: "Omkar Mohite", role: "Teacher In-Charge", image: "omkar.png" }
    ],
    chairpersons: [
      { name: "Gaurav Mehra", role: "Chairperson (TY)", image: "gaurav1.JPG" }
    ],
    deputyChairperson: [
      { name: "Himanshu Sharma", role: "Deputy Chairperson (SY)", image: "himanshu.jpg" }
    ],
    viceChairpersons: [
      { name: "Keyur Rathod", role: "Vice Chairperson (TY)", image: "keyur.jpg" },
      { name: "Meet Dhruv", role: "Vice Chairperson (TY)", image: "meet.jpg" },
      { name: "Abhishek Yadav", role: "Vice Chairperson (SY)", image: "abhishek.jpg" },
      { name: "Swayam Parekh", role: "Vice Chairperson (FY)", image: "swayam.jpg" }
    ],
    departments: {
      events: [
        { name: "Tisha Karkar", role: "Events Head (SY)", image: "tisha.jpg" },
        { name: "Riya Bishwakarma", role: "Events Head (FY)", image: "riya.jpg" }
      ],
      gaming: [
        { name: "Mohit Deore", role: "Gaming & Sports Head (SY)", image: "mohit.jpg" },
        { name: "Hussain Suleman", role: "Gaming & Sports Head (FY)", image: "hussain.jpg" }
      ],
      pr: [
        { name: "Ashika Ashok", role: "Public Relations Head (TY)", image: "ashika.jpg" }
      ],
      logistics: [
        { name: "Sejal Kotak", role: "Logistics Head (MSc Part-I)", image: "sejal.jpg" }
      ],
      security: [
        { name: "Aditya Vishwakarma", role: "Security Head (SY)", image: "aditya.jpg" }
      ],
      technical: [
        { name: "Siddh Vyas", role: "Technical Head (MSc Part-I)", image: "siddh.jpg" }
      ],
      productions: [
        { name: "Ashwini Vishwakarma", role: "Productions Head (SY)", image: "ashwini.jpg" }
      ],
      graphics: [
        { name: "Lavya Triwadi", role: "Graphics Head (FY)", image: "lavya.jpg" }
      ],
      creatives: [
        { name: "Simran Gupta", role: "Creatives Head (TY)", image: "simran.jpg" }
      ],
      content: [
        { name: "Anshika Pangotra", role: "Content Head (SY)", image: "anshika.jpg" }
      ]
    }
  };

  return (
    <CyberLayout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 text-slate-400">
        <div className="container mx-auto max-w-7xl flex flex-col items-center">
          {/* Teacher In-Charge Section */}
          <div className="w-full flex flex-col items-center mb-20">
            <motion.h1
              className="text-5xl md:text-6xl text-center mb-12 font-bold text-slate-400"
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              TEACHER IN-CHARGE
            </motion.h1>
            
            <div className="w-full max-w-4xl flex justify-center">
              {teamMembers.inCharge.map((member, index) => (
                <motion.div
                  key={index}
                  className="w-full max-w-[280px] text-center p-8 bg-black/40 backdrop-blur-sm rounded-xl 
                            border border-cyber-blue/30 
                            shadow-[0_0_15px_rgba(0,243,255,0.2)] 
                            hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]
                            transition-all duration-700 hover:-translate-y-2
                            group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-auto object-cover mx-auto mb-4 
                               border-2 border-cyber-blue/50 
                               group-hover:border-cyber-pink/50 
                               transition-all duration-700
                               group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-cyber-blue mb-2 
                               group-hover:text-cyber-pink transition-colors duration-700">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 group-hover:text-cyber-blue/80 transition-colors duration-700">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chairperson Section */}
          <div className="w-full flex flex-col items-center mb-20">
            <motion.h1
              className="text-5xl md:text-6xl text-center mb-12 font-bold text-slate-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              CHAIRPERSON
            </motion.h1>
            <div className="w-full max-w-4xl flex justify-center">
              {teamMembers.chairpersons.map((member, index) => (
                <motion.div
                  key={index}
                  className="w-full max-w-[280px] text-center p-8 bg-black/40 backdrop-blur-sm rounded-xl 
                            border border-cyber-blue/30 
                            shadow-[0_0_15px_rgba(0,243,255,0.2)] 
                            hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]
                            transition-all duration-700 hover:-translate-y-2
                            group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-auto object-cover mx-auto mb-4 
                               border-2 border-cyber-blue/50 
                               group-hover:border-cyber-pink/50 
                               transition-all duration-700
                               group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-cyber-blue mb-2 
                               group-hover:text-cyber-pink transition-colors duration-700">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 group-hover:text-cyber-blue/80 transition-colors duration-700">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Deputy Chairperson Section */}
          <div className="w-full flex flex-col items-center mb-20">
            <motion.h1
              className="text-5xl md:text-6xl text-center mb-12 font-bold text-slate-400"
              initial={{ opacity: 1, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              DEPUTY CHAIRPERSON
            </motion.h1>
            <div className="w-full max-w-4xl flex justify-center">
              {teamMembers.deputyChairperson.map((member, index) => (
                <motion.div
                  key={index}
                  className="w-full max-w-[280px] text-center p-8 bg-black/40 backdrop-blur-sm rounded-xl 
                            border border-cyber-blue/30 
                            shadow-[0_0_15px_rgba(0,243,255,0.2)] 
                            hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]
                            transition-all duration-700 hover:-translate-y-2
                            group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-auto object-cover mx-auto mb-4 
                               border-2 border-cyber-blue/50 
                               group-hover:border-cyber-pink/50 
                               transition-all duration-700
                               group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-cyber-blue mb-2 
                               group-hover:text-cyber-pink transition-colors duration-700">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 group-hover:text-cyber-blue/80 transition-colors duration-700">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vice Chairperson Section */}
          <div className="w-full flex flex-col items-center mb-20">
            <motion.h1
              className="text-5xl md:text-6xl text-center mb-12 font-bold text-slate-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              VICE CHAIRPERSON
            </motion.h1>
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
              {teamMembers.viceChairpersons.map((member, index) => (
                <motion.div
                  key={index}
                  className="w-full max-w-[280px] text-center p-8 bg-black/40 backdrop-blur-sm rounded-xl 
                            border border-cyber-blue/30 
                            shadow-[0_0_15px_rgba(0,243,255,0.2)] 
                            hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]
                            transition-all duration-700 hover:-translate-y-2
                            group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-auto object-cover mx-auto mb-4 
                               border-2 border-cyber-blue/50 
                               group-hover:border-cyber-pink/50 
                               transition-all duration-700
                               group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-cyber-blue mb-2 
                               group-hover:text-cyber-pink transition-colors duration-700">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 group-hover:text-cyber-blue/80 transition-colors duration-700">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Departments Section */}
          <motion.h1
            className="text-5xl md:text-6xl text-center mb-20 font-bold text-slate-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            HEAD OF DEPARTMENTS
          </motion.h1>
          {Object.entries(teamMembers.departments).map(([dept, members], deptIndex) => (
            <div key={dept} className="w-full flex flex-col items-center mb-20">
              <motion.h2 
                className="text-3xl text-center mb-12 font-bold text-slate-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                {dept === 'pr' ? 'PUBLIC RELATIONS' : 
                 dept === 'gaming' ? 'GAMING & SPORTS' :
                 dept.toUpperCase()}
              </motion.h2>
              <div className={`w-full max-w-7xl ${
                members.length === 1 
                  ? 'flex justify-center'
                  : 'grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center'
              }`}>
                {members.map((member, index) => (
                  <motion.div
                    key={index}
                    className="w-full max-w-[280px] text-center p-8 bg-black/40 backdrop-blur-sm rounded-xl 
                              border border-cyber-blue/30 
                              shadow-[0_0_15px_rgba(0,243,255,0.2)] 
                              hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]
                              transition-all duration-700 hover:-translate-y-2
                              group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-auto object-cover mx-auto mb-4 
                                 border-2 border-cyber-blue/50 
                                 group-hover:border-cyber-pink/50 
                                 transition-all duration-700
                                 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-cyber-blue/80 mb-2 
                                 group-hover:text-gray-100 transition-colors duration-700">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-100 transition-colors duration-700 font-bold">
                      {member.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </CyberLayout>
  );
}

export default Team; 