import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../utils/constants';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

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
            <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
            <p className="lead">We're here to help. Get in touch with us today.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="col-lg-7"
            >
              <div className="card border-0 shadow-lg p-4">
                <h2 className="fw-bold mb-4">Send us a Message</h2>
                {submitStatus === 'success' && (
                  <div className="alert alert-success" role="alert">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label fw-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="service" className="form-label fw-semibold">
                      Service Interested In
                    </label>
                    <select
                      className="form-select"
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="general-dentistry">General Dentistry</option>
                      <option value="cosmetic-dentistry">Cosmetic Dentistry</option>
                      <option value="orthodontics">Orthodontics</option>
                      <option value="skin-care">Skin Care</option>
                      <option value="hair-care">Hair Care</option>
                      <option value="aesthetic-treatments">Aesthetic Treatments</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold">
                      Message *
                    </label>
                    <textarea
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                    />
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-pill px-5 w-100"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="col-lg-5"
            >
              <div className="card border-0 shadow-lg p-4 h-100">
                <h2 className="fw-bold mb-4">Contact Information</h2>

                <div className="mb-4">
                  <div className="d-flex align-items-start mb-3">
                    <FaMapMarkerAlt className="text-primary me-3 mt-1" size={20} />
                    <div>
                      <h5 className="fw-bold mb-1">Address</h5>
                      <p className="text-muted mb-0">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <FaPhone className="text-primary me-3" size={20} />
                    <div>
                      <h5 className="fw-bold mb-1">Phone</h5>
                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-muted text-decoration-none"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <FaEnvelope className="text-primary me-3" size={20} />
                    <div>
                      <h5 className="fw-bold mb-1">Email</h5>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-muted text-decoration-none"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <FaClock className="text-primary me-3 mt-1" size={20} />
                    <div>
                      <h5 className="fw-bold mb-1">Working Hours</h5>
                      <p className="text-muted mb-1">{CONTACT_INFO.workingHours.weekdays}</p>
                      <p className="text-muted mb-1">{CONTACT_INFO.workingHours.saturday}</p>
                      <p className="text-muted mb-0">{CONTACT_INFO.workingHours.sunday}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="fw-bold mb-3">Follow Us</h5>
                  <div className="d-flex gap-3">
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      <FaFacebook size={24} />
                    </a>
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href={SOCIAL_LINKS.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      <FaTwitter size={24} />
                    </a>
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-4">
                  <h5 className="fw-bold mb-3">Location</h5>
                  <div className="bg-light rounded p-3 text-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576123!2d-73.98811768459398!3d40.758895979327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Clinic Location"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

