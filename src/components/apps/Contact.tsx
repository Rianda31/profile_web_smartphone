import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, Github, MapPin, Phone, MessageCircle } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { profileData } from '../../data/profileData';

const Contact: React.FC = () => {
  const { theme } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: profileData.contact.email,
      color: 'bg-red-500',
      action: `mailto:${profileData.contact.email}`
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      color: 'bg-blue-600',
      action: `https://${profileData.contact.linkedin}`
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'View my code',
      color: 'bg-gray-800',
      action: `https://${profileData.contact.github}`
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: profileData.contact.location,
      color: 'bg-green-500',
      action: null
    }
  ];

  return (
    <div className={`p-6 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <div className="bg-gradient-to-br from-red-500 to-pink-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 shadow-xl">
          <Mail className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Let's connect and discuss opportunities
        </p>
      </motion.div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.label}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            whileHover={{ scale: method.action ? 1.02 : 1 }}
            onClick={() => method.action && window.open(method.action, '_blank')}
            className={`${
              theme === 'dark' 
                ? 'bg-slate-800 border-slate-700' 
                : 'bg-gray-50 border-gray-200'
            } border rounded-xl p-4 flex items-center space-x-4 ${
              method.action ? 'cursor-pointer hover:shadow-lg' : ''
            } transition-all duration-300`}
          >
            <div className={`${method.color} p-3 rounded-lg text-white`}>
              {method.icon}
            </div>
            <div>
              <h3 className="font-semibold">{method.label}</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {method.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`${
          theme === 'dark' 
            ? 'bg-slate-800 border-slate-700' 
            : 'bg-gray-50 border-gray-200'
        } border rounded-xl p-6`}
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-purple-500 p-2 rounded-lg">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-semibold">Send Message</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
                placeholder="Your full name"
              />
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
                placeholder="your.email@example.com"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
              placeholder="What's this about?"
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-none`}
              placeholder="Tell me about your project or opportunity..."
            />
          </motion.div>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </div>
            )}
          </motion.button>
        </form>
      </motion.div>

      {/* Quick Contact Info */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1 }}
        className={`mt-8 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-red-900/50 to-pink-900/50' 
            : 'bg-gradient-to-r from-red-50 to-pink-50'
        } rounded-xl p-6 text-center`}
      >
        <h3 className="text-lg font-semibold mb-3">Let's Collaborate!</h3>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
          I'm always open to discussing new opportunities, innovative projects, 
          and ways to turn data into actionable insights.
        </p>
        <div className="flex justify-center space-x-4">
          <span className={`px-3 py-1 rounded-full text-sm ${
            theme === 'dark' 
              ? 'bg-green-900 text-green-300' 
              : 'bg-green-100 text-green-700'
          }`}>
            Available for Projects
          </span>
          <span className={`px-3 py-1 rounded-full text-sm ${
            theme === 'dark' 
              ? 'bg-blue-900 text-blue-300' 
              : 'bg-blue-100 text-blue-700'
          }`}>
            Open to Opportunities
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;