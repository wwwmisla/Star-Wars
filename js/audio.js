audio = document.getElementById('audio');

function play() {
  audio.play();
}

function pause() {
  audio.pause();
}

function stop() {
  audio.pause();
  audio.currentTime = 0;
}

function aumentar_volume() {
  if (audio.volume < 1) audio.volume += 0.1;
}

function diminuir_volume() {
  if (audio.volume > 0) audio.volume -= 0.1;
}

function mute() {
  if (audio.muted) {
    audio.muted = false;
  } else {
    audio.muted = true;
  }
}