import React from "react";
import "../Gallery/Gallery.css";

const Gallery = ({ personas }) => {
  return (
    <div className="personajes">
      {personas.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt={item.gender} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
