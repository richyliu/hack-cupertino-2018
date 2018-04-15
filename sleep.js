//key = maximum age value = recommended min to recommended max
const recommended = {
	0.33: [14, 17],
	0.99: [12, 15],
	2.99: [11, 14],
	5.99: [10, 13],
	13.99: [9, 11],
	17.99: [8, 10],
	64.99: [7, 9],
	122.99: [7, 8]
}
var hoursOfSleep = localStorage.getItem('hoursOfSleep');
var age = localStorage.getItem('age');

	// [key = date, value = hours of sleep (DECIMAL)]
function add(daysAgo, hoursOfSleep){
	if (hoursOfSleep >= 0 && daysAgo >= 0){
		//
		for (var i = daysAgo; i >= hoursOfSleep.length(); i--){
			hoursOfSleep.push(-1);
		}
		hoursOfSleep[daysAgo] = hoursOfSleep;
		hoursOfSleep.sort();
	} else {
		//return a message saying that's not acceptable
	}
	
	localStorage.setItem('hoursOfSleep', hoursOfSleep);
}
function setAge(age){
	this.age = age;
	localStorage.setItem('age', age);
}
function average(start, end){
	var total = 0.0;
	for (var i = start; i <= end; i++){
		if (i >= 0) {
			total += hoursOfSleep[i];
		}
	}
	return total / (start - end + 1);
}
function sleepStatus(){
	//i = number of days since past week
	if (recommended[getAgeRange()][0] > average(7, 0)){
		if (recommended[getAgeRange()][1] < average(7, 0)){
			return "Good job! You may be sleeping a little more than necessary. Sleep up to a maximum of " + recommended[getAgeRange()][1] + " hours; You're currently sleeping " + averageHours(7, 0) + "hours on average.";
		} 
		return "Good job! Your sleep schedule is on point! Maintain sleeping between " + recommended[getAgeRange()][0] + " hours and " + recommended[getAgeRange()][1] + " hours!";
	}
	return "Uh oh, you aren't getting enough sleep on average. Try to sleep at least + " + recommended[getAgeRange()][0] + " hours for the next few days."; 
}
function getAgeRange(){
	for (var i = 0; i < Objet.keys(recommended).length(); i++){
		if (this.age < Object.keys(recommended)[i]){
			return Object.keys(recommended[i]);
		}
	}
}
