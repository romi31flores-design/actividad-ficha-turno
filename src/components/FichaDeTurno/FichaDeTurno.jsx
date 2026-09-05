import "./FichaDeTurno.css";
function FichaDeTurno({ cargando, error, turno }) {

  if (cargando) {
    return <p>Cargando turno...</p>;
  }

  if (error) {
    return <p>Error al cargar el turno.</p>;
  }

  if (!turno) {
    return <p>No hay turno para mostrar.</p>;
  }

  return (
    <div className={turno.urgente ? "ficha urgente" : "ficha"}>
      <h2>{turno.paciente}</h2>

      <p>Hora: {turno.hora}</p>

      {turno.urgente && <span>Urgente</span>}

      <p>
        Observaciones: {(turno.observaciones ?? "") || "Sin observaciones"}
      </p>

      <p>Sesiones: {turno.sesiones}</p>
    </div>
  );
}

export default FichaDeTurno;
