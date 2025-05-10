import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/Contact.scss';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong with the form. Please try again later.</div>;
    }
    return this.props.children;
  }
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const formControls = useAnimation();
  const socialControls = useAnimation();
  const [formRef, formInView] = useInView({ triggerOnce: true });
  const [socialRef, socialInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    console.log('Form in view:', formInView);
    console.log('Social in view:', socialInView);
    if (formInView) {
      formControls.start({ opacity: 1, y: 0 });
    }
    if (socialInView) {
      socialControls.start({ opacity: 1, scale: 1 });
    }
  }, [formInView, socialInView, formControls, socialControls]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    emailjs
      .send(
        'service_m6pzzsp', // Replace with your EmailJS Service ID
        'template_xkiszmk', // Replace with your EmailJS Template ID
        formData,
        'Utk-nZEbrVZ7ulaqb', // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus('Message sent! I’ll get back to you soon! ✨');
          setFormData({ name: '', email: '', service: '', message: '' });
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatus('Oops, something went wrong. Try again!');
        },
      );
  };

  return (
    <ErrorBoundary>
      <div className="contact-page">
        <div className="glitter-effect"></div>
        <header className="hero-section">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Let’s Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Make Magic Together
          </motion.p>
        </header>

        <section className="form-section" ref={formRef}>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={formControls}
            transition={{ duration: 0.8 }}
            style={{ pointerEvents: 'auto' }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a Service</option>
                <option value="Business Management">Business Management</option>
                <option value="Peer-Influencing">Peer-Influencing</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
            {status && <p className="form-status">{status}</p>}
          </motion.form>
        </section>

        <section className="social-section" ref={socialRef}>
          <h2>Stay Connected</h2>
          <motion.div
            className="social-links"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={socialControls}
            transition={{ duration: 0.8 }}
          >
            <a
              href="https://www.instagram.com/_yazmineey?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="insta-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on <FaInstagram size={32} />
            </a>
            <a
              href="https://www.tiktok.com/@yazmeen._?is_from_webapp=1&sender_device=pc"
              className="tiktok-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on <FaTiktok size={32} />
            </a>
          </motion.div>
        </section>

        <span className="heart-decoration heart-1">💖</span>
        <span className="heart-decoration heart-2">💖</span>
        <span className="heart-decoration heart-3">💖</span>
      </div>
    </ErrorBoundary>
  );
};

export default Contact;