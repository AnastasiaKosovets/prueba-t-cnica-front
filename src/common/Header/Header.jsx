import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate("");

  return (
    <div className="headerDesign">
      <div className="linksDesign">
      <div className="headerLink" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="headerLink" onClick={() => navigate("/details")}>
          Detalles
        </div>
      </div>
    </div>
  );
};
