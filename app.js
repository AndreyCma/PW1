document.addEventListener("DOMContentLoaded", () => {

    let user = new Object();

    user = {
        name: "John",
        surname: "Smith"
    }
    console.log(user);

    user.name = "Pete";
    console.log(user);

    delete user["name"];
    console.log(user);



});