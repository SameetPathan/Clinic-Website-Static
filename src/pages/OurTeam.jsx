import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TEAM_MEMBERS } from '../utils/constants';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Card from '../components/common/Card';

const TeamMember = ({ member, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="col-lg-3 col-md-6 mb-4"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="card border-0 shadow-sm h-100"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)'
          }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="card-img-top"
            style={{ height: '300px', objectFit: 'cover' }}
          />
          <div className="card-body text-center">
            <h5 className="fw-bold mb-1">{member.name}</h5>
            <p className="text-primary mb-1">{member.designation}</p>
            <p className="text-muted small mb-0">{member.specialization}</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="card-body d-flex flex-column justify-content-center text-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
          }}
        >
          <h5 className="fw-bold mb-2">{member.name}</h5>
          <p className="mb-2">{member.qualifications}</p>
          <p className="mb-3 small">{member.experience}</p>
          <p className="mb-3 small">{member.bio}</p>
          <div className="d-flex justify-content-center gap-3">
            <FaLinkedin size={20} style={{ cursor: 'pointer' }} />
            <FaTwitter size={20} style={{ cursor: 'pointer' }} />
            <FaEnvelope size={20} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const OurTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
            <h1 className="display-4 fw-bold mb-3">Our Team</h1>
            <p className="lead">Meet the experts dedicated to your care</p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section ref={ref} className="py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3">Expert Professionals</h2>
            <p className="lead text-muted">
              Our team of experienced doctors and specialists
            </p>
          </motion.div>

          <div className="row">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamMember key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;

