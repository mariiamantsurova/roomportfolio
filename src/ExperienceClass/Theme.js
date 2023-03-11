import EventEmitter from "events";
import Styles from "../styles/experience.module.scss";

export default class Theme extends EventEmitter {
  constructor(toggleBtn, toggleCircle) {
    super();
    this.toggleBtn = toggleBtn;
    this.toggleCircle = toggleCircle;
    this.theme = "light";
    this.body = document.querySelector("body");
    this.setEventListeners();
  }
  setEventListeners() {
    this.toggleBtn.addEventListener("click", () => {
      this.toggleCircle.classList.toggle(`${Styles["slide"]}`);
      this.body.classList.toggle(`${Styles["darkTheme"]}`);
      this.theme = this.theme === "light" ? "dark" : "light";
      this.emit("switch", this.theme);
    });
  }
}
