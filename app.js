document.addEventListener("DOMContentLoaded", () => {

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(numbers);
    numbers.splice(4,1,...[0,0,0]);

    console.log(numbers);
      
      

});