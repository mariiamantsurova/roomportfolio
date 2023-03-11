import Experience from "../Experience";
import * as THREE from "three";
import GSAP from "gsap";
export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.room = this.resources.items.room;
    this.actualRoom = this.room?.scene;

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };
    this.onMouseMove();
    this.setModel();
    this.setAnimation();
  }

  setModel() {
    this.actualRoom?.children.forEach((child) => {
      if (child instanceof THREE.Group) {
        child.children.forEach((groupchild) => {
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
        });
      }
      if (child.name === "WindowGlass" || child.name === "TableGlass") {
        child.material = new THREE.MeshPhysicalMaterial();
        child.material.roughness = 0.5;
        child.material.color.set(0xffffff);
        child.material.ior = 3;
        child.material.transmission = 1;
        child.material.opacity = 1;
      }
      if (child.name === "AquaGlass" || child.name === "Wase") {
        child.material = new THREE.MeshPhysicalMaterial();
        child.material.roughness = 0;
        child.material.color.set(0x3fb3b8);
        child.material.ior = 2;
        child.material.transmission = 1;
        child.material.opacity = 1;
      }

      if (child.name === "screen") {
        child.material = new THREE.MeshBasicMaterial({
          map: this.resources.items.screen,
        });
      }
      child.castShadow = true;
      child.receiveShadow = true;
    });

    const width = 1;
    const height = 1;
    const intensity = 1;
    const rectLight = new THREE.RectAreaLight(
      0xfdceb9,
      intensity,
      width,
      height
    );
    rectLight.position.set(0, 0, -3);
    rectLight.lookAt(0, 0, 0);
    this.actualRoom.add(rectLight);

    this.scene.add(this.actualRoom);
    this.actualRoom?.scale.set(0.11, 0.11, 0.11);
  }
  //TODO position of light and add helper

  setAnimation() {
    this.mixer = new THREE.AnimationMixer(this.actualRoom);
    if (this.room) {
      this.fish = this.mixer.clipAction(this.room.animations[91]);
      this.fish.play();
    }
  }
  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      this.rotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation * 0.1;
    });
  }
  resize() {}
  update() {
    this.lerp.current = GSAP.utils.interpolate(
      this.lerp.current,
      this.lerp.target,
      this.lerp.ease
    );
    if (this.actualRoom) {
      this.actualRoom.rotation.y = this.lerp.current;
    }
    this.mixer.update(this.time.delta * 0.0009);
  }
}
