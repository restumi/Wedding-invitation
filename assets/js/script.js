// DATA AOS
AOS.init()

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
        musicButton.innerHTML = '<i class="fas fa-fw fa-play"></i>'
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

// COUNTDOWN WEDDING
var countdownDate = new Date("Jun 29, 2025 08:00").getTime()
var x = setInterval(function(){
    var now = new Date().getTime()
    var distance = countdownDate - now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000*60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById('countdown-wedding').innerHTML = `
     <!-- HARI -->
    <div class="col-lg-1 col-3">
        <div class="text-center p-2 rounded text-light">
            <h5>${days}</h5>Hari
        </div>
    </div>
    <!-- JAM -->
    <div class="col-lg-1 col-3">
        <div class="text-center p-2 rounded text-light">
            <h5>${hours}</h5>Jam
        </div>
    </div>
    <!-- MENIT -->
    <div class="col-lg-1 col-3">
        <div class="text-center p-2 rounded text-light">
            <h5>${minutes}</h5>Menit
        </div>
    </div>
    <!-- DETIK -->
    <div class="col-lg-1 col-3">
        <div class="text-center p-2 rounded text-light">
            <h5>${seconds}</h5>Detik
        </div>
    </div>
    `

    if (distance < 0){
        clearInterval(x)
        document.getElementById('countdown-wedding').innerHTML = `
        <span class="text-center p-3 rounded text-light m-2">
            <h2>Acara sudah dimulai</h2>
        </span>`
    }
}, 1000)

// NAMA SAMBUTAN
// const urlParams = new URLSearchParams(window.location.search)
// const panggilan = urlParams.get('p')
// const nama = urlParams.get('n')
// const namaSambutan = document.querySelector('#nama-sambutan')
// namaSambutan.innerText = `${panggilan} ${nama},`

// GIFT CARD
// copy text
function copyText(el){
    var content = jQuery(el).siblings('div.card-container').find('div.card-number').text().trim()

    var temp = document.createElement("textarea")

    document.body.appendChild(temp)

    temp.value = content.replace(/\s+/g, '')
    temp.select()

    document.execCommand('copy')

    document.body.removeChild(temp)

    jQuery(el).text('Disalin')

    setTimeout(function(){
        jQuery(el).html(`<i class="fas fa-regular fa-copy"></i> Copy`)
    }, 2000)
}

// RSVP SECTION
window.addEventListener("load", function(){
    const form = document.getElementById('rsvp-form')
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const status = document.getElementById('status').value
        const nama = document.getElementById('status').value.trim()

        if(nama === ""){
            Swal.fire({
                icon: "error",
                text: "nama harus di isi"
            })
            return;
        }

        if(status == "0"){
            Swal.fire({
                icon: "error",
                text: "Pilih salah satu status terlebih dahulu"
            })
            return;
        }

        const data = new FormData(form);
        const action = e.target.action;
        const input = form.querySelectorAll('input, select, button')
        input.forEach(input => {
            input.disabled = true
        })

        fetch(action, {
            method: 'POST',
            body: data
        })

        .then(() => {
            Swal.fire({
                icon: "success",
                text: "Terima kasih atas partisipasinya"
            })
        })

        .catch((error) => {
            Swal.fire({
                icon: "error",
                text: error
            })
        })

        .finally(() => {
            input.forEach(input => {
                input.disabled = false
            })
        })
    })
})