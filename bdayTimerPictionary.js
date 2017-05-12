var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var color = "#4AA4BE";
var thickness = 10;
var colorPicker = document.getElementById("color-picker");
var thicknessPicker = document.getElementById("thickness");
var mouseDown = false;
var mousePosition = {};
var lastMousePosition = null;

colorPicker.addEventListener("change", function(event){
	color = colorPicker.value; 
	console.log(color);
});

thicknessPicker.addEventListener("change", function(event){
	thickness = thicknessPicker.value;
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
		if (lastMousePosition == null){
			lastMousePosition = {
				x: event.offsetX, 
				y: event.offsetY
			}
		}

		mousePosition.x = event.offsetX; 
		mousePosition.y = event.offsetY;

		context.strokeStyle = color;
		context.lineJoin = "bevel"; 
		context.lineWidth = thickness;
		context.beginPath();
		context.moveTo(lastMousePosition.x, lastMousePosition.y);
		context.lineTo(mousePosition.x, mousePosition.y);
		context.stroke(); 
		context.closePath();

		lastMousePosition = {
			x: mousePosition.x,
			y: mousePosition.y
		}
	}
});

function Timer(id, endtime){
	this.endtime = endtime;
	this.id = id;
	var clock = document.getElementById(id);
	this.weeksSpan = clock.querySelector(".weeks");
	this.daysSpan = clock.querySelector(".days");
	this.hoursSpan = clock.querySelector(".hours");
	this.minutesSpan = clock.querySelector(".minutes");
	this.secondsSpan = clock.querySelector(".seconds");
}

Timer.prototype.getTimeRemaining = function(){
	var t = Date.parse(this.endtime) - Date.parse(new Date());
	this.seconds = Math.floor((t / 1000) % 60);
	this.minutes = Math.floor((t / 1000 / 60) % 60);
	this.hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	this.days = Math.floor((t / (1000 * 60 * 60 * 24)) % 7);
	this.weeks = Math.floor(t / (1000 * 60 * 60 * 24 * 7));
}

Timer.prototype.updateTimer = function(){
	this.getTimeRemaining();
	this.weeksSpan.innerHTML = this.weeks;
	this.daysSpan.innerHTML = this.days;
	this.hoursSpan.innerHTML = this.hours;
	this.minutesSpan.innerHTML = this.minutes;
	this.secondsSpan.innerHTML = this.seconds;
}

var endDate = new Date(Date.parse("July 23, 2017"));
// console.log(endDate);

function newBday(){
	var submitButton = document.getElementById("submit-button");
	submitButton.addEventListener("click",function(event){
		var newTimerValue = document.getElementById("bday-picker");
		console.log(newTimerValue);
		birthdayTimer = new Timer("timer-div", newTimerValue);
	})
}


var birthdayTimer = new Timer("timer-div", endDate);

setInterval(
	function(){
		birthdayTimer.updateTimer();
	}, 1000) 