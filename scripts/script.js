function playSound(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio) return; // stop the function from running all together
    key.classList.remove('playing');
    key.classList.add('playing');
    audio.currentTime = 0; // rewind to the start
    audio.play();
}

window.addEventListener('keydown', playSound);

function removeTransition(event) {
    this.classList.remove('playing');

    
}

