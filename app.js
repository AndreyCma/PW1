document.addEventListener("DOMContentLoaded", () => {
    let n = 5;
    let arr = new Array();
    arr = [2, 34, 100, 5, 62];

    //for
    for (let i = 0; i < n; i++){
        console.log(arr[i]);
    }

    //for in
    for (const key in arr) {
        if (Object.hasOwnProperty.call(arr, key)) {
            console.log(arr[key]); 
        }
    }

    // for of
    for (let element of arr) {
        console.log(element);
    }

    //foreach
    arr.forEach(element => {
        console.log(element);
    });

    //map
    let mapArray = arr.map(currentValue => currentValue);
    console.log(mapArray);

    //default output
    console.log(arr);
});