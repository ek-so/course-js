const task3Element = document.getElementById('task-3');

function task1Function() {
    alert('Task 1: This is an alert message!');
}

function task2Function(name) {
    alert(name);
}

task1Function();
task2Function("Task 2: Mood");

task3Element.addEventListener('click', task1Function);

function task4Function(someText1, someText2, someText3) {
    sumOfThree = someText1 + someText2 + someText3;
    alert(sumOfThree);
    return sumOfThree; 
}

task4Function("one", "two", "three");