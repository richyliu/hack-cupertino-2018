const recMin = 10;
var soFarPerDay = localStorage.getItem('soFarPerDay');
function start(min){
	if (min === undefined){
		min = recMin;
	}
	if (min > recMin){
		console.log("You're meditating for longer than the recommended time, which is " + recMin + " minutes. Are you sure?");
		// make button
	}
	setTimeout(function() {
		stop(min);
	}, min * 60 * 1000);
	//play music
	//set screen to blank (i.e. turned off)
	//if user taps the screen, screen turns back up automatically
	// show how many min/sec left of meditation
	//show cancel button
	// cancel button stops the setTimeout function and calls stop(min) and add soFarPerDay by mins that passed and returns back to UI
	
	//add functionality that resets soFarPerDay to 0 each time a day passes
}
function stop(howLong){
	console.log("You meditated for " + howLong + "minutes . You meditated for " + soFarPerDay + "minutes today. Keep it up! :)");
}