document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("minus").onclick = function() {
        let val = document.getElementById("numValue").value;
        if (val > 0){
            document.getElementById("numValue").value = val-1;
        } else {
            document.getElementById("minus").disabled = true;
        }
    }
    document.getElementById("plus").onclick = function() {
        let val = document.getElementById("numValue").value;
        if (val < 9){
            document.getElementById("numValue").value = Number(val)+1;
        } else {
            document.getElementById("plus").disabled = true;
        }
    }
    


});