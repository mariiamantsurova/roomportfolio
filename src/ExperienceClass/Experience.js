import * as THREE from "three";
import Sizes from "../utils/Sizes";
import Time from "../utils/Time";

import Camera from "./Camera";
import Rendered from "./Rendered";

import World from "./World/World";
export default class Experience {
	static instance;
	constructor(canvas) {
		if (Experience.instance) {
			return Experience.instance;
		} else {
			Experience.instance = this;
		}
		this.canvas = canvas;
		this.scene = new THREE.Scene();
		this.time = new Time();
		this.sizes = new Sizes();
		this.camera = new Camera();
		this.renderer = new Rendered();

		this.world = new World();
		this.time.on("update", () => {
			this.update();
		});
		this.sizes.on("resize", () => {
			this.resize();
		});
	}
	resize() {
		this.camera.resize();
		this.camera.resize();
	}

	update() {
		this.camera.update();
		this.renderer.update();
	}
}