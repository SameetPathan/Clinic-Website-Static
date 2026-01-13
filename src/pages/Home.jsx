import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import WelcomeSection from '../components/home/WelcomeSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <WelcomeSection />
      <WhyChooseUs />
      <ServicesOverview />
      <Testimonials />
      
      {/* Call to Action Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="display-5 fw-bold mb-3">Ready to Transform Your Smile?</h2>
            <p className="lead mb-4">
              Book your appointment today and take the first step towards better health and confidence
            </p>
            <Link
              to="/appointment"
              className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-semibold d-inline-flex align-items-center"
            >
              Book Appointment Now <FaArrowRight className="ms-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

