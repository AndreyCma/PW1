document.addEventListener("DOMContentLoaded", () => {

    let numbers =  [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];
    console.log(uniqueSorted());

    function uniqueSorted() {
        let uniqueSet = new Set(numbers);
        let uniqueArray = Array.from(uniqueSet);
        let uniqueSortedArray = uniqueArray.sort();
        return uniqueSortedArray;


    }


});