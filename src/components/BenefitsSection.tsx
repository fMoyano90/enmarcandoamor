import { motion } from 'framer-motion';

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const BenefitItem = ({ icon, title, description, index }: BenefitItemProps) => {
  return (
    <motion.div 
      className="flex gap-4"
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex-shrink-0 mt-1">
        <div className="bg-amor-rosa/10 text-amor-rosa p-3 rounded-full">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-amor-verde-oscuro">{title}</h3>
        <p className="text-amor-gris">{description}</p>
      </div>
    </motion.div>
  );
};

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: "Personalización Exclusiva",
      description: "Cada cuadro es único, diseñado especialmente para ti. Incluimos tus fotos, colores y elementos que reflejen tu personalidad."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Calidad en Acabados",
      description: "Utilizamos materiales de primera calidad para garantizar durabilidad y belleza en cada uno de nuestros productos."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Entregas Rápidas",
      description: "Realizamos envíos a todo Chile, asegurando que tu cuadro llegue en perfectas condiciones y en el tiempo prometido."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Preservamos Emociones",
      description: "No solo creamos cuadros, inmortalizamos momentos y emociones que perdurarán en el tiempo como un tesoro invaluable."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-amor-verde-claro/5 to-amor-rosa/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-amor-rosa/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-amor-verde-claro/20 rounded-full filter blur-3xl"></div>
              <div className="relative">
                <img 
                  src="https://via.placeholder.com/600x500?text=Cuadros+Personalizados" 
                  alt="Cuadro personalizado con emociones" 
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px]">
                  <p className="text-amor-rosa font-medium text-sm">"Cada cuadro cuenta una historia única y especial, la tuya."</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-amor-verde-oscuro mb-4">Nuestros Valores y Beneficios</h2>
              <p className="text-amor-gris mb-8">
                En Enmarcando Amor nos esforzamos por ofrecerte no solo un producto, sino una experiencia que perdurará para siempre en tus recuerdos.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {benefits.map((benefit, index) => (
                <BenefitItem 
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 