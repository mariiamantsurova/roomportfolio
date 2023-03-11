import Experience from "../Experience";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/src/all";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.room = this.experience.world.room.actualRoom;
    this.camera = this.experience.camera;
    GSAP.registerPlugin(ScrollTrigger);

    this.setPath();
    // this.progress = 0;

    // this.dummyCurve = new THREE.Vector3(0, 0, 0);

    // this.position = new THREE.Vector3(0, 0, 0);
    // this.lookAtPosition = new THREE.Vector3(0, 0, 0);

    // this.directionalVector = new THREE.Vector3(0, 0, 0);
    // this.staticVector = new THREE.Vector3(0, 1, 0);
    // this.crossVector = new THREE.Vector3(0, 0, 0);

    this.setPath();
    // this.onWheel();
  }
  setPath() {
    this.timeline = new GSAP.timeline();
    this.timeline.to(this.room?.position, {
      x: -this.sizes.width * 0.00094,
      scrollTrigger: {
        trigger: "#first-move",
        markers: true,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    this.timeline.to(this.room?.position, {
      x: this.sizes.width * 0.00094,
      scrollTrigger: {
        trigger: "#second-move",
        markers: true,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    // this.curve = new THREE.CatmullRomCurve3(
    //   [
    //     new THREE.Vector3(-2, 0, 0),
    //     new THREE.Vector3(0, 0, -2),
    //     new THREE.Vector3(2, 6, 0),
    //     new THREE.Vector3(0, 2, 2),
    //     new THREE.Vector3(6, 0, 2),
    //     new THREE.Vector3(0, 2, 2),
    //     new THREE.Vector3(-6, 6, 2),
    //   ],
    //   true
    // );
    // const points = this.curve.getPoints(50);
    // const geometry = new THREE.BufferGeometry().setFromPoints(points);
    // const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    // const curveObject = new THREE.Line(geometry, material);
    // this.scene.add(curveObject);
  }
  onWheel() {
    // window.addEventListener("wheel", (e) => {
    //   if (e.deltaY > 0) {
    //     this.lerp.target += 0.01;
    //     this.back = false;
    //   } else {
    //     this.lerp.target -= 0.01;
    //     this.back = true;
    //   }
    // });
  }
  resize() {}
  update() {
    // this.curve.getPointAt(this.lerp.current % 1, this.position);
    // this.camera.orthographicCamera.position.copy(this.position);
    // this.directionalVector.subVectors(
    //   this.curve.getPointAt((this.lerp.current % 1) + 0.000001),
    //   this.position
    // );
    // this.directionalVector.normalize();
    // this.crossVector.crossVectors(this.directionalVector, this.staticVector);
    // this.crossVector.multiplyScalar(100000);
    // this.camera.orthographicCamera.lookAt(0, 0, 0);
  }
}
