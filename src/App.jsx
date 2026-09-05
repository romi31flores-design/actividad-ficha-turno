import FichaDeTurno from "./components/FichaDeTurno/FichaDeTurno.jsx";

function App() {
  return (
    <>
      <FichaDeTurno cargando={true} />

      <FichaDeTurno error={true} />

      <FichaDeTurno turno={null} />

      <FichaDeTurno
        turno={{
          paciente: "Flores Romina",
          hora: "09:30",
          urgente: true,
          observaciones: "Traer estudios previos",
          sesiones: 4,
        }}
      />

      <FichaDeTurno
        turno={{
          paciente: "Valentina Moreno",
          hora: "10:00",
          urgente: false,
          observaciones: "Sin observaciones", 
          sesiones: 0,
        }}
      />
    </>
  );
}

export default App;
