import * as THREE from "./build/three.module.js"
const section = document.querySelector("section.book")
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
    );

const renderer = new THREE.WebGLRenderer({ alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
section.appendChild( renderer.domElement );

const ambient = new THREE.AmbientLight(0x222222);
scene.add(ambient);

const light = new THREE.DirectionalLight(0xffffff);
light.position.set(0,0,4);
scene.add(light);

const loader = new THREE.TextureLoader();
// 順番は持ち手、背骨、天面、底面、表紙、裏表紙
const urls = [
    "./pics/edge.png", "./pics/spine.png",
    "./pics/top.png", "./pics/bottom.png",
    "./pics/front.png", "./pics/back.png"
]

const geometry = new THREE.BoxGeometry( 3.5, 5, 0.5 );
const materials = urls.map(url => {
    return new THREE.MeshLambertMaterial({
        map: loader.load(url)
    })
});
const objBook = new THREE.Mesh( geometry, materials );
objBook.position.set(2,0,1);
scene.add( objBook );


// 動きの量を調節する部分
let currentTimeLine = window.pageYOffset / 3000;
let aimTimeLine = window.pageYOffset / 3000;
camera.position.z = 6;

// 本を出現させ、回転させる部分
function animate() {
	requestAnimationFrame( animate );
    currentTimeLine += (aimTimeLine - currentTimeLine) * 0.5;
    const rx = currentTimeLine * -0.5 + 0.5;
    const ry = (currentTimeLine * 0.5+1) * Math.PI *2;
    objBook.rotation.set(rx,ry,0);
    renderer.render( scene, camera );  
};
animate();

// 画面スクロールした時に
window.addEventListener("scroll", ()=>{
    aimTimeLine = window.pageYOffset / 1000;
});
