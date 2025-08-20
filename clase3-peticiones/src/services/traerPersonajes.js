export const traerPersonajes = async (url) => {
  try {
    const respuestaJSON = await fetch(url);
    if (!respuestaJSON) return null;
    const respuesta = await respuestaJSON.json();
    if (!respuesta) return null;

    return respuesta.results;
  } catch (error) {
    console.error(error);
  }
};
