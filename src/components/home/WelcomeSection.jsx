import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { STATISTICS } from '../../utils/constants';
import { FaUsers, FaAward, FaUserMd, FaStethoscope } from 'react-icons/fa';

const iconMap = {
  FaUsers,
  FaAward,
  FaUserMd,
  FaStethoscope
};

const Counter = ({ end, label, icon: Icon, delay = 0 }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = parseInt(end) / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= parseInt(end)) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="mb-3">
        <Icon size={48} className="text-primary" />
      </div>
      <h2 className="display-4 fw-bold text-primary mb-2">
        {count}{end.includes('+') ? '+' : ''}
      </h2>
      <p className="text-muted fw-semibold">{label}</p>
    </motion.div>
  );
};

const WelcomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-5 bg-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="row mb-5"
        >
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-4">Welcome to AdityaClinic</h2>
            <p className="lead text-muted mb-4">
              At AdityaClinic, we are committed to providing exceptional dental and cosmetology 
              services that enhance your health, beauty, and confidence. Our team of experienced 
              professionals uses state-of-the-art technology and follows the latest industry 
              standards to ensure you receive the best care possible.
            </p>
            <p className="text-muted">
              Whether you're looking for routine dental care, cosmetic enhancements, or advanced 
              aesthetic treatments, we offer comprehensive solutions tailored to your unique needs. 
              Our patient-centered approach ensures a comfortable and stress-free experience from 
              consultation to treatment completion.
            </p>
          </div>
        </motion.div>

        {/* Statistics */}
        <div className="row g-4 mt-4">
          {STATISTICS.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <div key={index} className="col-lg-3 col-md-6">
                <Counter
                  end={stat.value}
                  label={stat.label}
                  icon={Icon}
                  delay={index * 0.1}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

