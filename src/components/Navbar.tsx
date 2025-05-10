import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('Mobile menu open:', !isOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
  ];

  const socialLinks = [
    { href: 'https://www.instagram.com/_yazmineey?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: <FaInstagram />, label: 'Instagram' },
    { href: 'https://www.tiktok.com/@yazmeen._?is_from_webapp=1&sender_device=pc', icon: <FaTiktok />, label: 'TikTok' },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="navbar-container">
        <Link to="/" className="logo">
          Yasmin
        </Link>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="social-links">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <span className="heart-decoration heart-1">💖</span>
      <span className="heart-decoration heart-2">💖</span>
    </motion.nav>
  );
};

export default Navbar;