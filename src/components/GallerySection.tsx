import { motion } from 'framer-motion';
import { useState } from 'react';

import graduacionHorizontal2 from '../assets/graduacion-horizontal-2.png';
import graduacionHorizontal3 from '../assets/graduacion-horizontal-3.png';

import graduacionHorizontal1 from '../assets/graduacion-horizontal-1.png';
import viajeHorizontal1 from '../assets/viaje-horizontal-1.png';
import graduacionVertical1 from '../assets/graduacion-vertical-1.png';
// import graduacionHorizontal1 from '../assets/graduacion-horizontal-1.png';
// import graduacionHorizontal1 from '../assets/graduacion-horizontal-1.png';

// Definimos las imágenes de la galería
const galleryImages = [
  {
    id: 1,
    src: graduacionHorizontal2,
    alt: 'Cuadro de graduación personalizado',
    category: 'Graduación'
  },
  {
    id: 2,
    src: viajeHorizontal1,
    alt: 'Cuadro de viaje personalizado',
    category: 'Aniversario'
  },
  {
    id: 3,
    src: graduacionHorizontal1,
    alt: 'Cuadro de graduación personalizado',
    category: 'Graduación'
  },
  {
    id: 4,
    src: graduacionVertical1,
    alt: 'Cuadro especial día del amor',
    category: 'Amor'
  },
  {
    id: 5,
    src: graduacionHorizontal3,
    alt: 'Cuadro de graduación personalizado',
    category: 'Graduación'
  },
  {
    id: 6,
    src: graduacionHorizontal2,
    alt: 'Cuadro de graduación personalizado con fotos',
    category: 'Graduación'
  }
];

interface GalleryImageProps {
  src: string;
  alt: string;
  category: string;
  index: number;
  onClick: () => void;
}

const GalleryImage = ({ src, alt, category, index, onClick }: GalleryImageProps) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer aspect-[4/3]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
    >
      <div className="w-full h-full">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <div>
          <span className="inline-block bg-amor-rosa text-white px-2 py-1 rounded text-xs mb-2">{category}</span>
          <h3 className="text-white font-medium">{alt}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section id="galeria" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amor-verde-oscuro mb-4">Nuestra Galería</h2>
          <p className="text-amor-gris max-w-2xl mx-auto">
            Explora algunos de nuestros trabajos más destacados. Cada cuadro cuenta una historia única y especial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage 
              key={image.id} 
              {...image} 
              index={index} 
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>

        {/* Lightbox modal */}
        {lightboxOpen && currentImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <div className="relative max-w-4xl mx-auto w-full" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute top-4 right-4 text-white bg-amor-rosa/80 rounded-full p-2 hover:bg-amor-rosa transition-colors"
                onClick={closeLightbox}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={galleryImages[currentImage].src} 
                alt={galleryImages[currentImage].alt} 
                className="max-h-[80vh] max-w-full mx-auto object-contain"
              />
              <div className="text-white text-center mt-4">
                <p>{galleryImages[currentImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}; 