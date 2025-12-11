import React from "react";
import btnArrow from "../../assets/button-icon.png";
const Button = ({ text }) => {
  return (
    <div>
      <button className="text-sm text-yellow-700 flex gap-2">
        {text}
        <img src={btnArrow} alt="" />
      </button>
    </div>
  );
};

export default Button;
