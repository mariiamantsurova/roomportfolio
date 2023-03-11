import Experience from "../Experience";
import Room from "./Room";
import Controls from "./Controls";
import Floor from "./Floor";
import Environment from "./Environment";
export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;
    this.theme = this.experience.theme;

    this.resources.on("ready", () => {
      this.enviroment = new Environment();
      this.room = new Room();
      this.floor = new Floor();
      this.controls = new Controls();

      this.experience.theme.on("switch", (theme) => {
        this.switchTheme(theme);
      });
    });
  }
  switchTheme(theme) {
    if (this.enviroment) {
      this.enviroment.switchTheme(theme);
    }
  }
  resize() {}
  update() {
    if (this.room) {
      this.room.update();
    }
    if (this.controls) {
      this.controls.update();
    }
  }
}
