import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images
  const galleryImages = [
    {
      id: 1,
      src: '/7.jpg',
      category: 'hackathon',
      title: 'CodeVeda 1.0 Moments',
      description: 'Memories from the event'
    },
    {
      id: 2,
      src: '/8.jpg',
      category: 'hackathon',
      title: 'CodeVeda 1.0 Moments',
      description: 'Innovation in action'
    },
    {
      id: 3,
      src: '/9.jpg',
      category: 'workshop',
      title: 'CodeVeda 1.0 Moments',
      description: 'Learning and growing together'
    },
    {
      id: 4,
      src: '/10.jpg',
      category: 'winners',
      title: 'CodeVeda 1.0 Moments',
      description: 'Celebrating excellence'
    },
    {
      id: 5,
      src: '/1.jpg',
      category: 'hackathon',
      title: 'CodeVeda 1.0 Moments',
      description: 'Community gathering'
    },
    {
      id: 6,
      src: '/13.jpg',
      category: 'workshop',
      title: 'CodeVeda 1.0 Moments',
      description: 'Event highlights'
    },
    {
      id: 7,
      src: '/15.jpg',
      category: 'winners',
      title: 'CodeVeda 1.0 Moments',
      description: 'Team collaboration'
    },
     {
      id: 7,
      src: '/12.jpeg',
      category: 'winners',
      title: 'CodeVeda 1.0 Moments',
      description: 'Team collaboration'
    },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const showPrevious = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#140724_0%,#0f0622_50%,#1a0b2e_100%)] text-white">
      <Navbar />
      
      {/* Starfield Background */}
      <div className="fixed inset-0 pointer-events-none opacity-40"
           style={{
             backgroundImage: `
              radial-gradient(2px 2px at 20% 30%, white, transparent),
              radial-gradient(2px 2px at 60% 70%, white, transparent),
              radial-gradient(1px 1px at 50% 50%, white, transparent),
              radial-gradient(1px 1px at 80% 10%, white, transparent),
              radial-gradient(2px 2px at 90% 60%, white, transparent),
              radial-gradient(1px 1px at 33% 80%, white, transparent)
             `,
             backgroundSize: '200% 200%'
           }}
      />

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-sm font-semibold tracking-wide uppercase mb-6"
          >
            Memories of Excellence
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Event Gallery
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Relive the moments of innovation, collaboration, and triumph from CodeVeda 1.0
          </motion.p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 hover:border-yellow-400/50"
                onClick={() => openLightbox(image)}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-slate-300 text-sm">{image.description}</p>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 blur-xl" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); showPrevious(); }}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl"
              />
              
              <div className="text-center mt-4">
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">{selectedImage.title}</h2>
                <p className="text-slate-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;