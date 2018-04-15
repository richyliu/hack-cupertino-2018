var statuses = localStatus.getItem('mealstatus');
const mealTypes = {
	"breakfast": 0,
	"lunch": 1,
	"dinner", 2
}
/* daysAgo is a double array
 * daysAgo 0: [breakfastSatisfaction, lunchSatisfaction, dinnerSatisfaction]
 * daysAgo 1: " "
 *
 * b = bad g = good a = average
*/
function addWellNess(daysAgo, satisfaction, mealType){
	console.log("");
	for (var i = daysAgo; i >= statuses.length(); i--){
		statuses.push(['n', 'n', 'n']);
	}
	statuses[daysAgo][mealTypes[mealType]] = satisfaction;
	localStorage.setItem('mealstatus', statuses);
}

function isOkay(){
	var meter = 0;
	for (var i = 0; i < Math.min(7, statuses.length()); i++){
		for (var j = 0; j < statuses[i].length(); i++){
			if (statuses[i][j] == 'g'){
				statuses++;
			}
			if (statuses[i][j] == 'b'){
				statuses--;
			}
		}
	}
	return meter >= 0;
}