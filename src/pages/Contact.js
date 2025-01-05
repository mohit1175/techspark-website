import { motion } from 'framer-motion';
import CyberLayout from '../components/CyberLayout';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <CyberLayout>
      <div className="px-8 pt-20">
        <div className="max-w-2xl mx-auto">
          <motion.h1
            className="text-4xl mb-8 text-center text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>

          <motion.form
            className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-400"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-400"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-400"
            />
            <textarea
              placeholder="Your message..."
              required
              className="p-3 border border-gray-200 rounded-lg min-h-[150px] resize-y focus:outline-none focus:border-green-400"
            />
            <motion.button
              type="submit"
              className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </CyberLayout>
  );
}

export default Contact; 