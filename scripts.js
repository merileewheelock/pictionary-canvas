var canvas = document.getElementById("canvas");
// console.log(canvas);
// console.dir(canvas); // This will give documentation of the canvas itself and everything attached to it
var context = canvas.getContext("2d");

// Set up the base options for the pictionary board
var color = "#F7A84B";
var thickness = 10;
var colorPicker = document.getElementById("color-picker");
var thicknessPicker = document.getElementById("thickness");
var mouseDown = false;
var mousePosition = {};
var lastMousePosition = null; // i.e. not set

// These function(event) functions are anonymous functions that don't need to be named
// because they only run when addEventListener occurs

// mousemove if created in JS can be written mousedown; if added to HTML, would be onmousedown

colorPicker.addEventListener("change", function(event){
	// console.log(event);
	color = colorPicker.value; // This is a property, properties have methods
	// color = event.target.value // Will do the same as above
	console.log(color);
});

thicknessPicker.addEventListener("change", function(event){
	thickness = thicknessPicker.value;
	// console.log(thickness);
});

canvas.addEventListener("mousedown", function(event){
	mouseDown = true;
});

canvas.addEventListener("mouseup", function(event){
	mouseDown = false;
	lastMousePosition = null;
});

canvas.addEventListener("mousemove", function(event){
	if (mouseDown){
		// console.log(event)
		// console.log("User has pressed the mouse down and is moving");

		// The user has either just shown up and we don't have last mouse position
		// OR the user let go of the mouse and we have a new last mouse position
		if (lastMousePosition == null){
			lastMousePosition = { // Making this an object - property: value
				x: event.offsetX,  // Use offset to not consider the border or margin
				y: event.offsetY
			}
		}

		mousePosition.x = event.offsetX; // This is getting the location of the mouse if the mouse is down
		mousePosition.y = event.offsetY;
		// console.log(mousePosition.x);

		context.strokeStyle = color;
		context.lineJoin = "bevel"; // Will make the line look like a ballpoint pen
		context.lineWidth = thickness;
		context.beginPath();
		context.moveTo(lastMousePosition.x, lastMousePosition.y);
		context.lineTo(mousePosition.x, mousePosition.y);
		context.stroke(); // This will draw on the canvas
		context.closePath();

		lastMousePosition = {
			x: mousePosition.x,
			y: mousePosition.y
		}
	}
});
