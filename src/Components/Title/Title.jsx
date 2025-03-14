import React from "react";
import "./Title.css";
const Title = ({ title = "hi", color = "var(--text)", fontSize = 4 }) => {
  return (
    <div className="title">
      <h1 style={{ color: color, fontSize: `${fontSize}rem` }}>{title}</h1>
    </div>
  );
};

export default Title;
