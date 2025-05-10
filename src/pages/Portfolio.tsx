import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import '../styles/Portfolio.scss';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Viral Instagram Campaign',
      category: 'Social Media',
      image: 'https://via.placeholder.com/400x300',
      description: 'Drove 100K+ engagements for a fashion brand with a trendy reel series.',
    },
    {
      id: 2,
      title: 'E-Commerce Marketing Blitz',
      category: 'Marketing',
      image: 'https://via.placeholder.com/400x300',
      description: 'Boosted sales 50% with targeted ads and email campaigns.',
    },
    {
      id: 3,
      title: 'TikTok Trend Starter',
      category: 'Social Media',
      image: 'https://via.placeholder.com/400x300',
      description: 'Created a viral dance challenge reaching 500K views.',
    },
    {
      id: 4,
      title: 'Brand Strategy Overhaul',
      category: 'Marketing',
      image: 'https://via.placeholder.com/400x300',
      description: 'Redesigned a startup’s brand identity, increasing recognition.',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <div className="portfolio-page">
      <div className="glitter-effect"></div>
      <header className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          My Work Shines Bright
        </motion.p>
      </header>

      <section className="filter-section">
        <div className="filter-buttons">
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={filter === 'Social Media' ? 'active' : ''}
            onClick={() => setFilter('Social Media')}
          >
            Social Media
          </button>
          <button
            className={filter === 'Marketing' ? 'active' : ''}
            onClick={() => setFilter('Marketing')}
          >
            Marketing
          </button>
        </div>
      </section>

      <section className="portfolio-section" ref={ref}>
        <motion.div
          className="portfolio-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-card"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="category">{project.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="cta-section">
        <h2>Love What You See?</h2>
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

export default Portfolio;