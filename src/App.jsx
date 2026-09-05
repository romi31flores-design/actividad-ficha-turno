import FichaDeTurno from "./components/FichaDeTurno/FichaDeTurno.jsx";

function App() {
  return (
    <>
      <FichaDeTurno cargando={true} />

      <FichaDeTurno error={true} />

      <FichaDeTurno turno={null} />

      <FichaDeTurno
        turno={{
          paciente: "Ceferino Ruiz",
          hora: "09:30",
          urgente: true,
          observaciones: "Traer estudios previos",
          sesiones: 4,
        }}
      />

      <FichaDeTurno
        turno={{
          paciente: "Ana Gomez",
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
