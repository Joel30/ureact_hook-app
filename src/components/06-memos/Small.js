import React /*{ memo }*/ from "react";


export const Small = React.memo (({value}) => { //Solo cambia si las propiedades cambian

  console.log(' Me volví a llamar');
  
  return (
    <small>{value}</small>
  );
})