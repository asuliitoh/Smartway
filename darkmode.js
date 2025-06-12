//Declaración de variables
const switchTema = document.getElementById('switchtema');

//Funciones para el cambio de tema.
function establecerModoClaro() {
    document.body.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
    switchTema.src="/images/icon_themes/sun.png";
}

function establecerModoOscuro() {
    document.body.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
    switchTema.src="/images/icon_themes/moon.png";
}

//Apliacción de tema al cargar la página.
if ( localStorage.getItem("color-theme") === "dark" || !("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    establecerModoOscuro();
}

else establecerModoClaro();


//Cambio de tema al pulsar el botón de switch
switchTema.addEventListener('click', () => {

    if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        establecerModoClaro();
    }

    else establecerModoOscuro();

});


