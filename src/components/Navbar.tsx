import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logoSvg from '../assets/logo.svg';

export const Navbar = () => {
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Verificar si estamos en la página de graduaciones
  const isGraduacionesPage = location.pathname.includes('/graduaciones');

  // Función para manejar el scroll y cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para cerrar el menú móvil cuando se hace clic en un enlace
  const handleLinkClick = (sectionId: string) => {
    setIsOpen(false);
    
    // Scroll suave hacia la sección
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Función para manejar el clic en el botón de WhatsApp
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+56994766124?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20cuadros%20personalizados', '_blank');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <img 
                src={logoSvg} 
                alt="Enmarcando Amor" 
                className="h-12 w-auto mr-2" 
              />
            </Link>
          </motion.div>

          {/* Enlaces de navegación para pantallas medianas y grandes */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {isGraduacionesPage ? (
              <>
                <Link 
                  to="/" 
                  className={`font-medium hover:text-amor-rosa transition-colors ${
                    isScrolled ? 'text-amor-gris' : 'text-amor-verde-oscuro'
                  }`}
                >
                  Inicio
                </Link>
                <a 
                  onClick={() => handleLinkClick('precios')} 
                  className={`font-medium hover:text-amor-rosa transition-colors cursor-pointer ${
                    isScrolled ? 'text-amor-gris' : 'text-amor-verde-oscuro'
                  }`}
                >
                  Precios
                </a>
                <a 
                  onClick={() => handleLinkClick('proceso')} 
                  className={`font-medium hover:text-amor-rosa transition-colors cursor-pointer ${
                    isScrolled ? 'text-amor-gris' : 'text-amor-verde-oscuro'
                  }`}
                >
                  Proceso
                </a>
                <a 
                  onClick={() => handleLinkClick('formulario')} 
                  className={`font-medium hover:text-amor-rosa transition-colors cursor-pointer ${
                    isScrolled ? 'text-amor-gris' : 'text-amor-verde-oscuro'
                  }`}
                >
                  Reservar
                </a>
              </>
            ) : (
              <>
                <a 
                  onClick={() => handleLinkClick('servicios')} 
                  className={`font-medium hover:text-amor-rosa transition-colors cursor-pointer ${
                    isScrolled ? 'text-amor-gris' : 'text-amor-verde-oscuro'
                  }`}
                >
                  Servicios
                </a>
                <a 
                  onClick={() => handleLinkClick('galeria')} 
                  className={`font-medium hover:text-amor-rosa transition-colors cursor-pointer ${
                    isScrolled ? 'text-amor-gris' : 'text-amor-verde-oscuro'
                  }`}
                >
                  Galería
                </a>
                <a 
                  onClick={() => handleLinkClick('beneficios')} 
                  className={`font-medium hover:text-amor-rosa transition-colors cursor-pointer ${
                    isScrolled ? 'text-amor-gris' : 'text-amor-verde-oscuro'
                  }`}
                >
                  Beneficios
                </a>
                <a 
                  onClick={() => handleLinkClick('testimonios')} 
                  className={`font-medium hover:text-amor-rosa transition-colors cursor-pointer ${
                    isScrolled ? 'text-amor-gris' : 'text-amor-verde-oscuro'
                  }`}
                >
                  Testimonios
                </a>
                <Link 
                  to="/graduaciones" 
                  className="font-medium text-white bg-amor-rosa hover:bg-amor-malva px-4 py-1.5 rounded-full transition-colors animate-pulse"
                >
                  Graduaciones {currentYear}
                </Link>
              </>
            )}
          </motion.div>

          {/* Botón CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <button 
              onClick={handleWhatsAppClick}
              className="bg-amor-rosa hover:bg-amor-malva text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Contactar</span>
            </button>
          </motion.div>

          {/* Botón menú hamburguesa para móviles */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`focus:outline-none ${isScrolled ? 'text-amor-verde-oscuro' : 'text-amor-verde-oscuro'}`}
              aria-label="Menú"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {isGraduacionesPage ? (
                  <>
                    <Link 
                      to="/" 
                      className="font-medium text-amor-gris hover:text-amor-rosa transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Inicio
                    </Link>
                    <a 
                      onClick={() => handleLinkClick('precios')} 
                      className="font-medium text-amor-gris hover:text-amor-rosa transition-colors cursor-pointer"
                    >
                      Precios
                    </a>
                    <a 
                      onClick={() => handleLinkClick('proceso')} 
                      className="font-medium text-amor-gris hover:text-amor-rosa transition-colors cursor-pointer"
                    >
                      Proceso
                    </a>
                    <a 
                      onClick={() => handleLinkClick('formulario')} 
                      className="font-medium text-amor-gris hover:text-amor-rosa transition-colors cursor-pointer"
                    >
                      Reservar
                    </a>
                  </>
                ) : (
                  <>
                    <a 
                      onClick={() => handleLinkClick('servicios')} 
                      className="font-medium text-amor-gris hover:text-amor-rosa transition-colors cursor-pointer"
                    >
                      Servicios
                    </a>
                    <a 
                      onClick={() => handleLinkClick('galeria')} 
                      className="font-medium text-amor-gris hover:text-amor-rosa transition-colors cursor-pointer"
                    >
                      Galería
                    </a>
                    <a 
                      onClick={() => handleLinkClick('beneficios')} 
                      className="font-medium text-amor-gris hover:text-amor-rosa transition-colors cursor-pointer"
                    >
                      Beneficios
                    </a>
                    <a 
                      onClick={() => handleLinkClick('testimonios')} 
                      className="font-medium text-amor-gris hover:text-amor-rosa transition-colors cursor-pointer"
                    >
                      Testimonios
                    </a>
                    <Link 
                      to="/graduaciones" 
                      className="font-medium text-amor-rosa hover:text-amor-malva transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      🎓 Graduaciones {currentYear}
                    </Link>
                  </>
                )}
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-amor-rosa hover:bg-amor-malva text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors w-full"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Contactar por WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}; 