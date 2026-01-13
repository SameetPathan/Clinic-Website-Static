import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TESTIMONIALS, ALL_SERVICES } from '../utils/constants';
import { FaStar } from 'react-icons/fa';
import Card from '../components/common/Card';

const TestimonialsPage = () => {
  const [selectedService, setSelectedService] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredTestimonials = selectedService === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.service.toLowerCase().includes(selectedService.toLowerCase()));

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
            <h1 className="display-4 fw-bold mb-3">Testimonials</h1>
            <p className="lead">Hear from our satisfied patients</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={ref} className="py-5">
        <div className="container">
          {/* Service Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="d-flex justify-content-center gap-2 mb-5 flex-wrap"
          >
            <motion.button
              onClick={() => setSelectedService('all')}
              className={`btn rounded-pill px-4 ${
                selectedService === 'all'
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Services
            </motion.button>
            {ALL_SERVICES.slice(0, 5).map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setSelectedService(service.name)}
                className={`btn rounded-pill px-4 ${
                  selectedService === service.name
                    ? 'btn-primary'
                    : 'btn-outline-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Testimonials Grid */}
          <div className="row g-4">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="col-lg-4 col-md-6"
              >
                <div className="card border-0 shadow-sm h-100 p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                    <div>
                      <h5 className="mb-1 fw-bold">{testimonial.name}</h5>
                      <p className="text-muted small mb-0">{testimonial.service}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-warning" />
                    ))}
                  </div>
                  <p className="text-muted mb-0">"{testimonial.text}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;

