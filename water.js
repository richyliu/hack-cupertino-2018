var age = localStorage.getItem('age');
var waterCups = localStorage.getItem('waterCups');
var required = {
	9 : [5],
	14 : [7, 8],
	19 : [8, 11],
	123 : [13]
}
var hydratationData = []
function add(amount){
	waterCups += amount;
}
function remaining(){
	if (waterCups > getRequired()[1]){
		output.log("You are a little too hydrated. It's really not a bad thing, though.");
	} else if (waterCups >= getRequired()[0]){
		output.log("You are perfectly hydrated."
	} else {
		output.log("You're dehydrated! Drink " + (getRequired[0] - waterCups) + " more cups!");
	}
}
function getRequired(){
	for (var i = 0; i < Object.keys(required).length(); i++){
		if (this.age < Object.keys(required)[i]){
			return Object.keys(recommended[i]);
		}
	}
}