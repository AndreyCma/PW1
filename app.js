document.addEventListener("DOMContentLoaded", () => {

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(extract(2,4));
    
    function extract(start,end) {
        let extractedNumbers = new Array();
        for (let i = start; i <= end; i++) {
            extractedNumbers.push(numbers[i]);
        }
        return extractedNumbers;
    }
      
      

});