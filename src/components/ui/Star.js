import React from "react";

function Star({ fill, size, color }) {
  const starShape =
    fill >= 1
      ? "fa-solid fa-star"
      : fill >= 0.5
      ? "fa-solid fa-star-half-stroke"
      : "fa-regular fa-star";

  return (
    <i
      className={`${starShape} text-${color ? color : "white"} ml-1${
        size ? ` text-${size}` : ""
      }`}
    ></i>
  );
}

export default Star;
