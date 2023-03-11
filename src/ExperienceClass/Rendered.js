import Experience from "./Experience";
import * as THREE from "three";
export default class Rendered {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;

    this.setRendered();
  }
  setRendered() {
    this.rendered = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.rendered.physicallyCorrectLights = true;
    this.rendered.outputEncoding = THREE.sRGBEncoding;
    this.rendered.toneMapping = THREE.CineonToneMapping;
    this.rendered.toneMappingExposure = 1.75;
    this.rendered.shadowMap.enabled = true;
    this.rendered.shadowMap.type = THREE.PCFSoftShadowMap;
    this.rendered.setSize(this.sizes.width, this.sizes.height);
    this.rendered.setPixelRatio(this.sizes.pixelRatio);
  }
  resize() {
    this.rendered.setSize(this.sizes.width, this.sizes.height);
    this.rendered.setPixelRatio(this.sizes.pixelRatio);
  }
  update() {
    this.rendered.render(this.scene, this.camera.orthographicCamera);
    // this.rendered.setScissorTest(true);
    // this.rendered.setViewport(
    //   this.sizes.width - this.sizes.width / 3,
    //   this.sizes.height - this.sizes.height / 3,
    //   this.sizes.width / 3,
    //   this.sizes.height / 3
    // );

    // this.rendered.setScissor(
    //   this.sizes.width - this.sizes.width / 3,
    //   this.sizes.height - this.sizes.height / 3,
    //   this.sizes.width / 3,
    //   this.sizes.height / 3
    // );
    // this.rendered.render(this.scene, this.camera.perspectiveCamera);
    // this.rendered.setScissorTest(false);
  }
}
