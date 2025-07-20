import * as THREE from "three";

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  50
);
camera.position.set(3, -6, 10);
camera.lookAt(6,-3,0);

// camera.position.set(0, 0, 10);
// camera.lookAt(0, 0, 0);
export { camera };