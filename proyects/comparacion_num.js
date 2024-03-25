function compracion () {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    if (num1 > num2){
        document.getElementById("p_resultadoComparacion").innerHTML = 
        "El numero 1 es mayor que el numero 2."

    } else if (num1 < num2){
        document.getElementById("p_resultadoComparacion").innerHTML = 
        "El numero 2 es mayor que el numero 1."

    } else {
        document.getElementById("p_resultadoComparacion").innerHTML = 
        "Los dos numero son iguales."
    }
}
    