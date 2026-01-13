import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = ({
  children,
  className = '',
  hover = true,
  to,
  onClick,
  image,
  title,
  description,
  footer,
  ...props
}) => {
  const cardContent = (
    <motion.div
      className={`card h-100 border-0 shadow-sm ${className}`}
      whileHover={hover ? { y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' } : {}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      style={{ cursor: onClick || to ? 'pointer' : 'default' }}
      {...props}
    >
      {image && (
        <div className="card-img-top overflow-hidden" style={{ height: '200px' }}>
          <img
            src={image}
            alt={title || 'Card image'}
            className="w-100 h-100 object-fit-cover"
            style={{ transition: 'transform 0.3s' }}
            onMouseEnter={(e) => {
              if (hover) e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          />
        </div>
      )}
      {(title || description || children) && (
        <div className="card-body">
          {title && <h5 className="card-title fw-bold">{title}</h5>}
          {description && <p className="card-text text-muted">{description}</p>}
          {children}
        </div>
      )}
      {footer && <div className="card-footer bg-transparent border-0">{footer}</div>}
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} className="text-decoration-none text-dark">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default Card;

