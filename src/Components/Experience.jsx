import React from "react";
import Styles from "../styles/experience.module.scss";
import Experience from "../ExperienceClass/Experience";
import { useEffect, useRef } from "react";

function ExperienceCreate() {
	const canvas = useRef(undefined);
	const toggleBtn = useRef(undefined);
	const toggleCircle = useRef(undefined);
	useEffect(() => {
		new Experience(canvas.current, toggleBtn.current, toggleCircle.current, toggleCircle.current);
	}, []);

	return (
		<>
			<div className={Styles["experience"]}>
				<canvas id="canvas" className={Styles["experience-canvas"]} ref={canvas}></canvas>
			</div>
			<div className={Styles["page"]}>
				<div className={Styles["toggle-bar"]}>
					<div id="sun">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor">
							<path d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05 4.575 6q-.3-.275-.288-.7.013-.425.288-.725.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7 0 .4-.275.7-.275.3-.687.287-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712 0-.413.275-.688.275-.3.688-.287.412.012.712.287L19.425 18q.3.275.288.7-.013.425-.288.725-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688.012-.412.287-.712L18 4.575q.275-.3.7-.288.425.013.725.288.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275.412 0 .687.275.3.275.288.688-.013.412-.288.712L6 19.425q-.275.3-.7.287-.425-.012-.725-.287ZM12 12Z" />
						</svg>
					</div>
					<button className={Styles["toggle-btn"]} ref={toggleBtn}>
						<div className={Styles["toggle-circle"]} ref={toggleCircle}></div>
					</button>
					<div id="moon">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor">
							<path d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025.337.025.662.075-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613 1.15-.612 1.875-1.637.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Zm0-2q2.2 0 3.95-1.212 1.75-1.213 2.55-3.163-.5.125-1 .2-.5.075-1 .075-3.075 0-5.238-2.162Q9.1 10.575 9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.162 2.55Q5 9.8 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm-.25-6.75Z" />
						</svg>
					</div>
				</div>
				<div className={Styles["page-wrapper"]}>
					<section className={Styles["hero"]}>
						<div className={Styles["hero-wrapper"]}>
							<div className={Styles["hero-main"]}>
								<h1 className={Styles["hero-main-title"]}>Maria Mantsurova</h1>
								<p className={Styles["hero-main-description"]}>Full-Stack Developer | 3D Artist</p>
							</div>
							<div className={Styles["hero-second"]}>
								<h1 className={Styles["hero-second-subheading"]}>Maria Mantsurova</h1>
								<p className={Styles["hero-second-desccription"]}>Portfolio</p>
							</div>
						</div>
					</section>
					<div id="first-move" className={Styles["section-margin"]}></div>
					<section className={`${Styles["first-section"]} ${Styles["section"]} ${Styles["left"]}`}>
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
					<section className={`${Styles["second-section"]} ${Styles["section"]} ${Styles["right"]}`}>
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
