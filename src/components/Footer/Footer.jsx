import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/arkajyoti-kundu-784264242/",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Arkajyoti333",
    },
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/arkajyoti.kundu.9/",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/arkajyoti_jr/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <footer className="bg-[#111827] border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col items-center space-y-6"
        >
          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            className="flex space-x-6 md:space-x-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg"
                >
                  <span className="text-2xl">{link.icon}</span>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright Text */}
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-400 text-sm md:text-base"
          >
            © {new Date().getFullYear()} Arkajyoti Kundu. All rights reserved.
            <br />
            <span className="mt-1 inline-block">
              Crafted with passion and React ❤️
            </span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;