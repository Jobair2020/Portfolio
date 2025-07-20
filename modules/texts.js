import * as THREE from "three";
import { scene } from "../modules/scene.js";
import { FontLoader } from "three/examples/jsm/Addons.js";
import { TextGeometry } from "three/examples/jsm/Addons.js";
import { depth } from "three/tsl";
import { torus, torus2, torus3, torus4 } from "./cards.js";
import { controls } from "./controls.js";


const name = "JOBAIR AL NAHIAN";

const about = "About Me"
const introText = [

  "Location: Dhaka, Bangladesh",
  "Email: jobairnahian2017@gmail.com",
  "LinkedIn: linkedin.com/in/jobair-al-nahian",
  "GitHub: github.com/Jobair2020",
  "",
  "Objective:",
  "Recent CSE grad from KUET. Passionate about teaching,",
  "research, and building engaging tech solutions.",
].join("\n"); // convert array to multiline string

const projects = 
  "Projects"
const projectsText = [
  "• Doctor Chat – NLP chatbot (Flask + React)",
  "• Cardiac Recorder – Android health tracker",
  "• Shop Management DB – Oracle + SQL queries",
  "• 3D Food Court – OpenGL & C++",
  "• BasketBall Predictor – Python + OpenCV",

].join("\n");

const education = 
  "Education"
const educationText = [
  "BSc in Computer Science & Engineering (CSE)",
  "Khulna University of Engineering & Technology (KUET)",
  "CGPA: 3.82 (up to 7th semester)",
  "2020 – Present",
  "",
  "HSC - Govt. City College, Chittagong",
  "GPA: 5.00",
  "2017 – 2019"
].join("\n");

const awards = 
  "Awards"
const awardsText = [
  "• ITEE Level-2: Fundamental IT Engineer Exam (Japan)",
  "• Dean's Award – Faculty of EEE, KUET (2022, 2023)",
  "• Karigori Scholarship – Merit-based (2021–2024)",
  "• Divisional Science Olympiad Qualifier (2017)",
].join("\n");

const material_text = new THREE.MeshBasicMaterial({
  color: '#F3E9DC'
});
const material_Heading = new THREE.MeshBasicMaterial({
  color: '#F8B259'
})

const loader = new FontLoader();
loader.load('../Font/Roboto_Regular.json', (font) => {
  const geometry_name = new TextGeometry(name, {
    font: font,
    size: 1,
    depth: -1,
    curveSegments: 24,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.04,
    bevelSegments: 3
  });
  const geometry_about = new TextGeometry(about, {
    font: font,
    size: 0.7,
    depth: -0.3,
    curveSegments: 24,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.04,
    bevelSegments: 10
  })
  const geometry_projects = new TextGeometry(projects, {
    font: font,
    size: 0.8,
    depth: -0.3,
    curveSegments: 24,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.04,
    bevelSegments: 10
  });

  const geometry_education = new TextGeometry(education, {
    font: font,
    size: 0.7,
    depth: -0.3,
    curveSegments: 24,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.04,
    bevelSegments: 10
  });
  const geometry_awards = new TextGeometry(awards, {
    font: font,
    size: 0.8,
    depth: -0.3,
    curveSegments: 24,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.04,
    bevelSegments: 10
  })

  // geometry_name.computeBoundingBox();
  // const box = geometry_name.boundingBox;
  // const center = new THREE.Vector3();
  // box.getCenter(center);
  // controls.target.copy(center)


  const text_name = new THREE.Mesh(geometry_name, material_text);
  text_name.position.set(-5.8, 6, 0.7);
  text_name.rotation.x = Math.PI / 3;
  text_name.castShadow = true;
 

  const name_about = new THREE.Mesh(geometry_about, material_Heading);
  name_about.position.set(-10, 4.7, 0.4);
  name_about.rotation.x = Math.PI / 3;
  name_about.castShadow = true;

  const name_education = new THREE.Mesh(geometry_education, material_Heading);
  name_education.position.set(-10, -1.5, 0.4);
  name_education.rotation.x = Math.PI / 3;
  name_education.castShadow = true;

  const name_projects = new THREE.Mesh(geometry_projects, material_Heading);
  name_projects.position.set(1.5, 4.7, 0.4);
  name_projects.rotation.x = Math.PI / 3;
  name_projects.castShadow = true;


  const name_awards = new THREE.Mesh(geometry_awards, material_Heading);
  name_awards.position.set(1.5, -1.5, 0.4);
  name_awards.rotation.x = Math.PI / 3;
  name_awards.castShadow = true;

  scene.add(text_name);
  scene.add(name_about);
  scene.add(name_projects);
  scene.add(name_education);
  scene.add(name_awards);
  
});


loader.load("../Font/Roboto_Regular.json", (font) => {

  const geometry_intro = new TextGeometry(introText, {
  font: font,
  size: 0.25,
  depth: 0.1,
  curveSegments: 12,
  beveledEnabled: true,
  bevelThickness: 0.03,
  bevelSize: 0.02,
  bevelOffset: 0,
  bevelSegments: 3,
});
const geometry_education = new TextGeometry(educationText, {
  font: font,
  size: 0.25,
  depth: 0.1,
  curveSegments: 12,
  beveledEnabled: true,
  bevelThickness: 0.03,
  bevelSize: 0.02,
  bevelOffset: 0,
  bevelSegments: 3,
});

const geometry_project = new TextGeometry(projectsText, {
  font: font,
  size: 0.25,
  depth: 0.1,
  curveSegments: 12,
  beveledEnabled: true,
  bevelThickness: 0.03,
  bevelSize: 0.02,
  bevelOffset: 0,
  bevelSegments: 3,
});

const geometry_awards = new TextGeometry(awardsText, {
  font: font,
  size: 0.25,
  depth: 0.1,
  curveSegments: 12,
  beveledEnabled: true,
  bevelThickness: 0.03,
  bevelSize: 0.02,
  bevelOffset: 0,
  bevelSegments: 3,
});
  const text_intro = new THREE.Mesh(geometry_intro, material_text);
  text_intro.position.set(-10, 4, 0);

  const text_education = new THREE.Mesh(geometry_education, material_text);
  text_education.position.set(-10,-2, 0);

  const text_projects = new THREE.Mesh(geometry_project, material_text);
  text_projects.position.set(1.5, 4, 0);

  const text_awards = new THREE.Mesh(geometry_awards, material_text);
  text_awards.position.set(1.5, -2, 0);

  text_intro.position.z += 0.5;
  text_education.position.z += 0.5;
  text_projects.position.z += 0.5;
  text_awards.position.z += 0.5;

  scene.add(text_intro);
  scene.add(text_education);
  scene.add(text_projects);
  scene.add(text_awards);
});
