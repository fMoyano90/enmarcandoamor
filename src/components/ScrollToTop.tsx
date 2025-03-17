import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuando cambia la ruta, hacer scroll hacia arriba
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente no renderiza nada
}; 