import { motion } from 'framer-motion';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Help Center', href: '#' },
  ];

  return (
    <footer className="border-t" style={{ 
      backgroundColor: '#001e2b',
      borderTopColor: 'rgba(0, 237, 100, 0.3)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00ed64 0%, #00684a 100%)' }}
              >
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Virtual Bookshelf</span>
            </div>
            <p className="mb-6 max-w-md" style={{ color: '#ffffff' }}>
              Your digital reading companion. Create, organize, and share your book collection with fellow book lovers around the world.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2" style={{ color: '#ffffff' }}>
                <Mail className="w-4 h-4" />
                <span>contact@virtualbookshelf.com</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: '#ffffff' }}>
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: '#ffffff' }}>
                <MapPin className="w-4 h-4" />
                <span>123 Book Street, Reading City, RC 12345</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-[#00ed64]"
                    style={{ color: '#ffffff' }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all"
                  style={{ 
                    backgroundColor: '#023430',
                    color: '#ffffff'
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    backgroundColor: '#00ed64',
                    color: '#001e2b'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t mt-8 pt-8 text-center"
          style={{ borderTopColor: 'rgba(0, 237, 100, 0.3)' }}
        >
          <p style={{ color: '#ffffff' }}>
            © 2025 Book Case. All rights reserved. Made with ❤️ for book lovers.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

