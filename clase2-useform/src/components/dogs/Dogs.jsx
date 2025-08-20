import React from "react";
import { useEffect, useState } from "react";

const Dogs = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Datos actualizados:", data);
  }, [data]);

  useEffect(() => {
    console.log("Error:", error);
  }, [error]);

  return (
    <section>
      <div>
        <div>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt=""
          />
        </div>
        <div>
          <h3>Rick Sanchez</h3>
          <p>Male</p>
          <p>Human</p>
        </div>
      </div>

      <div>
        <div>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt=""
          />
        </div>
        <div>
          <h3>Rick Sanchez</h3>
          <p>Male</p>
          <p>Human</p>
        </div>
      </div>

      <div>
        <div>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt=""
          />
        </div>
        <div>
          <h3>Rick Sanchez</h3>
          <p>Male</p>
          <p>Human</p>
        </div>
      </div>

      <div>
        <div>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt=""
          />
        </div>
        <div>
          <h3>Rick Sanchez</h3>
          <p>Male</p>
          <p>Human</p>
        </div>
      </div>
    </section>
  );
};

/*
import { useForm } from "react-hook-form";

function Dogs() {
  const { register } = useForm();
  return (
    <div className="p-4">
      <form action="" className="flex gap-2 flex-col">
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          placeholder="nombre"
          className="border-1 w-40"
          {...register("name", { required: true })}
        />
        <label htmlFor="">Raza</label>
        <input
          type="text"
          placeholder="raza"
          className="border-1 w-40"
          {...register("breed", { required: true })}
        />
        <label htmlFor="">Imagen</label>
        <input
          type="text"
          placeholder="image"
          className="border-1 w-40"
          {...register("image", { required: true })}
        />

        <input type="submit" value="enviar" className="border-1 w-15" />
      </form>
    </div>
  );
}
*/

export default Dogs;
