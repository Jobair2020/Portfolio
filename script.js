import * as THREE from "three";
import { scene } from "./modules/scene.js";
import { camera } from "./modules/camera.js";
import { renderer } from "./modules/renderer.js";
import "./modules/texts.js";
import { shapes } from "./modules/stars.js";
import "./modules/eventListeners.js";


shapes.forEach( shape =>{
  scene.add(shape);
});

const clock = new THREE.Clock();
function animate() {
  const elapsed = clock.getElapsedTime();

  shapes[Math.floor(Math.random()* 100)].rotation.x = elapsed * 0.5;

  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
}
animate();