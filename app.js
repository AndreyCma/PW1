document.addEventListener("DOMContentLoaded", () => {

    const colors = ["red", "green", "blue"];

    const checkColors = (color) =>{
        return colors.findIndex(checkcolor => checkcolor === color);
    }
    console.log(checkColors("blue"));
    console.log(checkColors("test"));


});