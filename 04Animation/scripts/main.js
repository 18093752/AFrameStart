

// changing individual properties with code and using setInterval
var rotationSpeed = -0.005;
var myOtherBox = document.getElementById('myOtherBox');
var positionx = 0

x = 0  // center
y = 5   // center
r = 5   // radius
a = 0    // angle (from 0 to Math.PI * 2)


function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed / 2;
	myOtherBox.object3D.rotation.z += rotationSpeed / 4;
	a = (a + rotationSpeed) % (Math.PI*2);
	myOtherBox.object3D.position.x = r * Math.cos(a);
	myOtherBox.object3D.position.y = r * Math.sin(a);
	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps