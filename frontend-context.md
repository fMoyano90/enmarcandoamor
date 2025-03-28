# Contexto Frontend: Enmarcando Amor

## Descripción del Proyecto
Enmarcando Amor es un sitio web enfocado en la venta de cuadros personalizados donde las personas pueden enmarcar sus recuerdos más importantes o regalar recuerdos enmarcados a otras personas. El negocio tiene como mercado principal las graduaciones escolares a fin de año, aunque también atiende otras ocasiones especiales como cumpleaños y aniversarios.

## Tecnologías Principales

### Framework y Lenguaje
- **React 18.3.1** con **TypeScript** como framework principal
- **Vite 6.0.5** como herramienta de construcción y servidor de desarrollo

### Dependencias Clave
- **react-router-dom (v7.1.3)**: Para manejo de rutas y navegación
- **axios (v1.7.9)**: Cliente HTTP para peticiones a APIs
- **framer-motion (v12.0.1)**: Biblioteca para animaciones avanzadas
- **@emailjs/browser (v4.4.1)**: Para funcionalidad de envío de correos electrónicos (probablemente para contacto o confirmaciones)
- **moment (v2.30.1)**: Para manipulación y formateo de fechas

### Estilos y UI
- **TailwindCSS 3.4.17**: Framework de CSS utilitario
- Esquema de colores personalizado definido en la configuración de Tailwind:
  - **Rosa (#ED5A89)**: Color principal 
  - **Malva (#AD6D82)**: Color secundario
  - **Gris (#6E6065)**: Para elementos neutros
  - **Verdes**: Tres tonalidades (claro #5AED69, medio #6D9871, oscuro #334334)

## Estructura del Proyecto
```
/src
├── assets/         # Recursos estáticos (imágenes, etc.)
├── components/     # Componentes reutilizables
├── config/         # Configuraciones
├── pages/          # Componentes de páginas
├── App.tsx         # Componente raíz
├── main.tsx        # Punto de entrada
├── index.css       # Estilos globales
└── vite-env.d.ts   # Definiciones de tipos
```

## Recursos de Imágenes
El proyecto cuenta con diversas imágenes organizadas por categorías para los diferentes tipos de productos:

### Imágenes Principales
- **Graduaciones**: Imágenes horizontales y verticales para cuadros de graduación
  - `graduacion-horizontal-1.png`, `graduacion-horizontal-2.png`
  - `graduacion-vertical-1.png`, `graduacion-vertical-2.png`
- **Amor**: Serie de imágenes verticales para cuadros temáticos de amor
  - `amor-vertical-1.png`, `amor-vertical-2.png`, `amor-vertical-3.png`, `amor-vertical-4.png`
- **Amistad**: Imágenes para cuadros de amistad
  - `amistad-vertical-1.png`
- **Familia**: Imágenes para cuadros dedicados a padres/familia
  - `padre-vertical-1.png`
- **Viajes**: Imágenes para recuerdos de viajes
  - `viaje-vertical-1.png`, `viaje-vertical-2.png`

### Elementos de UI
- **Testimonios**: Fotografías de clientes para sección de testimonios
  - `testimonio1.jpeg`, `testimonio-2.jpeg`
- **Logo**: Identidad visual del sitio
  - `logo.svg`

Estas imágenes se utilizan en diferentes secciones del sitio para mostrar ejemplos de productos y ambientar las páginas según la temática correspondiente.

## Funcionalidades Esperadas
Basado en la naturaleza del negocio y las tecnologías instaladas:

1. **Catálogo de productos**: Visualización de diferentes opciones de marcos
2. **Personalización**: Interfaz para que los usuarios suban fotos o diseños
3. **Proceso de compra**: Flujo de selección, personalización y checkout
4. **Formulario de contacto**: Utilizando EmailJS para consultas directas
5. **Responsividad**: Diseño adaptado a dispositivos móviles y escritorio

## SEO y Metadatos
- El sitio está en español (lang="es")
- Descripción meta: "Cuadros personalizados para graduaciones, cumpleaños, aniversarios y ocasiones especiales. Productos de alta calidad hechos con amor."
- Título: "Enmarcando Amor | Cuadros Personalizados"

## Herramientas de Desarrollo
- **ESLint**: Para garantizar la calidad del código
- **TypeScript**: Para tipado estático y mejor autocompletado/detección de errores
- **PostCSS/Autoprefixer**: Para compatibilidad CSS entre navegadores

## Próximos Pasos Recomendados
Para comprender mejor el contexto completo, sería valioso analizar:
- Componentes de páginas principales (Home, Productos, Checkout)
- Estado global o gestión de datos (si usa Context API, Redux, etc.)
- Integraciones con APIs de backend o servicios de pago
- Flujos de usuario específicos para la personalización de marcos
