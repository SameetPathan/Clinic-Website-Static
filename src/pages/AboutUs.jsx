import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaAward, FaHeart, FaEye, FaHandshake } from 'react-icons/fa';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: FaHeart,
      title: 'Compassion',
      description: 'We care deeply about our patients and their well-being.'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.'
    },
    {
      icon: FaHandshake,
      title: 'Integrity',
      description: 'Honest, transparent, and ethical in all our practices.'
    },
    {
      icon: FaEye,
      title: 'Innovation',
      description: 'Embracing new technologies and techniques for better outcomes.'
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
            <h1 className="display-4 fw-bold mb-3">About AdityaClinic</h1>
            <p className="lead">Your trusted partner in dental and cosmetology care</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="display-5 fw-bold mb-4">Our Story</h2>
                <p className="lead text-muted mb-4">
                  Founded with a vision to provide exceptional dental and cosmetology services, 
                  AdityaClinic has been serving the community for over 10 years.
                </p>
                <p className="mb-4">
                  What started as a small practice has grown into a comprehensive healthcare 
                  facility, combining advanced dental care with cutting-edge cosmetology 
                  treatments. Our journey has been driven by a commitment to excellence, 
                  patient satisfaction, and continuous innovation.
                </p>
                <p>
                  Today, we are proud to have helped thousands of patients achieve healthier 
                  smiles, improved confidence, and better overall well-being. Our team of 
                  experienced professionals works together to provide personalized care that 
                  meets the unique needs of each patient.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800"
                  alt="Clinic interior"
                  className="img-fluid rounded shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section ref={ref} className="py-5 bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3">Our Vision & Values</h2>
            <p className="lead text-muted">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="row g-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="col-lg-3 col-md-6"
                >
                  <div className="card border-0 shadow-sm h-100 text-center p-4">
                    <div className="mb-3">
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10"
                        style={{ width: '80px', height: '80px' }}
                      >
                        <Icon size={40} className="text-primary" />
                      </div>
                    </div>
                    <h4 className="fw-bold mb-3">{value.title}</h4>
                    <p className="text-muted mb-0">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3">Why Choose Our Clinic</h2>
          </motion.div>

          <div className="row g-4">
            {[
              {
                title: 'Expert Team',
                description: 'Highly qualified professionals with years of experience'
              },
              {
                title: 'Modern Technology',
                description: 'State-of-the-art equipment and latest treatment methods'
              },
              {
                title: 'Patient-Centered Care',
                description: 'Personalized treatment plans tailored to your needs'
              },
              {
                title: 'Comfortable Environment',
                description: 'Relaxing atmosphere designed for your peace of mind'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="col-lg-6"
              >
                <div className="card border-0 shadow-sm h-100 p-4">
                  <h4 className="fw-bold mb-3">{item.title}</h4>
                  <p className="text-muted mb-0">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3">Our Facility</h2>
            <p className="lead text-muted">
              A modern, comfortable environment for your care
            </p>
          </motion.div>

          <div className="row g-3">
            {[
              'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600',
              'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600',
              'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600',
              'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="col-lg-3 col-md-6"
              >
                <img
                  src={image}
                  alt={`Facility ${index + 1}`}
                  className="img-fluid rounded shadow-sm w-100"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

