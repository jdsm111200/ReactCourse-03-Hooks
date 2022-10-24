import { useEffect, useState } from "react";

export const Message = () => {
  //en este caso si no se remueve el evento trataria de actualizar un componente que ya no existe lo cual seria un error
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    //console.log("Message mounted");
    const onMouseMove = (e) => {
      setCoords({ x: e.x, y: e.y });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      //console.log("Message unmounted");
      /*sirve para limpiar listeners, propiedades,etc que se ocupaban cuando el componente estaba montado, 
      el problema es que cada vez que se monta el componente se crea un nuevo listener, por lo que se debe limpiar
      sino habira fuga de memoria*/
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>User already exists!!!</h3>
      {JSON.stringify(coords, null, 2)}
    </>
  );
};
