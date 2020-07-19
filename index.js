var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset_btn = document.getElementById('Reset');
var lap = document.getElementById('lap');
var laps = document.getElementById('laps');
let seconds = 0;
let hours = 0;
let minutes = 0;
//variables for displaying
let display_sec = '00',
	display_min = '00',
	display_hour = '00';

var interval = null;
var status = 'started';
function stopWatch() {
	seconds++;
	if (seconds / 60 === 1) {
		seconds = 0;
		minutes++;
		if (minutes / 60 === 1) {
			minutes = 0;
			hours++;
		}
	}
	if (seconds < 10) {
		display_sec = '0' + seconds.toString();
	} else {
		display_sec = seconds;
	}
	if (minutes < 10) {
		display_min = '0' + minutes.toString();
	} else {
		display_min = minutes;
	}
	if (hours < 10) {
		display_hour = '0' + hours.toString();
	} else {
		display_hour = hours;
	}
	document.getElementById('display_value').innerHTML = display_hour + ':' + display_min + ':' + display_sec;
}

//function to start and stop the watch
start.addEventListener('click', function Start_Stop() {
	if (status === 'started') {
		interval = window.setInterval(stopWatch, 100);
		status = 'stopped';
	}
});
stop.addEventListener('click', function Stop() {
	if (status == 'stopped') {
		window.clearInterval(interval);
		status = 'started';
	}
});

reset_btn.addEventListener('click', function reset_clock() {
	window.clearInterval(interval);
	seconds = 0;
	minutes = 0;
	hours = 0;
	(display_hour = '00'), (display_min = '00'), (display_sec = '00');
	document.getElementById('display_value').innerHTML = '00:00:00';
	status = 'started';
	laps.innerHTML = '';
});

lap.addEventListener('click', function() {
	var new_element = document.createElement('p');
	var text = document.createTextNode(display_hour + ':' + display_min + ':' + display_sec);

	new_element.appendChild(text);
	laps.appendChild(new_element);
});
