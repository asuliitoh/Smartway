
const header = document.querySelector("header");

header.innerHTML =  `<header class="pl-10 pr-10 pt-1 min-w-screen bg-transparent backdrop-blur-xs flex flex-col items-center sm:flex-row sm:justify-between fixed top-0 z-1 dark:text-white" id="barraprincipal"> 
            <div class="flex" id="identidadempresa">
                <div id="logotipoempresa"><img class="w-8 h-8 dark:invert" id="logo" src="/images/favicons/favicon.ico" alt="Logotipo de CiberPulse Labs"></div>
                <div class="text-[1rem] font-bold" id="nombreempresa"><h2>CiberPulse Labs</h2></div>
            </div>

            <nav class="text-center" id="menunavegacion">      
                <ul class="flex gap-2" role="list">
                <li class="flex"><a><img class="p-[10px] self-stretch block w-10 h-10 cursor-pointer" id="switchtema" src="/images/icons/sun.png" alt="Botón cambiar tema"></a></li>
                <li class="flex"><a class="btn btn-ghost" id="inicio" href="/indexDaisy.html">Inicio</a></li>
                <li class="flex"><a class="btn btn-ghost" id="nosotros" href="#nosotros" >Sobre Nosotros</a></li>
                <li class="flex"><a class="btn btn-ghost" id="servicios" href="#servicios" >Servicios</a></li>
                <li class="flex"><a class="btn btn-primary btn-ghost" href="/login.html">Iniciar sesión</a></li>
                </ul>
            </nav>
        </header>`;


        //Declaración de variables
const switchTema = document.getElementById('switchtema');

//Funciones para el cambio de tema.
function establecerModoClaro() {
    document.body.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
    switchTema.src="/images/icons/sun.png";
}

function establecerModoOscuro() {
    document.body.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
    switchTema.src="/images/icons/moon.png";
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


