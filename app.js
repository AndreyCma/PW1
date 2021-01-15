document.addEventListener("DOMContentLoaded", () => {

    let arr = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, "word", 7, 8, false, 9, 100];

    console.log(filter());
    function filter() {
        let result = new Array();
        for (let i = 0; i < arr.length; i++){
            if (arr[i] >=0 && arr[i] <=9 && typeof(arr[i]) == "number") result.push(arr[i]);
        }
        return result;
    }


});