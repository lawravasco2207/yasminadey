import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { posts } from './Blog';
import '../styles/BlogPost.scss';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === parseInt(id || '0'));

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    console.log('Post ID:', id);
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls, id]);

  if (!post) {
    return (
      <div className="blog-post-page">
        <h2>Post not found</h2>
        <Link to="/blog" className="back-button">
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = posts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="blog-post-page">
      <div className="glitter-effect"></div>
      <header className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {post.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="post-meta"
        >
          {post.date} | {post.category}
        </motion.p>
      </header>

      <div className="post-container">
        <section className="post-content" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8 }}
            style={{ pointerEvents: 'auto' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <Link to="/blog" className="back-button">
            Back to Blog
          </Link>

          <div className="comments-section">
            <h2>Comments</h2>
            <div className="comment">
              <p><strong>Sarah</strong> - Loved this post! Super helpful tips!</p>
            </div>
            <div className="comment">
              <p><strong>Mike</strong> - Thanks for the insights, Yasmin!</p>
            </div>
            <form className="comment-form">
              <textarea
                placeholder="Add a comment..."
                required
                onClick={() => console.log('Textarea clicked')}
              ></textarea>
              <button
                type="submit"
                onClick={() => console.log('Submit button clicked')}
              >
                Post Comment
              </button>
            </form>
          </div>
        </section>

        <aside className="sidebar">
          <div className="related-posts">
            <h3>Related Posts</h3>
            {relatedPosts.length > 0 ? (
              <ul>
                {relatedPosts.map((related) => (
                  <li key={related.id}>
                    <Link to={`/blog/${related.id}`}>{related.title}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No related posts found.</p>
            )}
          </div>
          <div className="cta">
            <h3>Want More Tips?</h3>
            <Link to="/contact" className="cta-button">
              Get in Touch
            </Link>
          </div>
        </aside>
      </div>

      <span className="heart-decoration heart-1">💖</span>
      <span className="heart-decoration heart-2">💖</span>
      <span className="heart-decoration heart-3">💖</span>
    </div>
  );
};

export default BlogPost;
