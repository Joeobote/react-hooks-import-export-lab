import React from "react";
import { image } from "../data/user";
function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This app will change the world</p>
      <img src={image} alt="I made this" />
    </div>
  );
}
export default About