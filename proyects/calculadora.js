function suma() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let resultado = num1 + num2;

    document.getElementById("p_resultadoComparacion").innerHTML = resultado;
    let lista = [num1,"+", num2,"=",resultado]
    return lista
}

function resta() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let resultado = num1 - num2;

    document.getElementById("p_resultadoComparacion").innerHTML = resultado;
    return [num1, "-", num2,"=",resultado]
}
function multiplicacion() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let resultado = num1 * num2;

    document.getElementById("p_resultadoComparacion").innerHTML = resultado;
    return [num1,"*",num2,"=",resultado]
}

function division() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let resultado = num1 / num2;

    document.getElementById("p_resultadoComparacion").innerHTML = resultado;
    return [num1,"/",num2,"=",resultado]
}

function operacion(){
    switch (document.getElementById("operacion").value) {
        case "suma":
            historial.unshift(suma());
            break

        case "resta":
            historial.unshift(resta());
            break

        case "multiplicacion":
            historial.unshift(multiplicacion());
            break

        case "division":
            historial.unshift(division());
            break
    }
}

var historial = [];

function mostrar_historial(){

    console.log(historial);
    document.getElementById("p_historial").innerHTML = ""

    for (i=0; i<5; i++){
        document.getElementById("p_historial").innerHTML +=
        historial[i].join(" ") + "</br>";
    }
}