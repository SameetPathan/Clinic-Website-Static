import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';
import { CLINIC_NAME, CLINIC_TAGLINE, CONTACT_INFO, SOCIAL_LINKS, ALL_SERVICES } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/team', label: 'Our Team' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const mainServices = ALL_SERVICES.slice(0, 6);

  return (
    <footer className="text-light pt-5 pb-3" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
      <div className="container">
        <div className="row g-4">
          {/* About Clinic */}
          <div className="col-lg-3 col-md-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h5 className="fw-bold mb-3">{CLINIC_NAME}</h5>
              <p className="text-light-emphasis mb-3">{CLINIC_TAGLINE}</p>
              <p className="text-light-emphasis small">
                Providing exceptional dental and cosmetology services with care and expertise.
              </p>
              <div className="d-flex gap-3 mt-3">
                <motion.a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-light"
                >
                  <FaFacebook size={20} />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-light"
                >
                  <FaInstagram size={20} />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-light"
                >
                  <FaTwitter size={20} />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-light"
                >
                  <FaLinkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                {quickLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      to={link.path}
                      className="text-light-emphasis text-decoration-none"
                      style={{ transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.target.style.color = '#fff'}
                      onMouseLeave={(e) => e.target.style.color = ''}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h5 className="fw-bold mb-3">Services</h5>
              <ul className="list-unstyled">
                {mainServices.map((service) => (
                  <li key={service.id} className="mb-2">
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-light-emphasis text-decoration-none"
                      style={{ transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.target.style.color = '#fff'}
                      onMouseLeave={(e) => e.target.style.color = ''}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li className="mt-2">
                  <Link
                    to="/services"
                    className="text-primary text-decoration-none fw-semibold"
                  >
                    View All Services →
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h5 className="fw-bold mb-3">Contact Info</h5>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <FaMapMarkerAlt className="text-primary me-2 mt-1" />
                  <span className="text-light-emphasis">{CONTACT_INFO.address}</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaPhone className="text-primary me-2" />
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-light-emphasis text-decoration-none"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaEnvelope className="text-primary me-2" />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-light-emphasis text-decoration-none"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <FaClock className="text-primary me-2 mt-1" />
                  <div className="text-light-emphasis">
                    <div>{CONTACT_INFO.workingHours.weekdays}</div>
                    <div>{CONTACT_INFO.workingHours.saturday}</div>
                    <div>{CONTACT_INFO.workingHours.sunday}</div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="row mt-4 pt-4 border-top border-secondary"
        >
          <div className="col-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
              <p className="text-light-emphasis mb-2 mb-md-0">
                &copy; {currentYear} {CLINIC_NAME}. All rights reserved.
              </p>
              <div className="d-flex gap-3">
                <Link to="/privacy" className="text-light-emphasis text-decoration-none">
                  Privacy Policy
                </Link>
                <span className="text-light-emphasis">|</span>
                <Link to="/terms" className="text-light-emphasis text-decoration-none">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

