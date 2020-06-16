

// changing individual properties with code and using setInterval
var rotationSpeed = -0.005;
var myOtherBox = document.getElementById('myOtherBox');
var positionx = 0

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed / 2;
	myOtherBox.object3D.rotation.z += rotationSpeed / 4;

	positionx += rotationSpeed;
	myOtherBox.object3D.position.x = positionx % 10;
	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps