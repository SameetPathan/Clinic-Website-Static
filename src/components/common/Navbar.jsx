import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaPhone, 
  FaChevronDown
} from 'react-icons/fa';
import { CLINIC_NAME } from '../../utils/constants';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { 
      path: '/services', 
      label: 'Services',
      hasDropdown: true,
      dropdownItems: [
        { path: '/services', label: 'All Services' },
        { path: '/services/dental', label: 'Dental Services' },
        { path: '/services/cosmetology', label: 'Cosmetology Services' }
      ]
    },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/team', label: 'Our Team' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className="navbar navbar-expand-lg fixed-top"
      style={{ 
        background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)',
        padding: '0.75rem 0',
        boxShadow: '0 2px 15px rgba(13, 148, 136, 0.2)',
        zIndex: 1000 
      }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" style={{ fontSize: '1.25rem' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="fw-bold text-white">{CLINIC_NAME}</span>
          </motion.div>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
          style={{ color: 'white' }}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-white" size={24} />
          ) : (
            <FaBars className="text-white" size={24} />
          )}
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center" style={{ flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item position-relative">
                {link.hasDropdown ? (
                  <div
                    className="nav-link position-relative text-white"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    style={{ cursor: 'pointer', fontWeight: '500' }}
                  >
                    <span className="d-flex align-items-center">
                      {link.label}
                      <FaChevronDown className="ms-1" size={12} />
                    </span>
                    {isServicesDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="dropdown-menu show position-absolute"
                        style={{ 
                          top: '100%', 
                          left: 0, 
                          minWidth: '200px', 
                          zIndex: 1001,
                          marginTop: '0.5rem'
                        }}
                        onMouseEnter={() => setIsServicesDropdownOpen(true)}
                        onMouseLeave={() => setIsServicesDropdownOpen(false)}
                      >
                        {link.dropdownItems.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              className={`dropdown-item ${
                                isActive(item.path) ? 'active' : ''
                              }`}
                              to={item.path}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsServicesDropdownOpen(false);
                              }}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                ) : (
                  <Link
                    className={`nav-link text-white ${isActive(link.path) ? 'active fw-bold' : ''}`}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ fontWeight: '500' }}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="nav-item ms-lg-2 mt-3 mt-lg-0" style={{ flexShrink: 0 }}>
              <Link
                to="/appointment"
                className="btn btn-light rounded-pill px-3 fw-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: '#0d9488', fontSize: '0.875rem', whiteSpace: 'nowrap', fontWeight: '600' }}
              >
                Book Now
              </Link>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0" style={{ flexShrink: 0 }}>
              <a
                href={`tel:${process.env.REACT_APP_PHONE || '+15551234567'}`}
                className="btn btn-outline-light rounded-pill px-2 fw-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontSize: '0.875rem', whiteSpace: 'nowrap', borderWidth: '2px' }}
              >
                <FaPhone className="me-1" />
                <span className="d-none d-lg-inline">Call</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
