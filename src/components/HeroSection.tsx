import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import graduacionHorizontal2 from '../assets/graduacion-vertical-2.png';
import viajeVertical1 from '../assets/viaje-vertical-1.png';

export const HeroSection = () => {
  const currentYear = new Date().getFullYear();

  // Función para manejar el clic en el botón de WhatsApp
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+56994766124?text=Hola,%20me%20interesa%20un%20cuadro%20personalizado%20para%20mi%20graduación', '_blank');
  };

  return (
    <section className="bg-gradient-to-b from-amor-rosa/10 to-amor-malva/10 min-h-[90vh] flex items-center pt-16 md:pt-24 overflow-x-hidden">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Vista móvil */}
        <div className="md:hidden">
          <div className="mb-10">
            <motion.div 
              className="w-full text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-amor-verde-oscuro mb-3">
                Enmarca tu <span className="text-amor-rosa">graduación</span> y conserva el recuerdo para siempre
              </h1>
              <h2 className="text-lg sm:text-xl text-amor-gris mb-6">
                Cuadros personalizados para todos tus momentos especiales: 
                cumpleaños, aniversarios y mucho más
              </h2>
              <div className="flex flex-col gap-4 justify-center">
                <motion.button
                  className="w-full bg-amor-verde-claro hover:bg-amor-verde-medio text-white font-semibold py-3 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all"
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span className="whitespace-nowrap">Consultar por WhatsApp</span>
                </motion.button>
                
                <Link to="/graduaciones" className="w-full">
                  <motion.button
                    className="w-full bg-amor-rosa hover:bg-amor-malva text-white font-semibold py-3 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="absolute top-0 right-0 bg-white text-amor-rosa text-xs font-bold px-2 py-1 rotate-12 translate-x-2 -translate-y-1">
                      {currentYear}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <span className="whitespace-nowrap">Reservar Graduación</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="relative px-4">
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative max-w-sm mx-auto">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amor-rosa/10 rounded-full filter blur-3xl z-0"></div>
                
                <div className="relative bg-white p-5 rounded-3xl shadow-xl z-10">
                  <img 
                    src={graduacionHorizontal2} 
                    alt="Cuadro de graduación personalizado" 
                    className="rounded-xl w-full h-auto"
                    loading="lazy"
                  />
                
                  <div className="absolute -bottom-12 -left-8 bg-white p-3 rounded-xl shadow-lg transform -rotate-3 w-40 sm:w-44">
                    <img 
                      src={viajeVertical1}
                      alt="Cuadro de viaje personalizado" 
                      className="rounded-lg w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Vista desktop */}
        <div className="hidden md:flex md:flex-row items-center justify-between gap-10">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amor-verde-oscuro mb-4">
              Enmarca tu <span className="text-amor-rosa">graduación</span> y conserva el recuerdo para siempre
            </h1>
            <h2 className="text-xl md:text-2xl text-amor-gris mb-8">
              Cuadros personalizados para todos tus momentos especiales: 
              cumpleaños, aniversarios y mucho más
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-amor-verde-claro hover:bg-amor-verde-medio text-white font-semibold py-3 px-8 rounded-lg shadow-lg flex items-center gap-2 transition-all"
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Consultar por WhatsApp
              </motion.button>
              
              <Link to="/graduaciones">
                <motion.button
                  className="bg-amor-rosa hover:bg-amor-malva text-white font-semibold py-3 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute top-0 right-0 bg-white text-amor-rosa text-xs font-bold px-2 py-1 rotate-12 translate-x-2 -translate-y-1">
                    {currentYear}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  Reservar Graduación
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-amor-rosa/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-amor-verde-claro/20 rounded-full filter blur-3xl"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-xl transform rotate-3">
                <div className="bg-amor-verde-oscuro/10 p-2 rounded-xl">
                  <img 
                    src={graduacionHorizontal2} 
                    alt="Cuadro de graduación personalizado" 
                    className="rounded-lg object-cover w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-3 rounded-xl shadow-lg transform -rotate-6">
                <div className="bg-amor-rosa/10 p-1 rounded-lg">
                  <img 
                    src={viajeVertical1}
                    alt="Cuadro de viaje personalizado" 
                    className="rounded-lg object-cover w-72 h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 