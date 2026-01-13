import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { DENTAL_SERVICES, COSMETOLOGY_SERVICES, ALL_SERVICES } from '../utils/constants';
import Card from '../components/common/Card';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getServices = () => {
    switch (selectedCategory) {
      case 'dental':
        return DENTAL_SERVICES;
      case 'cosmetology':
        return COSMETOLOGY_SERVICES;
      default:
        return ALL_SERVICES;
    }
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'dental', label: 'Dental Services' },
    { id: 'cosmetology', label: 'Cosmetology Services' }
  ];

  return (
    <div className="py-5" style={{ marginTop: '70px' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h1 className="display-4 fw-bold mb-3">Our Services</h1>
          <p className="lead text-muted">
            Comprehensive dental and cosmetology services tailored to your needs
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn rounded-pill px-4 ${
                selectedCategory === cat.id
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {getServices().map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="col-lg-4 col-md-6"
            >
              <Card
                image={service.image}
                title={service.name}
                description={service.description}
                to={`/services/${service.slug}`}
                footer={
                  <Link
                    to={`/services/${service.slug}`}
                    className="btn btn-primary rounded-pill px-4"
                  >
                    View Details <FaArrowRight className="ms-2" size={12} />
                  </Link>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

