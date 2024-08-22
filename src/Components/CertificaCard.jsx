import React, { useState } from 'react';

const CertificaCard = ({ imgUrl, title, text }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="card rounded-3 w-25 h-auto border-0"
      style={{
        backgroundColor: "#f2f2f5",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease-in-out"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imgUrl} className="card-img-top p-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{ fontFamily: "DM Serif Text" }}>{title}</h5>
        <p className="card-text" style={{ fontFamily: "Quicksand" }}>{text}</p>
        <a href="#" className="btn" style={{ backgroundColor: '#dfdfdf', color: "#9c9c9c", fontFamily: "DM Serif Text" }}>Detail</a>
      </div>
    </div>
  );
}

export default CertificaCard;
