document.addEventListener("DOMContentLoaded", () => {

    function addTable() {
        let DynamicTable = document.querySelector("#DynamicTable");
      
        let table = document.createElement('TABLE');
        table.border = '1';
      
        let tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);
      
        for (let i = 0; i < 8; i++) {
          let tr = document.createElement('TR');
          tableBody.appendChild(tr);
      
          for (let j = 0; j < 8; j++) {
            let td = document.createElement('TD');
            td.width = '75';
            td.height= '75';
            if ((i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1)){
                td.style.background = "black";
            }
            tr.appendChild(td);
          }
        }
        DynamicTable.appendChild(table);
      }
      addTable();
    


});