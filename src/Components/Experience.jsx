import React from "react";
import Styles from "../styles/experience.module.scss";
import Experience from "../ExperienceClass/Experience";
import { useEffect, useRef } from "react";
import sunicon from "/src/images/sun.svg";
import moonicon from "/src/images/moon.svg";

function ExperienceCreate() {
  const canvas = useRef(undefined);
  const toggleBtn = useRef(undefined);
  const toggleCircle = useRef(undefined);
  useEffect(() => {
    new Experience(
      canvas.current,
      toggleBtn.current,
      toggleCircle.current,
      toggleCircle.current
    );
  }, []);

  return (
    <>
      <div className={Styles["experience"]}>
        <canvas
          id="canvas"
          className={Styles["experience-canvas"]}
          ref={canvas}
        ></canvas>
      </div>
      <div className={Styles["page"]}>
        <div className={Styles["toggle-bar"]}>
          <img src={sunicon} alt="sunicon" className={Styles["sun"]} />
          <button className={Styles["toggle-btn"]} ref={toggleBtn}>
            <div className={Styles["toggle-circle"]} ref={toggleCircle}></div>
          </button>
          <img src={moonicon} alt="moonicon" className={Styles["moon"]} />
        </div>
        <div className={Styles["page-wrapper"]}>
          <section className={Styles["hero"]}>
            <div className={Styles["hero-wrapper"]}>
              <div className={Styles["hero-main"]}>
                <h1 className={Styles["hero-main-title"]}>Maria Mantsurova</h1>
                <p className={Styles["hero-main-description"]}>
                  Full-Stack Developer | 3D Artist
                </p>
              </div>
              <div className={Styles["hero-second"]}>
                <h1 className={Styles["hero-second-subheading"]}>
                  Maria Mantsurova
                </h1>
                <p className={Styles["hero-second-desccription"]}>Portfolio</p>
              </div>
            </div>
          </section>
          <div id="first-move" className={Styles["section-margin"]}></div>
          <section
            className={`${Styles["first-section"]} ${Styles["section"]} ${Styles["left"]}`}
          >
            <h1 className={Styles["section-title"]}></h1>
            <span className={Styles["section-number"]}>01</span>
            <div className={Styles["section-detail-wrapper"]}>
              <h3 className={Styles["section-heading"]}>Lorem Ipsum</h3>
              <p className={Styles["section-text"]}>cfdecfedefcsdvesdvfd</p>
              <h3 className={Styles["section-heading"]}>Lorem Ipsum</h3>
              <p className={Styles["section-text"]}>cfdecfedefcsdvesdvfd</p>
            </div>
          </section>
          <div id="second-move" className={Styles["section-margin"]}></div>
          <section
            className={`${Styles["second-section"]} ${Styles["section"]} ${Styles["right"]}`}
          >
            <h1 className={Styles["section-title"]}></h1>
            <span className={Styles["section-number"]}>02</span>
            <div className={Styles["section-detail-wrapper"]}>
              <h3 className={Styles["section-heading"]}>Lorem Ipsum</h3>
              <p className={Styles["section-text"]}>Lorem</p>
              <h3 className={Styles["section-heading"]}>Lorem Ipsum</h3>
              <p className={Styles["section-text"]}>Lorem</p>
            </div>
          </section>
          <section className={Styles["first-section section right"]}></section>
        </div>
      </div>
    </>
  );
}

export default ExperienceCreate;
