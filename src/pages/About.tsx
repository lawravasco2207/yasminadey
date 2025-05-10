import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/About.scss';

const About: React.FC = () => {
  const stats = [
    { value: 100, label: 'Campaigns Managed' },
    { value: 50, label: 'K+ Social Reach' },
    { value: 10, label: 'Years of Experience' },
  ];

  const timelineEvents = [
    { year: '2015', event: 'Started as a Social Media Enthusiast' },
    { year: '2018', event: 'Launched First Viral Campaign' },
    { year: '2020', event: 'Founded Digital Marketing Agency' },
    { year: '2023', event: 'Became a Recognized Peer-Influencer' },
  ];

  const statControls = stats.map(() => useAnimation());
  const timelineControls = useAnimation();
  const [statsRef, statsInView] = useInView({ triggerOnce: true });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (statsInView) {
      statControls.forEach((control) => control.start({ opacity: 1, y: 0 }));
    }
    if (timelineInView) {
      timelineControls.start({ opacity: 1, x: 0 });
    }
  }, [statsInView, timelineInView, statControls, timelineControls]);

  return (
    <div className="about-page">
      <div className="glitter-effect"></div>
      <header className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet Yasmin
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Empowering Brands with Sparkle & Strategy
        </motion.p>
        <div className="hero-image"></div>
      </header>

      <section className="bio-section">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hey there! I’m Yasmin, a passionate business manager, peer-influencer, social media manager, and digital marketer. With a love for creating scroll-stopping content and driving brand success, I’ve spent over a decade turning ideas into impactful campaigns. Whether it’s crafting strategies, managing teams, or sparking trends, I bring a touch of magic to everything I do. Let’s make your brand shine!
        </motion.p>
      </section>

      <section className="stats-section" ref={statsRef}>
        <h2>By the Numbers</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 50 }}
              animate={statControls[index]}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="timeline-section" ref={timelineRef}>
        <h2>Milestones</h2>
        <motion.div
          className="timeline"
          initial={{ opacity: 0, x: -50 }}
          animate={timelineControls}
          transition={{ duration: 0.8 }}
        >
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-event">
              <span className="event-year">{event.year}</span>
              <span className="event-description">{event.event}</span>
            </div>
          ))}
        </motion.div>
      </section>

      <span className="heart-decoration heart-1">💖</span>
      <span className="heart-decoration heart-2">💖</span>
      <span className="heart-decoration heart-3">💖</span>
    </div>
  );
};

export default About;

