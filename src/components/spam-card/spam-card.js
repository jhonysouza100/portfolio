const spamCard = document.querySelector(".spam_card"),
  spamContent = document.querySelector(".spam_content"),
  spamIcon = document.querySelector(".ri-mail-line"),
  spamText = document.querySelector(".spam_text"),
  authorName = document.querySelector(".author_name"),
  playPauseBtn = document.querySelector(".play_pause-button"),
  stopBtn = document.querySelector(".stop_button"),
  exitBtn = document.querySelector(".exit_button");

let isOpen = false;
let isRead = false;

// abir|cerrar el spam_content
spamCard.addEventListener("click", () => {
  // Quita las animaciones del spam_card cunado se hace click por  primera vez
  if (!isRead) {
    // Desvanece el gift
    spamCard.querySelector(".spam_gift").style.animation = "fadeout .5s linear forwards";
    // Pasados .8s
    setTimeout(() => {
      // Quita la animacion de rebote de la spam_card
      spamCard.style.animation = "none";
      // Oculta el gift
      spamCard.querySelector(".spam_gift").style.display = "none";
    }, 800);
    // Lo marca como leido
    isRead = true;
  }

  if (isOpen) { // si esta abierto, CIERRA el spam_content
    exit();
  } else { // sino, ABRE el spam_content
    // Cambia el icono del spam_card
    spamIcon.classList.add("ri-mail-open-line");
    spamIcon.classList.remove("ri-mail-line");
    // Muestra el spam_content
    spamContent.style.display = "block";
    // Agrega una animacion de desplasamiento al spam_content
    spamContent.style.animation = "moveToCenter .4s ease-out forwards";
    // Cambia el estado de abierto a verdadero
    isOpen = true;
  }
});

function spamOut() {
  setTimeout(() => { // Luego de 'x'segundos, regunta si esta cerrado?
    if (!isOpen) { // Si esta se cumple, se empiesa a desvanecer la spam_card durante 1s
      spamCard.style.animation = "opacity-off 1s linear forwards";
      setTimeout(() => { // luego de 1.5s, vuelve a preguntar si esta cerrado?
        if (!isOpen) { // Si se cumple, oculta el spam_card
          spamCard.style.display = "none";
        } else { // Si volvemos hacer click durante los 1.5s, la condicion NO se cumple y la animacion se revierte para aparecer de nuevo
          spamCard.style.animation = "opacity .2s ease-in-out forwards";
        }
      }, 1500);
    }
  }, 60000);
}

let synth = window.speechSynthesis; // controla la sintesis
let speech = new SpeechSynthesisUtterance(`HI!, ${spamText.innerText}, from already ${authorName.innerText}`); // sintetiza el texto a voz
let speaking = false;
let paused = false;

playPauseBtn.addEventListener("click", () => {
  !speaking ? play() : paused ? resume() : pause();
});

stopBtn.addEventListener("click", () => stop());

exitBtn.addEventListener("click", () => exit());

function play() {
  getVoicesDisponinles();

  speaking = true;
  synth.speak(speech);

  playPauseBtn.querySelector(".pause_sound-btn").classList.remove("hide");
  playPauseBtn.querySelector(".play_sound-btn").classList.add("hide");
}

function resume() {
  paused = false;
  speaking = true;
  synth.resume();

  playPauseBtn.querySelector(".pause_sound-btn").classList.remove("hide");
  playPauseBtn.querySelector(".play_sound-btn").classList.add("hide");
}

function pause() {
  paused = true;
  speaking = true;
  synth.pause();

  playPauseBtn.querySelector(".pause_sound-btn").classList.add("hide");
  playPauseBtn.querySelector(".play_sound-btn").classList.remove("hide");
}

function stop() {
  speaking = false;
  paused = false;
  synth.cancel();

  playPauseBtn.querySelector(".pause_sound-btn").classList.add("hide");
  playPauseBtn.querySelector(".play_sound-btn").classList.remove("hide");
}

function exit() {
  // ocultar spam_content
  spamContent.style.display = "none";

  // mostrar spam_card
  spamCard.style.display = "block";

  // cambiar el icono del spam_card
  spamIcon.classList.remove("ri-mail-open-line");
  spamIcon.classList.add("ri-mail-line");

  // restablecer reproductor
  speaking = false;
  paused = false;
  synth.cancel();
  playPauseBtn.querySelector(".pause_sound-btn").classList.add("hide");
  playPauseBtn.querySelector(".play_sound-btn").classList.remove("hide");

  // Cambia el estado de abierto a cerrado
  isOpen = false;
  spamOut();
}

speech.onend = function () {
  speaking = false;
  paused = false;

  playPauseBtn.querySelector(".pause_sound-btn").classList.add("hide");
  playPauseBtn.querySelector(".play_sound-btn").classList.remove("hide");
};

// obtener voces disponibles
function getVoicesDisponinles() {
  // obtengo una lista de las voces disponibles
  let voices = synth.getVoices();
  let idioma = "Google US English";
  // cambiar el pitch and rate
  speech.pitch = 0.4; // agudo de voz
  speech.rate = 1.1; // velocidad de voz
  for (let i = 0; i < voices.length; i++) {
    console.log(voices[i].name);
    if (voices[i].name === idioma) {
      speech.voice = voices[i];
    }
  }
}

// Drag function
function onDrag({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(spamContent);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);
  spamContent.style.left = `${left + movementX}px`;
  spamContent.style.top = `${top + movementY}px`;
}
// presionar mouse
document.addEventListener("mousedown", () => {
  spamContent.addEventListener("mousemove", onDrag);
});
// soltar mouse
document.addEventListener("mouseup", () => {
  spamContent.removeEventListener("mousemove", onDrag);
});
