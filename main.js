
import {
	RectAreaLight,
	Scene, 
	PerspectiveCamera, 
	WebGLRenderer, 
	MeshPhongMaterial, 
	Mesh,
	TetrahedronGeometry,
	HemisphereLight,
	PointLight,
} from 'three';

import {OrbitControls} from './extra/OrbitControls.legacy';

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const controls = new OrbitControls(camera);

const hemisphere = new HemisphereLight( 0x0099ff, 0xcc3300, 1 );
scene.add(hemisphere);

const renderer = new WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new PointLight(0xffffff, 1);
light.position.z = 5;
light.position.y = 15;
scene.add(light);

const geometry = new TetrahedronGeometry(10, 0);
const geometry2 = new TetrahedronGeometry(10, 0);
const material = new MeshPhongMaterial({color: 0xff66ff});
const mesh1 = new Mesh(geometry, material);
const mesh2 = new Mesh(geometry2, material);
mesh2.rotation.x = 45;
scene.add(mesh1);
scene.add(mesh2);

camera.position.z = 20;

const render = () => {
	requestAnimationFrame(render);
	mesh1.rotation.x += 0.01;
	mesh1.rotation.z += 0.001;
	mesh2.rotation.x += 0.01;
	mesh2.rotation.z += 0.001;

	renderer.render(scene, camera);
};

render();
