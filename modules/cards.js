import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { scene } from "./scene.js";  

const geometry = new RoundedBoxGeometry(
      10,  // width
      5.5,  // height
      0.5,  // depth
      5,  // segments
      0.1 // radius for corners
    );
const material = new THREE.MeshPhysicalMaterial({
      color: '#F8B259',
      metalness: 0,
      roughness: 0.3,
      transmission: 0.7,
      thickness: 1,
      side: THREE.DoubleSide,
    });
// const material = new THREE.MeshBasicMaterial({
//   color: '#C75D2C',
//   transparent: true,
//   opacity: 0.5,
//   side: THREE.DoubleSide,
// });

//transparent torus
const torus = new THREE.Mesh(geometry, material);
const torus2 = new THREE.Mesh(geometry, material);
const torus3 = new THREE.Mesh(geometry, material);
const torus4 = new THREE.Mesh(geometry, material);

torus.position.set(-6,3,0);
torus2.position.set(-6,-3,0);
torus3.position.set(6,3,0);
torus4.position.set(6,-3,0);

scene.add(torus);
scene.add(torus2);
scene.add(torus3);
scene.add(torus4);
console.log(window.innerWidth, window.innerHeight);
// torus.rotation.y = - Math.PI /4;

export { torus, torus2, torus3, torus4 };