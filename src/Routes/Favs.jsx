import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {dataState} = useContextGlobal()
  
  return (
    <>
    
      <h1>Dentists Favs</h1>

      {!dataState.favs.length && <h3 className="aviso">Aun no hay destacados</h3>}
      
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {dataState.favs.map(fav =>
          
          <Card data={fav} key={fav.id}/>
        
        )}
          
      </div>
    </>
  );
};

export default Favs;
