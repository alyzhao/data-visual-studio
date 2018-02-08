var renderer;
var width = document.getElementById('canvas-frame').clientWidth;
var height = document.getElementById('canvas-frame').clientHeight;

function initThree() {
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});

	renderer.setSize(width, height);
	document.getElementById('canvas-frame').appendChild(renderer.domElement);
	renderer.setClearColor(0xFFFFFF, 1.0);
}

var camera;
function initCamera() {
	camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);

	var options = {
		position: {
			x: 0,
			y: 1000,
			z: 0
		},
		up: {
			x: 0,
			y: 0,
			z: 1
		}
	}

	Object.assign(camera.position, options.position);
	Object.assign(camera.up, options.up);

	camera.lookAt({
		x: 0,
		y: 0,
		z: 0
	});
}

var scene;
function initScene() {
	scene = new THREE.Scene();
}

var light;
function initLight() {
	light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
	light.position.set(100, 100, 200);
	scene.add(light);
}

function threeStart(...rest) {
	initThree();
	initCamera();
	initScene();
	initLight();

	for (var f of rest) {
		f();
	}

	renderer.clear();
	renderer.render(scene, camera);
}
