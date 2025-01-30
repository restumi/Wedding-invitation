// MUSIC
var tempMusic = ''
music = document.querySelector('.music')

if(tempMusic){
    music.src = tempMusic
}

window.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", function() {
        music.play();
    }, { once: true }); // Hanya sekali dijalankan
});


// MUSIC BUTTON
var isPlaying = true

function toggleMusic(event){
    event.preventDefault()

    const musicButton = document.getElementById('music-button')

    if (isPlaying){
        musicButton.innerHTML = '<i class="fas fa-fw fa-pause"></i>'
        musicButton.classList.remove('rotate')
        musicButton.style.transform = 'translateY(0)'
        music.pause()
    } else{
        musicButton.innerHTML = '<i class="fas fa-fw fa-compact-disc"></i>'
        musicButton.classList.add('rotate')
        music.play()
    }

    isPlaying = !isPlaying
}