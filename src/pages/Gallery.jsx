import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'interior', label: 'Clinic Interior' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'results', label: 'Before/After' },
    { id: 'team', label: 'Team Activities' }
  ];

  const images = [
    { id: 1, category: 'interior', url: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800' },
    { id: 2, category: 'interior', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800' },
    { id: 3, category: 'equipment', url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800' },
    { id: 4, category: 'equipment', url: 'https://images.unsplash.com/photo-1606811971618-4486c4e32d89?w=800' },
    { id: 5, category: 'results', url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800' },
    { id: 6, category: 'results', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800' },
    { id: 7, category: 'team', url: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800' },
    { id: 8, category: 'team', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800' },
    { id: 9, category: 'interior', url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800' },
    { id: 10, category: 'equipment', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800' },
    { id: 11, category: 'results', url: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800' },
    { id: 12, category: 'team', url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800' }
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

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
            <h1 className="display-4 fw-bold mb-3">Gallery</h1>
            <p className="lead">Explore our clinic and see our work</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={ref} className="py-5">
        <div className="container">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="d-flex justify-content-center gap-2 mb-5 flex-wrap"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`btn rounded-pill px-4 ${
                  selectedCategory === cat.id
                    ? 'btn-primary'
                    : 'btn-outline-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <div className="row g-3">
            <AnimatePresence mode="wait">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="col-lg-4 col-md-6"
                >
                  <motion.div
                    className="position-relative overflow-hidden rounded shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(image)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={image.url}
                      alt={`Gallery ${image.id}`}
                      className="w-100"
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50"
                      style={{ opacity: 0, transition: 'opacity 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                    >
                      <span className="text-white fw-semibold">Click to view</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-90"
            style={{ zIndex: 9999 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="position-relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle"
                onClick={() => setSelectedImage(null)}
                style={{ zIndex: 10000 }}
              >
                <FaTimes />
              </button>
              <img
                src={selectedImage.url}
                alt="Selected"
                className="img-fluid rounded shadow-lg"
                style={{ maxHeight: '90vh', maxWidth: '90vw' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

