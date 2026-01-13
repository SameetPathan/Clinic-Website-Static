import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ALL_SERVICES } from '../../utils/constants';
import Card from '../common/Card';
import { FaArrowRight } from 'react-icons/fa';

const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const mainServices = ALL_SERVICES.slice(0, 6);

  return (
    <section ref={ref} className="py-5 bg-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Our Services</h2>
          <p className="lead text-muted">
            Comprehensive dental and cosmetology services to meet all your needs
          </p>
        </motion.div>

        <div className="row g-4">
          {mainServices.map((service, index) => (
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
                    Learn More <FaArrowRight className="ms-2" size={12} />
                  </Link>
                }
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-5"
        >
          <Link
            to="/services"
            className="btn btn-outline-primary btn-lg rounded-pill px-5"
          >
            View All Services <FaArrowRight className="ms-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;

