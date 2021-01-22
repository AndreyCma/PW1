document.addEventListener("DOMContentLoaded", () => {

    let ol = document.getElementById("list");

    function addLi(i) {
        let li = document.createElement("li");
        if (i % 2 == 0) {
            li.setAttribute("id", "even");
            li.style.background = "green";
        } else {
            li.setAttribute("id", "odd");
            li.style.background = "purple";
        }
        li.appendChild(document.createTextNode("Элемент "+i));
        ol.appendChild(li);

    }
    var callCount = 1;
    var repeater = setInterval(function () {
    if (callCount <= 20) {
        addLi(callCount);
        callCount += 1;
    } else {
        clearInterval(repeater);

    }
    }, 2000);

    


});