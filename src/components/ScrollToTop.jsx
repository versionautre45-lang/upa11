import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // À chaque changement de route (pathname), on remonte en haut
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
