import { motion } from 'framer-motion';
import CyberLayout from '../components/CyberLayout';

const events = [
  {
    date: "25",
    month: "JUN",
    year: "2024",
    title: "Tech Innovation Summit",
    description: "Join us for a day of exploring cutting-edge technologies and networking with industry leaders.",
    location: "TechHub Conference Center"
  },
  {
    date: "15",
    month: "JUL",
    year: "2024",
    title: "Web Development Workshop",
    description: "Learn the latest web development technologies and best practices in this hands-on workshop.",
    location: "Virtual Event"
  },
  {
    date: "10",
    month: "AUG",
    year: "2024",
    title: "AI & Machine Learning Conference",
    description: "Discover the latest advances in AI and machine learning from leading experts.",
    location: "Innovation Center"
  }
];

function Events() {
  return (
    <CyberLayout>
      <div className="px-8 pt-20">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl mb-12 text-center text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Upcoming Events
          </motion.h1>

          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-8 mb-8 shadow-lg grid grid-cols-1 md:grid-cols-4 gap-8 hover:-translate-y-1 transition-transform duration-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-3xl text-gray-900">{event.date}</h3>
                <p className="text-gray-600">{event.month}</p>
                <p className="text-gray-600">{event.year}</p>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-2xl text-gray-900 mb-4">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <p className="text-gray-500">📍 {event.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </CyberLayout>
  );
}

export default Events; 