import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-center py-20 gap-10">
            {/* Imagen/Animación */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-amor-rosa/20 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amor-verde-claro/20 rounded-full filter blur-3xl"></div>
                <div className="relative">
                  <motion.div 
                    className="text-[240px] font-extrabold leading-none text-center text-amor-rosa opacity-50"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    404
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Texto y CTA */}
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-amor-verde-oscuro mb-4">
                ¡Página no encontrada!
              </h1>
              <h2 className="text-xl md:text-2xl text-amor-gris mb-8">
                Parece que te has perdido en el camino. No te preocupes, a veces el amor también toma desvíos inesperados.
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/">
                  <motion.button 
                    className="bg-amor-rosa hover:bg-amor-malva text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-all w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Volver al inicio
                  </motion.button>
                </Link>
                
                <motion.button 
                  className="bg-amor-verde-claro/10 hover:bg-amor-verde-claro/20 text-amor-verde-oscuro font-medium py-3 px-8 rounded-lg transition-all w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.history.back()}
                >
                  Volver atrás
                </motion.button>
              </div>
              
              <div className="mt-10 text-amor-gris text-center lg:text-left">
                <p>¿Necesitas ayuda? Contáctanos por WhatsApp</p>
                <motion.a 
                  href="https://wa.me/+56994766124?text=Hola,%20estoy%20navegando%20en%20su%20sitio%20y%20necesito%20ayuda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amor-rosa hover:text-amor-malva mt-2 transition-colors"
                  whileHover={{ scale: 1.03 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contactar por WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
