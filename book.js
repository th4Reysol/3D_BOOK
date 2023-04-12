import * as THREE from "./build/three.module.js"
const section = document.querySelector("section.book")
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
section.appendChild( renderer.domElement );

const ambient = new THREE.AmbientLight(0x888888);
scene.add(ambient);

const light = new THREE.DirectionalLight(0xffffff);
light.position.set(0,0,6);
scene.add(light);

const geometry = new THREE.BoxGeometry( 3.5, 5, 0.5 );
const material = new THREE.MeshLambertMaterial({
    color: "green"
});
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


camera.position.z = 6;

function animate() {
	requestAnimationFrame( animate );
    renderer.render( scene, camera );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
animate();