import Experience from "../Experience";
import * as THREE from "three";
import Room from "./Room";
import Environment from "./Environment";
export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      this.enviroment = new Environment();
      this.room = new Room();
    });

    this.room = new Room();
  }

  resize() {}
  update() {
    if (this.room) {
      this.room.update();
    }
  }
}
