import { motion } from 'framer-motion';
import { useState } from 'react';
import testimonio1 from '../assets/testimonio1.jpeg';

// Datos de testimonios
const testimonials = [
  {
    id: 1,
    name: 'Roxana Rodriguez',
    role: 'Apoderada Colegio San Sebastián, Los Andes. 4to Medio A - 2024',
    text: 'Recomiendo 💯% los Servicios Fotográficos. La  Atención prestada es cordial, te ayuda a elegir la mejor opción  en diseño. Sus tiempos de entrega  se cumplen en el plazo establecido y su precio es acordé al mercado. Experiencia cómoda y grata. 👌🏻',
    avatar: testimonio1
  },
  {
    id: 2,
    name: 'Roberto Sánchez',
    role: 'Cliente Aniversario',
    text: 'Regalé a mi esposa un cuadro personalizado por nuestro aniversario y se emocionó hasta las lágrimas. La calidad y los detalles son excepcionales. ¡Sin duda volveré a comprar para otras ocasiones!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Valentina Torres',
    role: 'Mamá Primeriza',
    text: 'Encargué un cuadro para el primer cumpleaños de mi hijo y quedó perfecto. Es un recuerdo que atesoraremos para siempre. La atención personalizada y la rapidez en la entrega fueron excelentes.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Función para renderizar los indicadores de testimonios
  const renderDots = () => {
    return testimonials.map((_, index) => (
      <button
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`w-3 h-3 rounded-full mx-1 ${
          activeIndex === index ? 'bg-amor-rosa' : 'bg-gray-300'
        }`}
        aria-label={`Ver testimonio ${index + 1}`}
      />
    ));
  };

  return (
    <section id="testimonios" className="py-20 bg-amor-verde-oscuro/5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amor-verde-oscuro mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-amor-gris max-w-2xl mx-auto">
            Nos enorgullece ver cómo nuestros cuadros se convierten en parte importante de los recuerdos de nuestros clientes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden pb-10">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full object-cover border-4 border-amor-rosa/20"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-amor-rosa mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-amor-gris italic mb-4">"{testimonial.text}"</p>
                        <div>
                          <h4 className="font-semibold text-amor-verde-oscuro">{testimonial.name}</h4>
                          <p className="text-amor-malva text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-2">
            <button 
              onClick={prevTestimonial}
              className="bg-white text-amor-rosa rounded-full p-2 shadow-md hover:bg-amor-rosa hover:text-white transition-colors"
              aria-label="Testimonio anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white text-amor-rosa rounded-full p-2 shadow-md hover:bg-amor-rosa hover:text-white transition-colors"
              aria-label="Siguiente testimonio"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-6">
            {renderDots()}
          </div>
        </div>
      </div>
    </section>
  );
}; 