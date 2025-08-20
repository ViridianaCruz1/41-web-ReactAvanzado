import React from "react";
import { useState, useEffect } from "react";

function App() {
  const url = "https://rickandmortyapi.com/api/character";
  const [personajes, setPersonajes] = useState([]);

  const traerPersonajes = async (url) => {
    try {
      const respuestaJSON = await fetch(url);
      if (!respuestaJSON) return null;
      const respuesta = await respuestaJSON.json();
      if (!respuesta) return null;
      setPersonajes(respuesta.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    traerPersonajes(url);
  }, []);

  console.log(personajes);

  return (
    // PARENT CONTAINER
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-10">
      {personajes.map((personaje) => {
        return (
          <div
            className="border border-slate-400 pb-10 rounded-md shadow-xl"
            key={personaje.id}
          >
            <div className="w-full bg-blue-500">
              <img src={personaje.image} alt="" className="w-full" />
            </div>
            <div className="flex flex-col p-10 gap-5">
              <h2>
                Nombre <span className="font-bold">{personaje.name}</span>
              </h2>
              <p>
                Especie: <span className="font-bold">{personaje.species}</span>
              </p>
              <p>Esta vivo: {personaje.status === "Alive" ? "😏" : "☠️"}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
