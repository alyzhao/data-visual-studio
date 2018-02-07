var renderer;
var width = document.getElementById('canvas-frame').clientWidth;
var height = document.getElementById('canvas-frame').clientHeight;

function initThree() {
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});

	render.setSize(width, height);
	document.getElementById('canvas-frame').appendChild(renderer.domElement);
	renderer.setClearColor(#fff, 1.0);
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
			z: 0
		}
	}

	Object.assign(camera.position, options.position);



}





