import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { WHY_CHOOSE_US } from '../../utils/constants';
import {
  FaUserMd,
  FaMicroscope,
  FaDollarSign,
  FaHeart,
  FaClock,
  FaHandHoldingHeart
} from 'react-icons/fa';

const iconMap = {
  FaUserMd,
  FaMicroscope,
  FaDollarSign,
  FaHeart,
  FaClock,
  FaHandHoldingHeart
};

const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = iconMap[feature.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="col-lg-4 col-md-6 mb-4"
    >
      <motion.div
        className="card h-100 border-0 shadow-sm text-center p-4"
        whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-3">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10"
            style={{ width: '80px', height: '80px' }}
          >
            <Icon size={40} className="text-primary" />
          </div>
        </div>
        <h4 className="fw-bold mb-3">{feature.title}</h4>
        <p className="text-muted mb-0">{feature.description}</p>
      </motion.div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Why Choose Us</h2>
          <p className="lead text-muted">
            We are dedicated to providing the highest quality care and exceptional service
          </p>
        </motion.div>

        <div className="row">
          {WHY_CHOOSE_US.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

