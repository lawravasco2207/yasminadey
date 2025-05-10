import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../styles/Blog.scss';

// Export posts for reuse in BlogPost.tsx
export const posts = [
  {
    id: 1,
    title: '5 Tips for Viral Instagram Reels',
    category: 'Social Media',
    date: '2025-04-15',
    excerpt: 'Learn how to create engaging reels that skyrocket your reach.',
    content: `
      <h2>Create Viral Reels</h2>
      <p>Instagram Reels are a game-changer for engagement. Here are 5 tips to make yours go viral:</p>
      <ul>
        <li><strong>Hook in 3 Seconds</strong>: Grab attention with a bold intro.</li>
        <li><strong>Trendy Audio</strong>: Use trending sounds to boost discoverability.</li>
        <li><strong>High Energy</strong>: Keep the pace fast and visuals vibrant.</li>
        <li><strong>Clear CTA</strong>: End with a call-to-action like "Follow for more!"</li>
        <li><strong>Hashtags</strong>: Use relevant tags like #ReelItFeelIt.</li>
      </ul>
      <img src="https://via.placeholder.com/600x400" alt="Instagram Reel" />
      <p>Start experimenting today and watch your engagement soar!</p>
    `,
  },
  {
    id: 2,
    title: 'Mastering TikTok Trends',
    category: 'Social Media',
    date: '2025-04-10',
    excerpt: 'Stay ahead with these trend-spotting strategies.',
    content: `
      <h2>TikTok Trend Mastery</h2>
      <p>TikTok thrives on trends. Here’s how to spot and leverage them:</p>
      <ul>
        <li><strong>Monitor FYP</strong>: Check the For You Page daily.</li>
        <li><strong>Engage Early</strong>: Jump on trends before they peak.</li>
        <li><strong>Add Your Spin</strong>: Make trends unique to your brand.</li>
      </ul>
      <img src="https://via.placeholder.com/600x400" alt="TikTok Trend" />
      <p>With these strategies, you’ll be a TikTok trendsetter!</p>
    `,
  },
  {
    id: 3,
    title: 'Boost Your Brand with Email Marketing',
    category: 'Marketing',
    date: '2025-04-05',
    excerpt: 'Craft emails that convert with these pro tips.',
    content: `
      <h2>Email Marketing 101</h2>
      <p>Email marketing remains a powerful tool. Here’s how to nail it:</p>
      <ul>
        <li><strong>Personalize</strong>: Use the recipient’s name.</li>
        <li><strong>Strong Subject Lines</strong>: Spark curiosity.</li>
        <li><strong>Mobile-Friendly</strong>: Optimize for small screens.</li>
      </ul>
      <img src="https://via.placeholder.com/600x400" alt="Email Campaign" />
      <p>Start sending emails that your audience loves!</p>
    `,
  },
  {
    id: 4,
    title: 'Why Influencer Collabs Work',
    category: 'Influencing',
    date: '2025-03-30',
    excerpt: 'Discover the power of authentic partnerships.',
    content: `
      <h2>Influencer Collaborations</h2>
      <p>Collaborations amplify your reach. Here’s why they work:</p>
      <ul>
        <li><strong>Trust</strong>: Influencers have loyal audiences.</li>
        <li><strong>Authenticity</strong>: Genuine partnerships resonate.</li>
        <li><strong>Cross-Promotion</strong>: Tap into new followers.</li>
      </ul>
      <img src="https://via.placeholder.com/600x400" alt="Influencer Collab" />
      <p>Find the right partners and grow your brand!</p>
    `,
  },
  {
    id: 5,
    title: 'SEO for Beginners',
    category: 'Marketing',
    date: '2025-03-25',
    excerpt: 'Get your content ranking with simple SEO hacks.',
    content: `
      <h2>SEO Made Easy</h2>
      <p>SEO doesn’t have to be complex. Start with these tips:</p>
      <ul>
        <li><strong>Keywords</strong>: Research what your audience searches.</li>
        <li><strong>Quality Content</strong>: Write valuable posts.</li>
        <li><strong>Meta Tags</strong>: Optimize titles and descriptions.</li>
      </ul>
      <img src="https://via.placeholder.com/600x400" alt="SEO Guide" />
      <p>Boost your rankings with these simple steps!</p>
    `,
  },
  {
    id: 6,
    title: 'Creating a Content Calendar',
    category: 'Social Media',
    date: '2025-03-20',
    excerpt: 'Plan your posts like a pro with this guide.',
    content: `
      <h2>Content Calendar Guide</h2>
      <p>A content calendar keeps you organized. Here’s how to create one:</p>
      <ul>
        <li><strong>Plan Themes</strong>: Align with holidays or events.</li>
        <li><strong>Schedule Posts</strong>: Use tools like Later.</li>
        <li><strong>Mix Content</strong>: Balance promo and value posts.</li>
      </ul>
      <img src="https://via.placeholder.com/600x400" alt="Content Calendar" />
      <p>Stay consistent with a killer calendar!</p>
    `,
  },
];

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="blog-page">
      <div className="glitter-effect"></div>
      <header className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Sparkle with My Insights
        </motion.p>
      </header>

      <div className="blog-container">
        <section className="blog-section" ref={ref}>
          <motion.div
            className="blog-grid"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8 }}
          >
            {currentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ pointerEvents: 'auto' }}
              >
                <h3>{post.title}</h3>
                <p className="post-meta">
                  {post.date} | {post.category}
                </p>
                <p className="post-excerpt">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="read-more"
                  onClick={() => console.log('Read More clicked for post:', post.id)}
                >
                  Read More
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={currentPage === page ? 'active' : ''}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </section>

        <aside className="sidebar">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li onClick={() => setSearchQuery('Social Media')}>Social Media</li>
              <li onClick={() => setSearchQuery('Marketing')}>Marketing</li>
              <li onClick={() => setSearchQuery('Influencing')}>Influencing</li>
            </ul>
          </div>
        </aside>
      </div>

      <section className="cta-section">
        <h2>Want More Tips?</h2>
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

export default Blog;