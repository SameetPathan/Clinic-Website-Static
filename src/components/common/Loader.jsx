import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ size = 'md', fullScreen = false }) => {
  const sizeClasses = {
    sm: 'spinner-border-sm',
    md: '',
    lg: ''
  };

  const spinner = (
    <div className={`spinner-border text-primary ${sizeClasses[size]}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );

  if (fullScreen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-75"
        style={{ zIndex: 9999 }}
      >
        {spinner}
      </motion.div>
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center p-4">
      {spinner}
    </div>
  );
};

export default Loader;

