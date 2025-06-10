//Declaración de variables
const elementos = [];
const clases = ['indice', 'socialmedia', 'review', 'card'];
const switchTema = document.getElementById('switchtema');

//Obtención de elementos HTML afectados por el cambio de tema
elementos.push(document.getElementById("barraprincipal"));
elementos.push(document.getElementById("footer"));
elementos.push(document.getElementById("containercards"));
elementos.push(document.getElementById("containerreviews"));
for (i = 0; i < clases.length; i++){
    const coleccion = document.getElementsByClassName(clases[i])
    elementos.push(...Array.from(coleccion));
    }

//Al pulsar en la imagen #switchtema, se asocia el cambio de tema
switchTema.addEventListener('click', () => {
    //Se obtiene el tema actual
    const darkmode = localStorage.getItem('darkmode');

    //Segun el valor de darkmode, se le asignará la clase darkmode (modo oscuro)
    //o se le removerá dicha clase (modo claro)
    if (darkmode=='active') {
        switchTema.src="/images/icon_themes/sun.png";
        for (const elemento of elementos) elemento.classList.remove('darkmode');    
        localStorage.setItem('darkmode', null);

    }
    else {
        switchTema.src="/images/icon_themes/moon.png";
        for (const elemento of elementos) elemento.classList.add('darkmode');    
        localStorage.setItem('darkmode', 'active');

    }


});