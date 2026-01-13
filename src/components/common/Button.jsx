import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseClasses = 'btn rounded-pill fw-semibold d-inline-flex align-items-center justify-content-center';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline-primary',
    success: 'btn-success',
    danger: 'btn-danger',
    light: 'btn-light',
    dark: 'btn-dark'
  };
  const sizeClasses = {
    sm: 'btn-sm px-3 py-1',
    md: 'px-4 py-2',
    lg: 'btn-lg px-5 py-3'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="me-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ms-2">{icon}</span>}
    </>
  );

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.05, y: disabled ? 0 : -2 },
    whileTap: { scale: disabled ? 1 : 0.95 },
    transition: { duration: 0.2 }
  };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={classes} {...props}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;

