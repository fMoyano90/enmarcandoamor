import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, price, delay }: ServiceCardProps) => {
  const handleWhatsAppClick = () => {
    const message = `Hola, me interesa obtener información sobre sus servicios de ${title}.`;
    window.open(`https://wa.me/+56994766124?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="h-24 md:h-48 bg-amor-verde-claro/10 flex items-center justify-center group-hover:bg-amor-verde-claro/20 transition-colors">
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-amor-verde-oscuro mb-2">{title}</h3>
        <p className="text-amor-gris mb-6">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="bg-amor-rosa/10 text-amor-rosa px-3 py-1 rounded-lg">
            <span className="text-xs font-medium">Desde</span>
            <span className="text-lg font-bold ml-1">{price}</span>
          </div>
          <button 
            onClick={handleWhatsAppClick}
            className="text-amor-verde-oscuro hover:text-amor-rosa transition-colors font-medium flex items-center gap-1"
          >
            <span>Hablar por WhatsApp</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <section id="servicios" className="py-20 bg-amor-verde-claro/5 overflow-x-hidden">
      <div className="px-4 sm:px-6 md:px-8">
        <motion.div 
          className="text-center mb-12 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amor-verde-oscuro mb-4">Nuestros Servicios Destacados</h2>
          <p className="text-amor-gris max-w-2xl mx-auto">
            Creamos cuadros personalizados que capturan la esencia de tus momentos más importantes.
            Cada pieza es única y diseñada especialmente para ti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="h-24 md:h-48 bg-amor-verde-claro/10 flex items-center justify-center group-hover:bg-amor-verde-claro/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 text-amor-verde-oscuro" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amor-verde-oscuro mb-2">Cuadros de Graduación</h3>
              <p className="text-amor-gris mb-6">
                Conmemora ese día tan especial con un diseño único que captura el logro académico y la emoción del momento.
              </p>
              <div className="flex justify-between items-center">
                <div className="bg-amor-rosa/10 text-amor-rosa px-3 py-1 rounded-lg">
                  <span className="text-xs font-medium">Desde</span>
                  <span className="text-lg font-bold ml-1">$13.000</span>
                </div>
                <Link 
                  to="/graduaciones" 
                  className="text-amor-verde-oscuro hover:text-amor-rosa transition-colors font-medium flex items-center gap-1"
                >
                  <span>Reservar {currentYear}</span>
                  <span className="bg-amor-rosa text-white text-xs px-2 py-0.5 rounded-full animate-pulse">Nuevo</span>
                </Link>
              </div>
            </div>
          </motion.div>
          
          <ServiceCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 text-amor-verde-oscuro" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            } 
            title="Cumpleaños y Aniversarios" 
            description="Regala un recuerdo único y personalizado para celebrar fechas especiales que quedarán plasmadas para siempre." 
            price="$8.000"
            delay={0.2}
          />
          
          <ServiceCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 text-amor-verde-oscuro" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            } 
            title="Día del Amor y Regalos Personalizados" 
            description="Sorprende a esa persona especial con un regalo único que represente su historia de amor y momentos compartidos." 
            price="$8.000"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
