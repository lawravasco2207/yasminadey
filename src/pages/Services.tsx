import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaUsers, FaCamera, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Services.scss';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Business Management',
      icon: <FaBriefcase size={40} />,
      description: 'Streamline your operations and boost efficiency with expert management strategies.',
    },
    {
      title: 'Peer-Influencing',
      icon: <FaUsers size={40} />,
      description: 'Inspire and engage communities with authentic, trend-setting content.',
    },
    {
      title: 'Social Media Management',
      icon: <FaCamera size={40} />,
      description: 'Create scroll-stopping posts and grow your brand’s online presence.',
    },
    {
      title: 'Digital Marketing',
      icon: <FaChartLine size={40} />,
      description: 'Drive results with targeted campaigns and data-driven strategies.',
    },
  ];

  const testimonials = [
    { quote: 'Yasmin transformed our social media game!', client: 'Tech Startup' },
    { quote: 'Her marketing strategies doubled our leads!', client: 'Fashion Brand' },
    { quote: 'A true influencer with a golden touch!', client: 'Lifestyle Blogger' },
  ];

  const serviceControls = services.map(() => useAnimation());
  const testimonialControls = useAnimation();
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (servicesInView) {
      serviceControls.forEach((control) => control.start({ opacity: 1, rotateY: 0 }));
    }
    if (testimonialsInView) {
      testimonialControls.start({ opacity: 1, x: 0 });
    }
  }, [servicesInView, testimonialsInView, serviceControls, testimonialControls]);

  return (
    <div className="services-page">
      <div className="glitter-effect"></div>
      <header className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Transform Your Brand with My Expertise
        </motion.p>
      </header>

      <section className="services-section" ref={servicesRef}>
        <h2>What I Offer</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={serviceControls[index]}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/contact" className="service-cta">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="testimonials-section" ref={testimonialsRef}>
        <h2>What Clients Say</h2>
        <motion.div
          className="testimonials-slider"
          initial={{ opacity: 0, x: 50 }}
          animate={testimonialControls}
          transition={{ duration: 0.8 }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="quote">"{testimonial.quote}"</p>
              <p className="client">— {testimonial.client}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="cta-section">
        <h2>Ready to Shine?</h2>
        <Link to="/contact" className="cta-button">
          Get in Touch
        </Link>
      </section>

      <span className="heart-decoration heart-1">💖</span>
      <span className="heart-decoration heart-2">💖</span>
      <span className="heart-decoration heart-3">💖</span>
    </div>
  );
};

export default Services;