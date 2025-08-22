import React from "react";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const traerPersonajes = async () => {
    try {
      const respuestaJSON = await fetch(
        `https://rickandmortyapi.com/api/character?page=${pagina}`
      );
      if (!respuestaJSON.ok) return null;

      const respuesta = await respuestaJSON.json();
      if (!respuesta) return null;

      setPersonajes((prev) => [...prev, ...respuesta.results]);
      setPagina((prev) => prev + 1);
      setHasMore(Boolean(respuesta.info?.next));
    } catch (error) {
      console.error(error);
      setHasMore(false);
    }
  };

  console.log(personajes);

  useEffect(() => {
    traerPersonajes();
  }, []);

  return (
    <InfiniteScroll
      dataLength={personajes.length}
      next={traerPersonajes}
      hasMore={hasMore}
      loader={<h4>Cargando...</h4>}
    >
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
                  Especie:{" "}
                  <span className="font-bold">{personaje.species}</span>
                </p>
                <p>Esta vivo: {personaje.status === "Alive" ? "😏" : "☠️"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
}

export default App;
