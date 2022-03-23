import React, { useState } from "react";

const Display = () => {
  const [change, setChange] = useState("Marco");
  const polo = () => {
    setChange("polo");
  };
  return (
    <>
      <h1 id="marco-polo">{change}</h1>
      <button id="marco-polo-toggler" onClick={polo}>
        Button
      </button>
    </>
  );
};
export default Display;
