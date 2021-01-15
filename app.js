document.addEventListener("DOMContentLoaded", () => {
    let styles = ["Джаз","Блюз"];
    styles.push("Рок-н-ролл");
    console.log(styles);
    let len = styles.length;
    center  = Math.ceil(len / 2) - 1;
    styles[center] = "Классика";
    console.log(styles);
    console.log(styles[0]);
    styles.shift();
    console.log(styles);
    styles.unshift("Рэп", "Регги");
    console.log(styles);


});