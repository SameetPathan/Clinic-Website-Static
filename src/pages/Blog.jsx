import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';
import Card from '../components/common/Card';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Dental Care Tips for Healthy Teeth',
      excerpt: 'Learn the best practices for maintaining optimal oral health and preventing dental issues.',
      image: 'https://images.unsplash.com/photo-1606811971618-4486c4e32d89?w=800',
      author: 'Dr. Aditya Sharma',
      date: 'January 15, 2024',
      category: 'Dental Care'
    },
    {
      id: 2,
      title: 'Understanding Cosmetic Dentistry: A Complete Guide',
      excerpt: 'Everything you need to know about cosmetic dental procedures and their benefits.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800',
      author: 'Dr. Priya Patel',
      date: 'January 10, 2024',
      category: 'Cosmetic Dentistry'
    },
    {
      id: 3,
      title: 'The Benefits of Regular Skin Care Treatments',
      excerpt: 'Discover how regular professional skin care can improve your complexion and confidence.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800',
      author: 'Dr. Rajesh Kumar',
      date: 'January 5, 2024',
      category: 'Skin Care'
    },
    {
      id: 4,
      title: 'Invisalign vs Traditional Braces: Which is Right for You?',
      excerpt: 'Compare the pros and cons of Invisalign and traditional braces to make an informed decision.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800',
      author: 'Dr. Priya Patel',
      date: 'December 28, 2023',
      category: 'Orthodontics'
    },
    {
      id: 5,
      title: 'Post-Treatment Care: Maintaining Your Results',
      excerpt: 'Essential tips for maintaining the results of your dental or cosmetic treatments.',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800',
      author: 'Dr. Anjali Verma',
      date: 'December 20, 2023',
      category: 'General'
    },
    {
      id: 6,
      title: 'The Latest Trends in Aesthetic Treatments',
      excerpt: 'Explore the newest advancements in cosmetic and aesthetic treatment technologies.',
      image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800',
      author: 'Dr. Rajesh Kumar',
      date: 'December 15, 2023',
      category: 'Aesthetic Treatments'
    }
  ];

  return (
    <div style={{ marginTop: '70px' }}>
      {/* Hero Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="display-4 fw-bold mb-3">Blog & Articles</h1>
            <p className="lead">Stay informed about dental health and beauty tips</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section ref={ref} className="py-5">
        <div className="container">
          <div className="row g-4">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="col-lg-4 col-md-6"
              >
                <Card
                  image={post.image}
                  title={post.title}
                  description={post.excerpt}
                  footer={
                    <div>
                      <div className="d-flex align-items-center text-muted small mb-3">
                        <FaUser className="me-2" />
                        <span className="me-3">{post.author}</span>
                        <FaCalendar className="me-2" />
                        <span>{post.date}</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">{post.category}</span>
                        <Link
                          to={`/blog/${post.id}`}
                          className="btn btn-sm btn-outline-primary rounded-pill"
                        >
                          Read More <FaArrowRight className="ms-1" size={10} />
                        </Link>
                      </div>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

