function par(num) {
    if (num % 2 == 0) {
        document.getElementById("p_par").innerHTML = "PAR";
        alert("El numero es par.");
    } else {
        document.getElementById("p_par").innerHTML = "IMPAR";
        alert("El numero es impar.");
    }
}

document.getElementById("boton").addEventListener("click", function() {
    par(document.getElementById("inputNum").value);
});
