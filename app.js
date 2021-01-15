document.addEventListener("DOMContentLoaded", () => {
    let students = new Array();
    let marks = new Array();
    students = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    let quantity = students.length;
    let quantityMarks = 4;
    
    for (let i = 0; i < quantity; i++){
        marks[i] = new Array();
        for (let j = 0; j < quantityMarks; j++) {
            marks[i][j] = Math.ceil(Math.random() * 10);
        }
    }

    //first
    let average = 0;
    let averages = new Array();
    let badStudents = new Array();
    for (let i = 0; i < quantity; i++){
        average = 0;
        for (let j = 0; j < quantityMarks; j++){

            average += marks[i][j];
        }
        average /= quantityMarks;
        averages.push(average);
        console.log(students[i],": ", average);
        if (average < 5) badStudents.push(students[i]);
    }
    let maxAverage = Math.max.apply(Math, averages);
    let minAverage = Math.min.apply(Math,averages);
    let maxIndex = averages.indexOf(maxAverage);
    let minIndex = averages.indexOf(minAverage);
    console.log("Students with max and min average. ","Max: ",students[maxIndex],"Min: ", students[minIndex]);
    console.log("Students with average < 5: ", badStudents);
    console.log("Averages: ", averages);
    let sortedAverages = new Array();
    for (let i = 0; i < quantity; i++){
        sortedAverages[i] = averages[i];
    }
    sortedAverages = sortedAverages.sort();
    sortedAverages = sortedAverages.reverse();  
    console.log("Sorted averages descending: ",sortedAverages);
    let sortedStudents = new Array();
    let classAverage = 0;
    for (let i = 0; i < quantity; i++){
        let sortIndex = averages.indexOf(sortedAverages[i]);
        sortedStudents.push(students[sortIndex]);
        classAverage += averages[i];
    }
    console.log("Sorted students", sortedStudents);
    classAverage /= quantity;
    console.log("Student that have average more than class average:")
    for (let i = 0; i < quantity; i++){
        if (averages[i] > classAverage) console.log(students[i]);
    }
    


});