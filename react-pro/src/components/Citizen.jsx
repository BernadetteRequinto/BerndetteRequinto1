import React from "react";

const Citizen = ({ index, citizen, toggleStatus }) => {
  return (
    <div>
      {index + 1}. {citizen.name}, {citizen.age}, {citizen.address},{" "}
      {citizen.status}
      <button onClick={() => toggleStatus(index)}>Toggle Status</button>
    </div>
  );
};

export default Citizen;
