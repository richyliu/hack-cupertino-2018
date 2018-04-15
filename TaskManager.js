var priorityTotal = { };
var allTasks = [];

function addTask(nextT) {
    if (allTasks.length <= 1) 
    { allTasks.push(nextT); return; }

    console.log(allTasks.length);

    var i;

    for (i = 0; i < allTasks.length - 1; i ++) {
        if (allTasks[i].getPriority() <= nextT.getPriority() &&
            allTasks[i + 1].getPriority() >= nextT.getPriority()) {
        
            allTasks.splice(i + 1, 0, nextT);
            return;
        }
    }

    if (allTasks[i].getPriority() > nextT.getPriority()) { 
        allTasks.splice(0, 0, nextT);
    }

    else {
        allTasks.push(nextT);
    }
}

function removeTask() {
    console.log(allTasks.length);    
    allTasks.shift();
}

function getPendingTask() {
    var a = allTasks[0];
    removeTask();

    return (a);
}

//Requires an array

function makePriorityList(array) {
    var i;

    for (i = 0; i < array.length; i ++) { 
        priorityTotal[array[i]] = (i + 2);
    }     
}

class Task 
{
    constructor(sub) {
        this.creationTime = new Date();
        this.subject = sub;
    
        this.priority = priorityTotal[this.subject];
        this.priority *= this.creationTime.getTime();   
    }

    getPriority() {
        return (this.priority);
    }
}

/*
//Task 1 = Math 
//Task 2 = Lit
//Task 3 = Bio
//Task 4 = PE
//Task 5 = etc.... 

var template = [ "Math", "Lit", "Bio", "PE", "Intro. to Java", "Buisness" ];

makePriorityList(template);

var add1 = new Task(template[2]);
var add2 = new Task(template[1]);
var add3 = new Task(template[5]);
var add4 = new Task(template[0]);
var add5 = new Task(template[3]);

addTask(add1);
addTask(add2);
addTask(add3);
addTask(add4);
addTask(add5);

while (allTasks.length > 0) {
    var cur = getPendingTask();
    
    console.log(cur.subject);
    console.log(cur.priority);
}
*/
