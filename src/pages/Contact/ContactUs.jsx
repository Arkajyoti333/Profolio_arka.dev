import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdLocationOn, MdSend } from 'react-icons/md';
import Tooltip from '../../components/Uicomponents/SocialMediaCard';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    {
    id:1,
      href: "https://www.linkedin.com/in/arkajyoti-kundu-784264242/",
      text: "LinkedIn"
    },
    {
      id:2,
      href: "https://github.com/Arkajyoti333",
      text: "GitHub"
    },
    {
    id:3,
      href: "https://www.instagram.com/arkajyoti_jr",
      text: "Instagram"
    },
    {
      id:4,
      href: "https://www.facebook.com/arkajyoti.kundu.9",
      text: "Facebook"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="/contact" className="py-16 px-4 bg-[#F3F4F6] text-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <label className="block mb-2 font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block mb-2 font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block mb-2 font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <MdSend className="text-xl" />
              {isSubmitted ? 'Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact Information</h3>
              
              <div className="flex items-center gap-4 text-gray-600">
                <MdLocationOn className="text-2xl text-blue-600" />
                <p>Kolkata, West Bengal, India</p>
              </div>
              
              <div className="flex items-center gap-4 text-gray-600">
                <FaEnvelope className="text-xl text-blue-600" />
                <a href="mailto:your.email@example.com" className="hover:text-blue-700 transition-colors">
                  arkajyotikundu415@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-4 text-gray-600">
                <FaPhone className="text-xl text-blue-600" />
                <a href="tel:+1234567890" className="hover:text-blue-700 transition-colors">
                  +91 9547913428
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h4 className="text-xl font-bold mb-6 text-gray-900">Find me on</h4>
              <div className="flex gap-6">
                
                  {/* <motion.a
                 
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2 text-gray-700"
                  > */}
                 
                 <Tooltip socialLinks={socialLinks}/>
                  {/* </motion.a> */}
               
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;