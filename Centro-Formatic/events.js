document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos referencia de los elementos

    // Botones menu superior
    var menu1 = document.getElementById('sub1');
    var menu2 = document.getElementById('sub2');
    var menu3 = document.getElementById('sub3');
    var menu4 = document.getElementById('sub4');
    var menu5 = document.getElementById('sub5');

    // Botones menu seccion
    var btn1 = document.getElementById('primaria');
    var btn2 = document.getElementById('eso');
    var btn3 = document.getElementById('bachiller');
    var btn4 = document.getElementById('cfgm');
    var btn5 = document.getElementById('cfgs');

    // Tarjetas
    var cards = document.getElementsByClassName('course');
    var card1 = document.getElementById('card-1');
    var card2 = document.getElementById('card-2');
    var card3 = document.getElementById('card-3');
    var card4 = document.getElementById('card-4');
    var card5 = document.getElementById('card-5');


    // Añadimos EVENTOS al hacer click en los botones del menu superior
    menu1.addEventListener('click', function () {
        baja_opacidad()
        card1.style.opacity = "1";
    })
    menu2.addEventListener('click', function () {
        baja_opacidad()
        card2.style.opacity = "1";
    })
    menu3.addEventListener('click', function () {
        baja_opacidad()
        card3.style.opacity = "1";
    })
    menu4.addEventListener('click', function () {
        baja_opacidad()
        card4.style.opacity = "1";
    })
    menu5.addEventListener('click', function () {
        baja_opacidad()
        card5.style.opacity = "1";
    })

    // Añadimos evento al hacer click en los botones del menu de la sección
    btn1.addEventListener('click', function () {
        baja_opacidad()
        card1.style.opacity = "1";

    })
    btn2.addEventListener('click', function () {
        baja_opacidad()
        card2.style.opacity = "1";
    })
    btn3.addEventListener('click', function () {
        baja_opacidad()
        card3.style.opacity = "1";
    })
    btn4.addEventListener('click', function () {
        baja_opacidad()
        card4.style.opacity = "1";
    })
    btn5.addEventListener('click', function () {
        baja_opacidad()
        card5.style.opacity = "1";
    })
    function baja_opacidad() {
        for (const single_card of cards) {
            single_card.style.opacity = "0";

        }
    }

})

