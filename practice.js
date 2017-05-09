var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
// context.moveTo(0,0); // Means move the pen inside the canvas
// Move the pen/hand/tool to 100,100
context.moveTo(100,100);
// Draw a line to 200,200
context.lineTo(200,200); // This will tell what line to draw
// WITHOUT MOVING THE PEN, draw to 300,100
context.lineTo(300,100);
context.lineTo(100,200);
context.lineTo(300,150);
context.lineTo(100,100);
context.strokeStyle = "#FF0000";
// context.stroke(); // This will actually draw the line

// Draw a circle
context.beginPath();
context.fillStyle = "#FFFF00";
context.arc(200,200,50,0,1.5*Math.PI);
// context.fill();
// context.stroke(); // This will draw the border

// PI is a property ofthe Math object
// context.arc(x,y,r,sAngle,eAngle)

var x = 200;
var y = 200;
var radius = 50;
var xDirection = 1;
var yDirection = 1;
// var red = 0;
// var blue = 0;
// var green = 0;

function drawBall(){
	
	context.fillStyle = "#ff84e8";
	context.beginPath();
	context.arc(x,y,radius,0,2*Math.PI);
	context.clearRect(0,0,680,453); // This will draw a rectangle and clear the secion of screen
	context.fill();
	if ((x > 680-radius) || (x < radius)){
		// we have reached the right side. Reverse!
		xDirection = -xDirection;
	}
	if ((y > 453-radius) || (y < radius)){
		// we have reached the right side. Reverse!
		yDirection = -yDirection;
	}
	x += 3 * xDirection;
	y += 1 * yDirection;
	// var randomX = Math.random() * 4
	// var randomY = Math.random() * 4
	// x += randomX * xDirection;
	// y += randomY * yDirection;
	// red += 1;
	// blue += 1;
	// green += 1;

}

var ball = setInterval(drawBall,20); // We are passing drawBall

canvas.addEventListener("click", function(event){ // If the user clicks anywhere on the canvas
	console.log(event.x, event.y);
	console.log(Math.hypot(event.x, event.y));
	if (Math.hypot(event.x, event.y) <= 50){
		console.log("match");
	}
});



