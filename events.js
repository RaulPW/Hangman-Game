//----------Variables globales----------//
//Donde se almacena la palabra a adivinar durante toda la partida.
let word;
////Donde se almacena la letra que el usuario introduce
let player_letter;
//Contabilizar el número de vidas
let vidas = 6;
// Variable para saber cuantas letras se han acertado
let letras_acertadas = 0;
// Array para guardar las letras que va introduciendo el usuario
let listado_letras_usadas = [];
// variables que contiene las letras que puede usar el usuario para introducir una palabra.
const ALLOWLETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚ";

//---------Elementos del DOM----------//
//Elemento del DOM donde se muestra los mensajes de acierto o error cuando se introduce una letra
const MESSAGES = document.getElementById("msg_player");

//Elemento del DOM donde se almacena el mensaje final
const MSGFINAL = document.getElementById("final_result");

//Poner el foco en el input inicial nada mas entrar en la web
document.getElementById("answer_user").focus();

//----------------Funciones---------------------//

// FUNCIÓN. Validar que el usuario introduzca una palabra.
function validWord() {
  //Elemento donde se introduce la palabra
  word = document.getElementById("answer_user").value;
  // LLamamos a la función de validación
  checkValidation(word, document.getElementById("message_error"), answer_user);
}

//Condicionales de validación
function checkValidation(word, nameClass, idReset) {
  // CASO1 - No se puede dejar vacío este input ni tampoco que contenga numeros
  if (!word || !isNaN(word)) {
    // usamos la funcion mensajeError para mostra el error por pantalla
    msg(nameClass, "Debe introducir una palabra", "alert");
    // reseteamos para que en el input desaparezca el contenido y el foco se centre en él
    reset(idReset);
    return true;
  } else {
    //CASO 2 - La palabra solo puede contener las letras permitidas.
    for (const l of word) {
      if (!ALLOWLETTERS.includes(l.toUpperCase())) {
        if (l == " ") {
          //Lanzamos mensaje de error en caso que el haya introducido dos o mas palabras
          msg(nameClass, "Solo se puede escribir una palabra", "alert");
        } else {
          // Mensaje de error para todos los demás casos
          msg(nameClass, "La palabra solo puede contener caracteres", "alert");
        }
        // reseteamos para que en el input desaparezca el contenido y el foco se centre en él
        reset(idReset);
        //para salir de la función
        return true;
      }
    }
    // LLamamos a la función wordCorrect porque se han introducido valores correctos
    wordCorrect(word);
  }
}

//FUNCION. El usuario ha introducido una palabra correcta
function wordCorrect(correct_word) {
  console.log(correct_word);
  // Hacemos visible el texto de cuantas letras tiene la palabra
  document.getElementById("clue").style.opacity = "1";
  // Añadimos el total de letras que contiene la palabra escrita
  document.getElementById("n-letter").textContent = correct_word.length;
  //Quitamos el mensaje de error en caso que haya salido
  document.getElementById("msg-error").style.display = "none";
  //Hacemos que no se pueda introducir ninguna palabra hasta que no se adivine la actual
  correct_word.disabled = true;
  //Creamos las letras
  for (let i = 0; i < correct_word.length; i++) {
    //Elemento del DOM donde se va a mostrar las letras ocultas
    document.getElementById("contain_letters").innerHTML +=
      '<p class="guess_letter">_</p>';
  }
  // Hacemos aparecer la opción de introducir letras al jugador
  document.getElementById("contain_game").style.opacity = "1";
  //Limpiamos el input para que no aparezca ninguna letra introducida anteriormente en otra partida.
  reset("answer_player");
}

//FUNCION. Empezar el juego
function toPlay() {
  player_letter = document.getElementById("answer_player").value;
  //Llamamos a las funciones validLetter (válida que la letra introducida sea correcta) y la función letterUsed (verifica que la letra introducida no se haya probado con anterioridad)
  if (validLetter(player_letter) && letterNoUsed(player_letter)) {
    //Llamamos a la función que compruebe si la letra esta en la palabra o no
    if (letterInWord(player_letter)) {
      // Comprobar si el jugador a adivinado la palabra
      if (letras_acertadas == word.length) {
        finalResult("¡Enhorabuena, ha adivinado la palabra!", "win");
        // Limpiamos el input de la palabra que hay que adivinar
        document.getElementById("answer_user").value = "";
        return;
      } else {
        // Limpiamos input
        reset("answer_player");
      }
    } else {
      //Quitamos una estrella de la pantalla
      document.getElementById(`part${vidas}`).style.animation =
        '"lost_star" 2s forwards';
      document.getElementById(`part${vidas}`).style.opacity = 0;
      //Restamos vida
      vidas--;
      //Llamamos a la función que verifique que todavía quedan vidas
      check_lifes();
    }
  }
}

// FUNCION. Comprobar cuantas vidas quedan.
function check_lifes() {
  //Mensaje para cuando quede una vida
  if (vidas == 1) {
    msg(MESSAGES, "¡LE QUEDA UN INTENTO!", "alert info");
  }
  // Jugador ha perdido
  else if (vidas == 0) {
    finalResult("¡Has perdido!", "lost");
    // Limpiamos el input de la palabra que hay que adivinar
    document.getElementById("answer_user").value = "";
  } else {
    // Limpiamos input
    reset("answer_player");
  }
}

// FUNCION. Valida que la letra introducida sea correcta
function validLetter(letter) {
  // CASO 1. El jugador no ha escrito nada
  if (!letter) {
    msg(MESSAGES, "Debe introducir un carácter", "alert");
    reset("answer_player");
    return false;
    // CASO2. El jugador ha escrito un número
  } else if (!isNaN(letter)) {
    msg(MESSAGES, "El carácter NO debe ser de tipo numérico", "alert");
    reset("answer_player");
    return false;
  } else {
    return true;
  }
}

// FUNCION. Valida que la letra introducida no se haya intentado con anterioridad
function letterNoUsed(letter) {
  //Comprobamos que la letra que ha introducido el usario no se encuentra en el listado que hemos creado
  if (!listado_letras_usadas.includes(letter)) {
    //Agregamos la letra al listado
    listado_letras_usadas.push(letter);
    //Creamos y agregamos la letra que ha escrito el usuario al listado de letras para mostrar por pantalla
    let new_letter = document.createElement("p");
    new_letter.className = "letter_used";
    new_letter.textContent = letter;
    //Agregamos el elemento creado al DOM donde se almacenará las letras introducida por el usuario.
    document.getElementById("print_letters").append(new_letter);
    return true;
  } else {
    //La letra introducida coincide con alguna letra dentro de las letras ya usadas, aparecerá un mensaje de error.
    msg(MESSAGES, "Letra ya introducida", "alert");
    //Borrar la letra introducida y poner el foco en el input
    reset("answer_player");
    return false;
  }
}

//FUNCION. Comprobar si la letra esta dentro de la palabra a adivinar
function letterInWord(letter) {
  // Si la letra no esta en la palabra, mensaje de error y quitamos vida.
  if (word.indexOf(letter) == -1) {
    //Mensaje de error
    msg(
      MESSAGES,
      "La letra introducida no esta en la palabra. Pierde una vida",
      "alert"
    );
    return false;
  } else {
    // Mostramos por pantalla mensaje de acierto
    msg(MESSAGES, "¡Letra acertada!", "alert correct");
    // Recorremos la palabra a adivinar para saber en que posición o posiciones se encuentra la letra
    for (let i = 0; i < word.length; i++) {
      if (letter == word[i]) {
        // Cambiamos el textContent del elemento del DOM donde se muestra la letra acertada
        document.getElementsByClassName("guess_letter")[i].textContent =
          word[i].toUpperCase();
        //Sumamos el valor de letras acertadas
        letras_acertadas++;
      }
    }
    return true;
  }
}

//FUNCION. Mostrar mensajes de error
function msg(elemento, mensaje, clase) {
  elemento.textContent = mensaje;
  elemento.className = clase;
}

//FUNCION. Reset para poner el cursor y el foco de nuevo en los input para seguir jugando
function reset(elemento) {
  document.getElementById(elemento).focus();
  document.getElementById(elemento).value = "";
}

//FUNCION. Reiniciar variables y contenido del DOM
function nextGame() {
  //1.- Palabra
  word = "";
  //2.- Vidas
  vidas = 6;
  //3.- Letras acertadas
  letras_acertadas = 0;
  //4.- Array letras intentadas
  listado_letras_usadas = [];
  //5.- Se pueda introducir nueva palabra
  word.disabled = false;
  //6.- Letras ocultas vacio
  document.getElementById("contain_letters").innerHTML = "";
  //7.- Letra introducidas por el usuario vacío.
  document.getElementById("print_letters").innerHTML = "";
  //8.- Borrar mensaje final
  if (document.querySelector(".text_result")) {
    document.querySelector(".text_result").remove();
  }
  //9.- Ocultar texto de cuantas letras tiene la palabra
  document.getElementById("clue").style.opacity = "0";
  //10.- Mostrar las vidas por pantalla
  for (let i = 1; i <= 6; i++) {
    document.getElementById(`part${i}`).style.opacity = "1";
  }
  //11.- Quitar el mensaje final
  MSGFINAL.style.display = "none";
  //12.- Quitamos el mensaje de error o acierto
  msg(MESSAGES, "", "");
  //13.- Quitamos el cuadro central del juego
  document.getElementById("contain_game").style.opacity = "0";
  //14.- Poner el foco en input inicial
  document.getElementById("answer_user").focus();
}

//FUNCION. Cuadro final
function finalResult(msg, nameClass) {
  console.log(msg + nameClass);
  // En caso que el usuario haya clicado en la opción '¿Quieres resolver?, quitamos la ventana emergente
  document.getElementById("solution").style.display = "none";
  // Quitamos el cuadro central del juego para centrarnos en el cuadro final
  document.getElementById("contain_game").style.opacity = "0";
  //Mostramos el cuadro emergente con el mensaje final
  MSGFINAL.style.display = "block";
  //Colocamos imagen de fondo
  MSGFINAL.className = nameClass;
  //En caso que haya perdido, se debe indicar cual era la palabra que debia adivinar.
  if (nameClass == "lost") {
    let user_word = document.createElement("p");
    user_word.textContent = `La palabra correcta era: ${word.toUpperCase()}`;
    user_word.className = "text_result";
    MSGFINAL.prepend(user_word);
  }
  //Creamos un elemento p donde mostraremos la frase y le daremos estilo
  let final = document.createElement("p");
  final.textContent = msg;
  final.classList.add("text_result");
  // Añadimos al DOM
  MSGFINAL.prepend(final);
}

// FUNCION. Aparece cuadro emergente para resolver
function solveWordPanel() {
  // Aparece ventana emergente para que introduzca la palabra
  document.getElementById("solution").style.display = "flex";
  // Ponemos el foco en el input
  document.getElementById("player_solution").focus();
  // Dejamos de mostrar posibles mensajes de errores de juegos anteriores
  document.getElementById("error_solution").style.display = "none";
}

// FUNCION. Comprobar si la palabra
function solveWord() {
  //Cambiamos el display del posible mensaje de error para que pueda aparecer.
  document.getElementById("error_solution").style.display = "block";

  // Almacenamos la palabra que ha escrito el usuario
  let user_solution_word = document.getElementById("player_solution").value;
  //Comprobamos que se haya ecrito alguna palabra
  if (
    checkValidation(
      user_solution_word,
      document.getElementById("error_solution"),
      "player_solution"
    )
  ) {
    return;
  }

  // Comprobamos que sea igual que la palabra
  if (word == user_solution_word) {
    //Si son iguales, llamamos a la función resultado final
    finalResult("!Enhorabuena, ha adivinado la palabra!", "win");
  } else {
    // Limpiamos el input
    document.getElementById("player_solution").value = "";
    //Quitamos ventana emergente
    document.getElementById("solution").style.display = "none";
    // Lanzamos mensaje de error
    msg(
      MESSAGES,
      "La palabra introducida no es la correcta. Pierde una vida",
      "alert"
    );
    //Quitamos una estrella de la pantalla
    document.getElementById(`part${vidas}`).style.animation =
      '"lost_star" 2s forwards';
    //Por si no funciona la animacion anterior en el navegador
    document.getElementById(`part${vidas}`).style.opacity = 0;
    //Restamos vida
    vidas--;
    //Llamamos a la función que verifique que todavía quedan vidas
    check_lifes();
  }
}

// Eventos
document.getElementById("btn_playgame").onclick = validWord;
document.getElementById("btn_check_letter").onclick = toPlay;
document.getElementById("btn_reset").onclick = nextGame;
document.getElementById("btn_solve_panel").onclick = solveWordPanel;
document.getElementById("btn_solve").onclick = solveWord;
document.getElementById("btn_initial").onclick = nextGame;
