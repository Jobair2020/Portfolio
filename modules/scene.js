import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

// const axesHelper = new THREE.AxesHelper();
// axesHelper.position.set(0, 0, 0);

const scene = new THREE.Scene();
scene.background = new THREE.Color("#D96F32");
scene.fog = new THREE.Fog(0xeeeeee, 1, 100)

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(6,-3,0)
scene.add(dirLight)
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// new RGBELoader().load(
//     '../HDR Images/citrus_orchard_road_puresky_2k.hdr',
//     (hdr) => {
//         hdr.mapping = THREE.EquirectangularReflectionMapping
//         scene.environment = hdr;
//         scene.background = hdr;
//     }
// );
// scene.add(axesHelper);

export { scene };
