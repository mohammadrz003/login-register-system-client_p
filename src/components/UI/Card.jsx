import React from "react";

const Card = (props) => {
  return (
    <div className={`rounded-lg ${props.className}`}>{props.children}</div>
  );
};

export default Card;
