import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1606811971618-4486c4e32d89?w=1920',
      title: 'Welcome to AdityaClinic',
      subtitle: 'Your Trusted Partner in Dental & Cosmetology Care',
      description: 'Experience world-class dental and aesthetic treatments in a comfortable, modern environment.',
      ctaText: 'Book Appointment'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1920',
      title: 'Expert Dental Care',
      subtitle: 'Comprehensive Dental Solutions',
      description: 'From routine checkups to advanced cosmetic procedures, we provide exceptional dental care.',
      ctaText: 'Our Services'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920',
      title: 'Advanced Cosmetology',
      subtitle: 'Beauty & Wellness Treatments',
      description: 'Transform your appearance with our state-of-the-art cosmetology and aesthetic services.',
      ctaText: 'Learn More'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920',
      title: 'Modern Technology',
      subtitle: 'Cutting-Edge Equipment',
      description: 'We use the latest technology and techniques to ensure the best results for our patients.',
      ctaText: 'Our Technology'
    }
  ];

  return (
    <section className="hero-slider position-relative" style={{ height: 'calc(100vh - 70px)', minHeight: '600px', marginTop: '70px' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="h-100"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="position-relative w-100 h-100"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Subtle dark overlay for text readability */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)'
                }}
              />

              {/* Content */}
              <div className="container h-100 d-flex align-items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-white position-relative"
                  style={{ zIndex: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                >
                  <motion.h1
                    className="display-3 fw-bold mb-3"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.h2
                    className="h3 mb-4 text-light"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slide.subtitle}
                  </motion.h2>
                  <motion.p
                    className="lead mb-4"
                    style={{ maxWidth: '600px' }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <Link
                      to="/appointment"
                      className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-semibold d-inline-flex align-items-center"
                    >
                      {slide.ctaText}
                      <FaArrowRight className="ms-2" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;

