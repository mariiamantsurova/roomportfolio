import Experience from "../Experience";
import * as THREE from "three";
import { Reflector } from "three/examples/jsm/objects/Reflector";
export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.room = this.resources.items.room;
    this.actualRoom = this.room?.scene;

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

        //event Listener
      }
      if (child.name === "AquaGlass" || child.name === "Wase") {
        child.material = new THREE.MeshPhysicalMaterial();
        child.material.roughness = 0;
        child.material.color.set(0x3fb3b8);
        child.material.ior = 2;
        child.material.transmission = 1;
        child.material.opacity = 1;
      }
      if (child.name === "Mirror") {
        const mirrorOptions = {
          clipBias: 0.0,
          textureWidth: window.innerWidth * window.devicePixelRatio,
          textureHeight: window.innerHeight * window.devicePixelRatio,
          color: 0x808080,
          multisample: 4,
        };
        child = new Reflector(child.geometry, mirrorOptions);
      }
      if (child.name === "screen") {
        child.material = new THREE.MeshBasicMaterial({
          map: this.resources.items.screen,
        });
      }
      child.castShadow = true;
      child.receiveShadow = true;
    });

    this.scene.add(this.actualRoom);
    this.actualRoom?.scale.set(0.11, 0.11, 0.11);
  }

  setAnimation() {
    this.mixer = new THREE.AnimationMixer(this.actualRoom);
    if (this.room) {
      this.fish = this.mixer.clipAction(this.room.animations[91]);
      this.fish.play();
    }
  }
  resize() {}
  update() {
    this.mixer.update(this.time.delta * 0.0009);
  }
}
