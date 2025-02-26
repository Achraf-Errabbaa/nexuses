import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const inputVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 }
  })
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <div className="text-white p-5">
        <h1 className="text-4xl md:text-5xl font-bold text-center">Contact our team</h1>
        <div className="p-5 flex flex-col gap-5 text-center">
          <h2 className="text-2xl">We’re Here to Help</h2>
          <p className="text-xl p-8">
            Have a question about our gaming PCs, laptops, accessories, financing, or affiliate program? 
            Our support team is ready to assist you! Whether you need product recommendations, 
            troubleshooting help, or order assistance, we’ve got you covered.
          </p>
        </div>
      </div>

      <motion.div
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-white py-20 px-6 lg:px-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-[#fcb505] mb-12 text-center lg:text-left">
                Contact Us
              </h1>
              <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Field */}
                <motion.div
                  custom={0}
                  variants={inputVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  <label className="block text-lg mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full p-4 bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] focus:outline-none focus:border-[#fcb505] focus:ring-2 focus:ring-[#fcb505]/50 transition-all duration-300"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  custom={1}
                  variants={inputVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  <label className="block text-lg mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full p-4 bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] focus:outline-none focus:border-[#61c0bf] focus:ring-2 focus:ring-[#61c0bf]/50 transition-all duration-300"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </motion.div>
              </div>

              {/* Subject Field */}
              <motion.div
                custom={2}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <label className="block text-lg mb-2">Subject</label>
                <select
                  required
                  className="w-full p-4 bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] focus:outline-none focus:border-[#ff7777] focus:ring-2 focus:ring-[#ff7777]/50 transition-all duration-300"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option value="">Select a subject</option>
                  <option value="Order Support">Order Support</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Affiliate Program">Affiliate Program</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>

              {/* Message Field */}
              <motion.div
                custom={3}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <label className="block text-lg mb-2">Message</label>
                <textarea
                  required
                  rows="5"
                  className="w-full p-4 bg-[#2d2d2d] rounded-lg border border-[#3d3d3d] focus:outline-none focus:border-[#fcb505] focus:ring-2 focus:ring-[#fcb505]/50 transition-all duration-300"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                custom={4}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="flex justify-center"
              >
                <button
                  type="submit"
                  className="px-12 py-4 bg-[#fcb505] text-black font-bold rounded-lg hover:bg-[#fcc529] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#fcb505]/40"
                >
                  Send Message
                </button>
              </motion.div>
              </form>
            </div>

            {/* Sticky Contact Information */}
            <motion.div 
              variants={sectionVariants}
              className="lg:sticky lg:top-28 h-fit p-8 bg-[#2d2d2d]/50 rounded-xl shadow-xl space-y-8 lg:min-w-[400px]"
            >
              <h2 className="text-3xl font-bold text-[#61c0bf] mb-8 text-center">
                Contact Information
              </h2>

              <div className="space-y-6">
                <motion.div variants={inputVariants} custom={0} className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-lg font-semibold text-[#fcb505]">Email Support</p>
                    <p className="text-gray-300">support@nexuses.com</p>
                  </div>
                </motion.div>

                <motion.div variants={inputVariants} custom={1} className="flex items-start gap-4">
                  <span className="text-2xl">☎️</span>
                  <div>
                    <p className="text-lg font-semibold text-[#fcb505]">Phone Support</p>
                    <p className="text-gray-300">+212-XXX-XXX-XXX</p>
                    <p className="text-sm text-gray-400 mt-1">Available: 9 AM - 7 PM GMT</p>
                  </div>
                </motion.div>

                <motion.div variants={inputVariants} custom={2} className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-lg font-semibold text-[#fcb505]">Our Office</p>
                    <p className="text-gray-300">
                      123 Gaming Street<br />
                      Casablanca, Morocco
                    </p>
                  </div>
                </motion.div>

                <div className="pt-8 border-t border-[#3d3d3d]">
                  <h3 className="text-xl font-bold text-[#ff7777] mb-6 text-center">
                    Follow Us
                  </h3>
                  <div className="flex justify-center gap-6">
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      className="text-3xl hover:text-[#fd810a] transition-colors"
                      href="#"
                    >
                      <FaInstagram />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      className="text-3xl hover:text-[#0f0f0f] transition-colors"
                      href="#"
                    >
                     <FaXTwitter />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      className="text-3xl hover:text-[#106aff] transition-colors"
                      href="#"
                    >
                      <FaFacebookF />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};