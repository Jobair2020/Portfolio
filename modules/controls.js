import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { camera } from "./camera.js";

const canvas = document.querySelector(".webgl");
const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

export { controls };