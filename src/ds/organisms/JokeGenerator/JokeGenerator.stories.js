import React from "react";
import JokeGenerator from "./JokeGenerator";

export default { title: "JokeGenerator" };

const style = {
  backgroundColor: "black",
  padding: "20px",
};

export const Standard = () => (
  <div style={style}>
    <JokeGenerator title={"Jokes!"} />
  </div>
);
