import React from "react";
import Styles from "../styles/experience.module.scss";
import ExperienceClass from "../ExperienceClass/ExperienceClass";
import { useEffect } from "react";

function Experience() {
  useEffect(() => {
    const experience = new ExperienceClass(document.querySelector("#canvas"));
  }, []);
  return (
    <div className={Styles["experience"]}>
      <canvas id="canvas" className={Styles["experience-canvas"]}></canvas>
    </div>
  );
}

export default Experience;
