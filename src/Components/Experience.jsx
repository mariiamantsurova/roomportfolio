import React from "react";
import Styles from "../styles/experience.module.scss";
import Experience from "../ExperienceClass/Experience";
import { useEffect, useRef } from "react";

function ExperienceCreate() {
  const canvas = useRef(undefined);
  useEffect(() => {
    const experience = new Experience(canvas.current);
    // const experience = new Experience(document.querySelector("#canvas"));
  }, []);
  return (
    <div className={Styles["experience"]}>
      <canvas
        id="canvas"
        className={Styles["experience-canvas"]}
        ref={canvas}
      ></canvas>
    </div>
  );
}

export default ExperienceCreate;
