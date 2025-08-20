import FormEjercicio from "./components/formulario/FormEjercicio.jsx";
import Formulario from "./components/formulario/formulario.jsx";
import Dogs from "./components/dogs/Dogs.jsx";

function App() {
  return (
    <div className="w-screen h-max bg-black text-white text-2xl pt-6 flex items-center flex-col gap-8">
      {/* <Formulario /> */}
      {/* <FormEjercicio /> */}
      <Dogs />
    </div>
  );
}

export default App;
