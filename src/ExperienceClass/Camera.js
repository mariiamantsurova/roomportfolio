import Experience from "./Experience";
import * as THREE from "three";
export default class Camera {
	constructor() {
		this.experience = new Experience();
		this.sizes = this.experience.sizes;
		this.scene = this.experience.scene;
		this.canvas = this.experience.canvas;

		this.createPerspectiveCamera();
		this.createOrthographicCamera();
	}

	createPerspectiveCamera() {
		this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 1000);
		this.scene.add(this.perspectiveCamera);
		this.perspectiveCamera.position.z = 5;
	}

	createOrthographicCamera() {
		this.frustrum = 5;
		this.orthogrphicCamera = new THREE.OrthographicCamera(
			(-this.sizes.aspect * this.sizes.frustrum) / 2,
			(this.sizes.aspect * this.sizes.frustrum) / 2,
			-this.sizes.frustrum / 2,
			-100,
			100,
		);
		this.scene.add(this.orthogrphicCamera);
	}
	resize() {
		// Update Perspective Camera on resize
		this.perspectiveCamera.aspect = this.scene.aspect;
		this.perspectiveCamera.updateProjectionMatrix();
		// Update Orthogtraphic Camera on resize
		this.orthogrphicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2;
		this.orthogrphicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2;
		this.orthogrphicCamera.top = this.sizes.frustrum / 2;
		this.orthogrphicCamera.bottom = -this.sizes.frustrum / 2;
		this.orthogrphicCamera.updateProjectionMatrix();
	}
	update() {}
}
