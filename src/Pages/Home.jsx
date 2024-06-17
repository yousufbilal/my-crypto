import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <h1>
        <Link to="/about">Go to About</Link>
      </h1>
      <h1>
        <Link to="/show">Go to Show</Link>
      </h1>
    </>
  );
};
