import { memo } from "react";
/*Memo se utiliza para memorizar el componente
si el padre sufre un cambio y el hijo no sufre ningun cambio direacto esto evita
que se vuelva a ejecutar siendo mas eficiente por si se tuviera
algun proceso pesado dentro del hijo*/
export const Small = memo(({ value }) => {
  console.log("Me volvi a llamar :(");

  return <small>{value}</small>;
});
