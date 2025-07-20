import * as THREE from "three"


const shapes = [];
const mat = new THREE.MeshPhysicalMaterial({ 
  color: '#C75D2C',
  roughness: 0.2,
  transmission: 1,
  thickness: 1,
  side: THREE.DoubleSide,
});
for (let i = 0; i < 100; i++) {
  let geometry;
  const type = Math.floor(Math.random() * 4); // 0 to 3

  switch (type) {
    case 0:
      geometry = new THREE.IcosahedronGeometry(0.3, 0); // Cube
      break;
    case 1:
      geometry = new THREE.TorusKnotGeometry(0.2, 0.1, 32, 8); // Sphere
      break;
    case 2:
      geometry = new THREE.TorusGeometry(0.3, 0.1, 16, 100); // Torus
      break;
    case 3:
      geometry = new THREE.ConeGeometry(0.3, 0.6, 20); // Cone
      break;
  }
  const mesh = new THREE.Mesh(geometry, mat);
  // Random position
  mesh.position.set(
    (Math.random() - 0.5) * 30,
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.7) * 2
  );

  shapes.push(mesh);
}

export { shapes }