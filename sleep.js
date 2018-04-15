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
var hoursOfSleep = [];
var age;

	// [key = date, value = hours of sleep (DECIMAL)]
function add(daysAgo, hoursOfSleep){
	hoursOfSleep[daysAgo] = hoursOfSleep;
	hoursOfSleep.sort();
}
function subDict(start, end){
	var entries = [];
	//iterate to see which dates falls in between start and range
	for (var i = start; i <= end; i++){
		if (Object.keys(this.hoursOfSleep)[i]){
			entries.push(this.hoursOfSleep[Object.keys(this.hoursOfSleep[i])]);
		}
	}
	return entries;
	/*
	var total = 0.0;
	for (var i in entries){
		total += i;
	}
	return total;*/
	//get those dates' hours and get average
}
function totalHours(start, end){
	var total = 0.0;
	for (var i in subDict(start, end)){
		total += i;
	}
	return total;
}
function averageHours(start, end){
	var total = 0.0;
	for (var i in subDict(start, end)){
		total += i;
	}
	return total / Object.keys(subDict(start, end)).length();
}
function sleepStatus(){
	//i = number of days since past week
	if (recommended[getAgeRange()][0] > averageHours(7, 0)){
		if (recommended[getAgeRange()][1] < averageHours(7, 0)){
			return "Good job! You may be sleeping a little more than necessary. Sleep up to a maximum of " + recommended[getAgeRange()][1] + " hours; You're currently sleeping " + averageHours(7, 0) + "hours on average.";
		} else {
			return "Good job! Your sleep schedule is on point! Maintain sleeping between " + recommended[getAgeRange()][0] + " hours and " + recommended[getAgeRange()][1] + " hours!";
		}
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
