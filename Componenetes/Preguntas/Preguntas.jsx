import React from "react";
import "../Preguntas/Preguntas.css";

const Preguntas = ({ pregunt }) => {
  const alerta = () => {
    alert("Actualemnte esta fuera de servicio");
  };

  return (
    <div className="panel">
      {pregunt.map((item, index) => (
        <div className="control" key={index}>
          <h3>{item.title}</h3>
          <button onClick={alerta}>{item.questions[0]}</button>
          <button onClick={alerta}>{item.questions[1]}</button>
        </div>
      ))}
    </div>
  );
};

export default Preguntas;
