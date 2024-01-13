import * as THREE from "three/build/three.module.js"

var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 100);
// 1. FOV itu mengatur besar kecil kamera
// 2. apect itu seberapa luas ukuran layar web
// 3. near itu mengatur seberapa dekat yang dapat di lihat kamera;
// 4. far itu mengatur seberapa jauh yang dapat di lihat kamera;

var renderer = new THREE.WebGLRenderer();
var box = new THREE.BoxGeometry(1, 1, 1);
var boxmat = new THREE.MeshBasicMaterial({ color: 0xff0000 })
var boxMesh = new THREE.Mesh(box, boxmat)
scene.add(boxMesh);
cam.position.z = 5;


renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)
window.addEventListener("resize", () => {
    console.log("lol")
    renderer.setSize(window.innerWidth, window.innerHeight);
    cam.aspect = window.innerWidth / window.innerHeight;
    cam.updateProjectionMatrix();
})

function draw() {
    requestAnimationFrame(draw)
    boxMesh.rotation.y += 0.01;
    renderer.render(scene, cam);
}
draw()




