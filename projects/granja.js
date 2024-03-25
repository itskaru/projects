function añadir_ovejas() {
    const div_imagenes = document.getElementById("div_imagenes");
    const input_ovejas = document.getElementById("input_ovejas");

    let num_animales = Number(input_ovejas.value);
    globalvar_numOvejas += num_animales;

    div_imagenes.innerHTML += '<img src="https://us.123rf.com/450wm/dadeka/dadeka2307/dadeka230700923/208247875-ovejas-aisladas-sobre-fondo-blanco-primer-plano-la-cr%C3%ADa-de-animales.jpg?ver=6"></img>'.repeat(num_animales)

}

function añadir_vacas() {
    const div_imagenes = document.getElementById("div_imagenes");
    const input_vacas = document.getElementById("input_vacas");

    let num_animales = Number(input_vacas.value);
    globalvar_numVacas += num_animales;

    div_imagenes.innerHTML += '<img src="https://img.freepik.com/fotos-premium/vaca-sobre-fondo-blanco_919137-627.jpg"></img>'.repeat(num_animales)

}

function limpiar_img() {
    const div_imagenes = document.getElementById("div_imagenes");
    div_imagenes.innerHTML = "";

    globalvar_numOvejas = 0;
    globalvar_numVacas = 0;
}

function numOvejas() {
    document.getElementById("p_numOvejas").innerHTML = globalvar_numOvejas;
};
function numVacas() {
    document.getElementById("p_numVacas").innerHTML = globalvar_numVacas;
};
function numTotal() {
    document.getElementById("p_numTotal").innerHTML = globalvar_numOvejas + globalvar_numVacas;
};

var globalvar_numOvejas = 0;
var globalvar_numVacas = 0;