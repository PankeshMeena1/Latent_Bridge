import React from "react";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="random-button">
      Generate Random Post ID
    </button>
  );
};

export default Button;
