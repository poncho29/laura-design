import { useEffect, useState } from "react"

const useScreen = () => {
  // Obtenemos valor inicial del ancho y alto de la pantalla
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      // Eliminamos el listener para evitar consumo de memoria
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // funcion que actuliza el valor cuando cambia
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight)
  };

  return { width, height };
};

export default useScreen;