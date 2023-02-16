import EventEmitter from "events";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import Experience from "../ExperienceClass/Experience";
export default class Resources extends EventEmitter {
	constructor(assets) {
		super();
		this.experience = new Experience();
		this.renderer = this.experience.renderer;

		this.assets = assets;

		this.items = {};
		this.queue = this.assets.length;
		this.loaded = 0;

		this.setLoaders();
		this.startLoding();
	}

	setLoading() {
		this.loaders = {};
	}
	startLoading() {}
}
