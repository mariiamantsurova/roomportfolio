import React from "react";
import Styles from "../styles/experience.module.scss";
import Experience from "../ExperienceClass/Experience";
import { useEffect } from "react";

function ExperienceCreate() {
	useEffect(() => {
		const experience = new Experience(document.querySelector("#canvas"));
	}, []);
	return (
		<div className={Styles["experience"]}>
			<canvas id="canvas" className={Styles["experience-canvas"]}></canvas>
		</div>
	);
}

export default ExperienceCreate;
