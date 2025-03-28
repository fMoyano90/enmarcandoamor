import { motion } from 'framer-motion';

export const CtaSection = () => {
  // Función para manejar el clic en el botón de WhatsApp
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+56994766124?text=Hola,%20quiero%20personalizar%20un%20cuadro%20especial%20para%20una%20ocasión%20importante', '_blank');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amor-rosa/10 to-amor-verde-claro/10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amor-rosa/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amor-verde-claro/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amor-verde-oscuro mb-4">¿Listo para plasmar tus recuerdos?</h2>
            <p className="text-amor-gris max-w-2xl mx-auto">
              Personaliza ahora tu cuadro especial y conserva para siempre tus momentos más preciados. 
              El proceso es simple y el resultado, inolvidable.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.div 
              className="bg-amor-rosa/10 p-6 rounded-xl flex flex-col items-center md:items-start text-center md:text-left max-w-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-amor-rosa/20 text-amor-rosa p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amor-verde-oscuro">Contáctanos por WhatsApp</h3>
              <p className="text-amor-gris">
                Cuéntanos qué momento especial quieres inmortalizar y te asesoraremos en todo el proceso.
              </p>
            </motion.div>

            <motion.div 
              className="bg-amor-verde-claro/10 p-6 rounded-xl flex flex-col items-center md:items-start text-center md:text-left max-w-sm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-amor-verde-claro/20 text-amor-verde-medio p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amor-verde-oscuro">Envíanos tus fotos</h3>
              <p className="text-amor-gris">
                Comparte las imágenes que deseas incluir en tu cuadro personalizado y cuéntanos tu historia.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-amor-rosa hover:bg-amor-malva text-white font-semibold py-3 px-6 sm:py-4 sm:px-10 rounded-lg shadow-lg flex items-center justify-center gap-2 mx-auto transition-all w-full sm:w-auto"
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-sm sm:text-base">Personaliza tu cuadro ahora</span>
            </motion.button>
            <p className="mt-4 text-amor-gris text-sm">
              Te responderemos en menos de 24 horas para comenzar a crear tu cuadro personalizado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 