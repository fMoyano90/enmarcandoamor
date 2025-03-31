import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

import graduacionHorizontal1 from '../assets/graduacion-vertical-1.png';


export const GraduacionesPage = () => {
  const currentYear = new Date().getFullYear();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    institucion: '',
    curso: '',
    direccion: '',
    encargada: '',
    diseno: '',
    cantidad: '',
    profesorLlevaCuadro: 'no',
    listadoAlumnos: '',
    nombreProfesor: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      profesorLlevaCuadro: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Enviamos todos los campos del formulario directamente
    const templateParams = {
      institucion: formData.institucion,
      curso: formData.curso,
      direccion: formData.direccion,
      encargada: formData.encargada,
      diseno: formData.diseno,
      cantidad: formData.cantidad,
      profesorLlevaCuadro: formData.profesorLlevaCuadro,
      nombreProfesor: formData.nombreProfesor,
      listadoAlumnos: formData.listadoAlumnos,
      anio: currentYear
    };

    // Enviar el formulario por email
    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    .then((result) => {
      console.log('Email enviado!', result.text);
      setFormSubmitted(true);
      setIsSubmitting(false);
      
      // Opcional: También podemos enviar a WhatsApp
      const mensaje = `Hola, acabo de reservar una sesión para Graduaciones ${currentYear}. Institución: ${formData.institucion}, Curso: ${formData.curso}, Cantidad de cuadros: ${formData.cantidad}`;
      window.open(`https://wa.me/+56994766124?text=${encodeURIComponent(mensaje)}`, '_blank');
    }, (error) => {
      console.error('Error al enviar email:', error.text);
      setSubmitError('Hubo un error al enviar el formulario. Por favor intenta de nuevo o contáctanos por WhatsApp.');
      setIsSubmitting(false);
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20 overflow-x-hidden">
        {/* Hero Section para Graduaciones */}
        <section className="bg-gradient-to-b from-amor-rosa/10 to-amor-malva/10 py-20 overflow-x-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amor-verde-oscuro mb-4">
                  Reserva tu Sesión de <span className="text-amor-rosa">Graduación {currentYear}</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-amor-gris mb-8">
                  Inmortaliza este momento tan especial con cuadros personalizados de la más alta calidad
                </h2>
                <motion.button
                  className="bg-amor-rosa hover:bg-amor-malva text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const formularioElement = document.getElementById('formulario');
                    if (formularioElement) {
                      formularioElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Reservar Ahora
                </motion.button>
              </motion.div>
              <motion.div 
                className="md:w-1/2 overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-48 h-48 md:w-64 md:h-64 bg-amor-rosa/20 rounded-full filter blur-3xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64 bg-amor-verde-claro/20 rounded-full filter blur-3xl"></div>
                  <div className="relative bg-white p-3 md:p-4 rounded-2xl shadow-xl">
                    <img 
                      src={graduacionHorizontal1}
                      alt={`Cuadros de graduación promoción ${currentYear}`}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sección de Precios */}
        <section id="precios" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-amor-verde-oscuro mb-4">Nuestros Precios Especiales</h2>
              <p className="text-amor-gris max-w-2xl mx-auto">
                Ofrecemos diferentes opciones para que puedas elegir la que mejor se adapte a tus necesidades
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Cuadro 20x30 cm', fotos: '2 fotos', precio: '$13.000', destacado: false },
                { title: 'Cuadro 20x30 cm', fotos: '3 fotos', precio: '$13.500', destacado: false },
                { title: 'Cuadro 30x40 cm', fotos: '2 fotos', precio: '$14.000', destacado: false },
                { title: 'Cuadro 30x40 cm', fotos: '3 fotos', precio: '$15.000', destacado: true }
              ].map((plan, index) => (
                <motion.div 
                  key={index}
                  className={`bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center ${plan.destacado ? 'ring-2 ring-amor-rosa' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  {plan.destacado && (
                    <span className="bg-amor-rosa text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                      Más Popular
                    </span>
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-amor-verde-oscuro">{plan.title}</h3>
                  <p className="text-amor-gris mb-4">{plan.fotos}</p>
                  <p className="text-3xl font-bold text-amor-rosa mb-6">{plan.precio}</p>
                  <button 
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${plan.destacado ? 'bg-amor-rosa text-white hover:bg-amor-malva' : 'bg-amor-verde-claro/10 text-amor-verde-oscuro hover:bg-amor-verde-claro/20'}`}
                    onClick={() => {
                      const formularioElement = document.getElementById('formulario');
                      if (formularioElement) {
                        formularioElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Reservar
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Promociones Especiales - Enhanced */}
            <motion.div 
              className="mt-12 bg-gradient-to-r from-amor-rosa to-amor-malva p-8 rounded-xl text-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">¡Promociones Imperdibles!</h3>
              <p className="text-lg text-white mb-4">
                <span className="font-semibold">🎁 Por compras sobre 25 cuadros, ¡gratis uno para el profesor!</span>
              </p>
              <p className="text-white/90 mb-6">📸 Fotos adicionales tamaño 15x20 cm a solo $2.500 c/u</p>
              
              {/* Urgency Message */}
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30">
                <p className="text-xl font-bold text-white animate-pulse">
                  🚨 ¡GRAN OPORTUNIDAD! 🚨
                </p>
                <p className="text-lg text-white mt-2">
                  Todas las reservas efectuadas <span className="font-bold underline">antes del 31 de Julio</span> tendrán además un <span className="font-bold text-2xl">10% de DESCUENTO</span> adicional.
                </p>
                <p className="text-sm text-white/80 mt-2">¡No te quedes fuera!</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sección de Proceso */}
        <section id="proceso" className="py-20 bg-amor-verde-claro/5">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-amor-verde-oscuro mb-4">¿Cómo Es Nuestra Forma De Trabajar?</h2>
              <p className="text-amor-gris max-w-2xl mx-auto">
                Reserva tu Sesión de Cuadro de Graduación Escolar - Paso a Paso
              </p>
            </motion.div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Inicio Personalizado", 
                  description: "Antes de reservar, completa nuestro formulario en línea. Necesitamos los nombres exactos del estudiante y del profesor para personalizar tu cuadro a la perfección."
                },
                {
                  title: "Diseño Preparado con Antelación", 
                  description: "Nos adelantamos trabajando en tu diseño para asegurarnos de que todo esté correcto. Nos tomamos en serio cada detalle, incluyendo la ortografía de los nombres, para evitar errores."
                },
                {
                  title: "Asistencia Adulta el Día de la Sesión", 
                  description: "Recomendamos la presencia de un adulto responsable durante la sesión para garantizar la captura perfecta."
                },
                {
                  title: "Duración y Reserva", 
                  description: "Cada sesión dura aproximadamente 1 hora y media. Reserva tu sesión con un abono del 50% y paga el saldo el día de la sesión. Los detalles para el depósito te serán proporcionados."
                },
                {
                  title: "Horario y Ubicación", 
                  description: "Programamos sesiones de lunes a viernes por la mañana. Buscamos la luz ideal en un entorno al aire libre con sombra para capturar la esencia de cada estudiante."
                },
                {
                  title: "Política de Inasistencia", 
                  description: "Si no puedes asistir, se requerirá un pago adicional de $10,000 para reprogramar en nuestras dependencias. Valoramos tu compromiso y el nuestro."
                },
                {
                  title: "Entrega de Cuadros", 
                  description: "La magia toma tiempo, tus cuadros estarán listos para entrega dentro de las 4 semanas siguientes a la última fotografía."
                },
                {
                  title: "Control de Calidad", 
                  description: "La entrega se hace en mano a un adulto responsable, asegurando que cada cuadro cumpla con nuestros altos estándares de calidad."
                }
              ].map((paso, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4 bg-white p-6 rounded-xl shadow-sm"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="bg-amor-rosa text-white h-8 w-8 rounded-full flex items-center justify-center text-lg font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-amor-verde-oscuro">{paso.title}</h3>
                    <p className="text-amor-gris">{paso.description}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div 
                className="text-center mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-lg font-medium text-amor-verde-oscuro">
                  ¡Captura el Momento! 🌟 Reserva ahora y convierte un instante escolar en un recuerdo inolvidable. Estamos emocionados de ayudarte a preservar estos momentos especiales.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sección de Formulario */}
        <section id="formulario" className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amor-verde-oscuro mb-3 sm:mb-4">Reserva Tu Sesión</h2>
              <p className="text-amor-gris max-w-2xl mx-auto text-sm sm:text-base">
                Completa el siguiente formulario para comenzar el proceso de reserva de tu sesión de graduación
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {formSubmitted ? (
                <motion.div 
                  className="bg-green-50 border border-green-200 text-green-700 p-5 sm:p-8 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-3 sm:mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">¡Solicitud Enviada!</h3>
                  <p className="mb-4 text-sm sm:text-base">Hemos recibido tu solicitud de reserva. Te contactaremos pronto para confirmar los detalles. También puedes contactarnos directamente por WhatsApp para agilizar el proceso.</p>
                  <button 
                    className="bg-amor-verde-claro hover:bg-amor-verde-medio text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Enviar otro formulario
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="bg-white p-5 sm:p-8 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-3 sm:p-4 rounded-lg mb-5 text-sm sm:text-base">
                      {submitError}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    <div className="col-span-1 sm:grid sm:grid-cols-2 sm:gap-6">
                      <div className="mb-4 sm:mb-0">
                        <label className="block text-amor-verde-oscuro font-medium mb-1 sm:mb-2 text-sm sm:text-base">Nombre de la Institución *</label>
                        <input 
                          type="text" 
                          name="institucion" 
                          value={formData.institucion} 
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amor-rosa focus:border-transparent transition-all text-sm sm:text-base"
                          required
                        />
                      </div>
                      <div className="mb-4 sm:mb-0">
                        <label className="block text-amor-verde-oscuro font-medium mb-1 sm:mb-2 text-sm sm:text-base">Curso *</label>
                        <input 
                          type="text" 
                          name="curso" 
                          value={formData.curso} 
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amor-rosa focus:border-transparent transition-all text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-amor-verde-oscuro font-medium mb-1 sm:mb-2 text-sm sm:text-base">Dirección con Comuna de la Sesión *</label>
                      <input 
                        type="text" 
                        name="direccion" 
                        value={formData.direccion} 
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amor-rosa focus:border-transparent transition-all text-sm sm:text-base"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-amor-verde-oscuro font-medium mb-1 sm:mb-2 text-sm sm:text-base">Nombre y Teléfono de la Encargada *</label>
                      <input 
                        type="text" 
                        name="encargada" 
                        value={formData.encargada} 
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amor-rosa focus:border-transparent transition-all text-sm sm:text-base"
                        required
                      />
                    </div>
                    
                    <div className="sm:grid sm:grid-cols-2 sm:gap-6">
                      <div className="mb-4 sm:mb-0">
                        <label className="block text-amor-verde-oscuro font-medium mb-1 sm:mb-2 text-sm sm:text-base">Opción De Diseño Elegida *</label>
                        <select 
                          name="diseno" 
                          value={formData.diseno} 
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amor-rosa focus:border-transparent transition-all text-sm sm:text-base"
                          required
                        >
                          <option value="">Seleccionar...</option>
                          <option value="20x30-2fotos">Cuadro 20x30 cm - 2 fotos</option>
                          <option value="20x30-3fotos">Cuadro 20x30 cm - 3 fotos</option>
                          <option value="30x40-2fotos">Cuadro 30x40 cm - 2 fotos</option>
                          <option value="30x40-3fotos">Cuadro 30x40 cm - 3 fotos</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-amor-verde-oscuro font-medium mb-1 sm:mb-2 text-sm sm:text-base">Cantidad Total de Cuadros *</label>
                        <input 
                          type="number" 
                          name="cantidad" 
                          value={formData.cantidad} 
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amor-rosa focus:border-transparent transition-all text-sm sm:text-base"
                          min="1"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-amor-verde-oscuro font-medium mb-1 sm:mb-2 text-sm sm:text-base">Profesor lleva cuadro? *</label>
                      <div className="flex gap-4 sm:gap-6 mt-1">
                        <label className="flex items-center">
                          <input 
                            type="radio" 
                            name="profesorLlevaCuadro" 
                            value="si" 
                            checked={formData.profesorLlevaCuadro === 'si'} 
                            onChange={handleRadioChange}
                            className="mr-2 text-amor-rosa focus:ring-amor-rosa"
                          />
                          <span className="text-sm sm:text-base">Sí</span>
                        </label>
                        <label className="flex items-center">
                          <input 
                            type="radio" 
                            name="profesorLlevaCuadro" 
                            value="no" 
                            checked={formData.profesorLlevaCuadro === 'no'} 
                            onChange={handleRadioChange}
                            className="mr-2 text-amor-rosa focus:ring-amor-rosa"
                          />
                          <span className="text-sm sm:text-base">No</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-amor-verde-oscuro font-medium mb-1 sm:mb-2 text-sm sm:text-base">Listado de Alumnos</label>
                      <textarea 
                        name="listadoAlumnos" 
                        value={formData.listadoAlumnos} 
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amor-rosa focus:border-transparent transition-all text-sm sm:text-base"
                        rows={4}
                        placeholder="Escribe aquí los nombres de los alumnos, uno por línea. Ejemplo:
1. Juan Pérez
2. María González
3. Pedro Sánchez"
                      />
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Puedes escribir el listado directamente o copiarlo desde otro documento.</p>
                    </div>
                    
                    <div>
                      <label className="block text-amor-verde-oscuro font-medium mb-1 sm:mb-2 text-sm sm:text-base">Nombre de Profesor/a Jefe</label>
                      <input 
                        type="text" 
                        name="nombreProfesor" 
                        value={formData.nombreProfesor} 
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amor-rosa focus:border-transparent transition-all text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 text-center">
                    <button 
                      type="submit"
                      className={`bg-amor-rosa hover:bg-amor-malva text-white font-semibold py-2 sm:py-3 px-8 sm:px-10 rounded-lg shadow-lg transition-all text-sm sm:text-base ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : "Enviar Solicitud de Reserva"}
                    </button>
                    <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">Al enviar este formulario, recibirás una confirmación y serás contactado pronto</p>
                  </div>
                </motion.form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
