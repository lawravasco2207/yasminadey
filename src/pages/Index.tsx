import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import '../styles/home.scss'

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="glitter-effect"></div>
      <header className="page-title">
        <h1>Yasmin's Space</h1>
        <h3>A Content Creator & Micro Influencer</h3>
      </header>
      <div className="link-buttons">
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
      </div>
      <span className="heart-decoration heart-1">💖</span>
      <span className="heart-decoration heart-2">💖</span>
      <span className="heart-decoration heart-3">💖</span>
    </div>
  );
};

export default Home;