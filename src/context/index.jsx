import { createContext, useState } from "react";
import { userInfo } from "../data/userInfo";

// se declara una variable para el contexto
const AppContext = createContext();

// se crea el proveedor
const AppProvider = ({children}) => {

  // === THEME ===
  const [theme, setTheme] = useState('light-theme'); // state del tema claro/oscuro
  const [icon, setIcon] = useState('ri-moon-line'); // state del icon del tema claro/oscuro
  const handleTheme = () => { // maneja el state del tema claro/oscuro
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    // SI hay un theme guardado en el localStorage, entonces se mantiene la configuracion por defecto
    if(selectedIcon && selectedTheme) {
    // De lo contrario, se guardan en el state los datos del theme seleccionado
    setTheme(selectedTheme)
    setIcon((selectedIcon))
    }
  }
  const toggleTheme = () => { // maneja el cambio de tema on "click"
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    const newIcon = icon === 'ri-moon-line' ? 'ri-sun-line' : 'ri-moon-line';
    setTheme(newTheme);
    setIcon(newIcon);
    localStorage.setItem("selected-theme", newTheme);
    localStorage.setItem("selected-icon", newIcon);
  };

  // === USER INFO ===
  const [user, setUser] = useState(userInfo);

  // === VIEWS ===
  const [views, setViews] = useState('?');
  
  const getViews = async () => {
    // const url = import.meta.env.API_URL;
    const url = "https://views-api-jhonysouza100.vercel.app";
    try {
      // Obtener el número actual de vistas
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Error HTTP! Estado: ${res.status}`);
      const data = await res.json();
      const currentCount = data.count;
  
      // Actualizar el número de vistas (incrementar en 1)
      const newCount = currentCount + 1;
      const updateRes = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: 1, count: newCount }),
      });
  
      if (!updateRes.ok) throw new Error(`Error HTTP! Estado: ${updateRes.status}`);
      
      // console.log(updateRes);
  
      // Establecer las vistas actualizadas
      setViews(newCount);
    } catch (error) {
      console.error("Error al obtener o actualizar las vistas:", error);
      setViews(404);
    }
  };
  
  // === YEARS ===
  const [getYears, setYears] = useState(() => {
    // Obtener la fecha actual
    let fechaActual = new Date();

    // Crear una fecha para el año de inicion
    let fechaInicio = new Date(2021, 1, 25); // El mes se cuenta desde 0 (enero es 0)

    // Calcular la diferencia en milisegundos entre las dos fechas
    let diferenciaEnMilisegundos = fechaActual - fechaInicio;

    // Calcular la diferencia en años dividiendo los milisegundos entre la cantidad de milisegundos en un año
    let diferenciaEnAnos = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25);

    // Redondear el resultado a un número entero
    return Math.floor(diferenciaEnAnos);

  });
  
  // todos los valores del contexto
  const data = {theme, icon, handleTheme, toggleTheme, user, views, getViews, getYears}
  // elemento contenedor del contexto, para compartir la data con susu componentes hijo
  return(<AppContext.Provider value={data}>{children}</AppContext.Provider>);
}

export {AppProvider}
export default AppContext;