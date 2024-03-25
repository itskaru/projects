window.onload = function () {
    loadData();
    AddTableRow();
  };

//Funcion cargar datos.
function loadData(file){
    let data = JSON.parse(localStorage.getItem(file));
    return data;
    
}

function AddTableRow(){
    const tableIndex = document.getElementById("tableIndex");
    const data = loadData("javascriptIndex");
    console.log(data.length);

    for (let i = 0; i < data.length; i++){
        let newRow = tableIndex.insertRow();

        let textCell = newRow.insertCell(0);
        let routeCell = newRow.insertCell(1);

        textCell.textContent = data[i]["textCell"];
        
        let newButton = document.createElement("button");
        newButton.textContent = "CLICK";
        newButton.onclick = function() {
            redirect(data[i]["routeCell"]);
        };

        routeCell.appendChild(newButton);
    }
}

function redirect (route) {
    window.location = route;
}