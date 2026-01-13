import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ALL_SERVICES } from '../utils/constants';
import { FaArrowLeft, FaCheck, FaClock, FaDollarSign } from 'react-icons/fa';
import Button from '../components/common/Button';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = ALL_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-5 text-center" style={{ marginTop: '70px' }}>
        <h2>Service not found</h2>
        <Link to="/services" className="btn btn-primary">
          Back to Services
        </Link>
      </div>
    );
  }

  const relatedServices = ALL_SERVICES
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <div style={{ marginTop: '70px' }}>
      {/* Hero Section */}
      <section
        className="position-relative py-5 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.8), rgba(20, 184, 166, 0.8)), url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px'
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              variant="light"
              onClick={() => navigate(-1)}
              className="mb-4"
              icon={<FaArrowLeft />}
            >
              Back
            </Button>
            <h1 className="display-4 fw-bold mb-3">{service.name}</h1>
            <p className="lead">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="fw-bold mb-4">About This Service</h2>
                <p className="lead text-muted mb-4">
                  {service.description}
                </p>
                <p className="mb-4">
                  At AdityaClinic, we provide comprehensive {service.name.toLowerCase()} services 
                  using the latest technology and techniques. Our experienced team ensures that 
                  each patient receives personalized care tailored to their specific needs.
                </p>

                <h3 className="fw-bold mb-3">What's Included</h3>
                <ul className="list-unstyled">
                  {service.services.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="mb-2 d-flex align-items-start"
                    >
                      <FaCheck className="text-success me-2 mt-1" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <h3 className="fw-bold mb-3 mt-5">Treatment Process</h3>
                <div className="row g-3">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="col-md-6">
                      <div className="card border-0 shadow-sm h-100 p-3">
                        <div className="d-flex align-items-center mb-2">
                          <div
                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                            style={{ width: '40px', height: '40px' }}
                          >
                            {step}
                          </div>
                          <h5 className="mb-0">Step {step}</h5>
                        </div>
                        <p className="text-muted mb-0 small">
                          Consultation and initial assessment to understand your needs and 
                          create a personalized treatment plan.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="fw-bold mb-3 mt-5">Benefits</h3>
                <div className="row g-3">
                  {[
                    'Professional expertise',
                    'Modern technology',
                    'Personalized care',
                    'Comfortable environment'
                  ].map((benefit, index) => (
                    <div key={index} className="col-md-6">
                      <div className="card border-0 bg-light p-3">
                        <FaCheck className="text-success mb-2" />
                        <p className="mb-0 fw-semibold">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="card border-0 shadow-lg sticky-top"
                style={{ top: '100px' }}
              >
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">Book This Service</h4>
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <FaClock className="text-primary me-2" />
                      <span>Duration: 30-60 minutes</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <FaDollarSign className="text-primary me-2" />
                      <span>Starting from $99</span>
                    </div>
                  </div>
                  <Button
                    to="/appointment"
                    variant="primary"
                    className="w-100 mb-3"
                  >
                    Book Appointment
                  </Button>
                  <Button
                    to="/contact"
                    variant="outline"
                    className="w-100"
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-5"
            >
              <h3 className="fw-bold mb-4">Related Services</h3>
              <div className="row g-4">
                {relatedServices.map((relatedService) => (
                  <div key={relatedService.id} className="col-md-4">
                    <div className="card border-0 shadow-sm h-100">
                      <img
                        src={relatedService.image}
                        alt={relatedService.name}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <h5 className="fw-bold">{relatedService.name}</h5>
                        <p className="text-muted small">{relatedService.description}</p>
                        <Link
                          to={`/services/${relatedService.slug}`}
                          className="btn btn-sm btn-primary rounded-pill"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

