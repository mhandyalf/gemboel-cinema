var player = videojs('my-video', {
    playbackRates: [0.5, 1, 1.5, 2], // Bisa pilih kecepatan
    controls: true
});

// Fungsi untuk mundur 5 detik
function rewind() {
    var currentTime = player.currentTime();
    player.currentTime(currentTime - 5);
}

// Fungsi untuk maju 5 detik
function forward() {
    var currentTime = player.currentTime();
    player.currentTime(currentTime + 5);
}

// Tambahkan tombol ke dalam kontrol Video.js
player.ready(function() {
    var controlBar = player.controlBar;

    // Tombol Rewind
    var rewindButton = document.createElement('button');
    rewindButton.innerHTML = "⏪ -5s";
    rewindButton.className = "vjs-custom-button vjs-control";
    rewindButton.onclick = rewind;
    controlBar.el().insertBefore(rewindButton, controlBar.fullscreenToggle.el());

    // Tombol Forward
    var forwardButton = document.createElement('button');
    forwardButton.innerHTML = "⏩ +5s";
    forwardButton.className = "vjs-custom-button vjs-control";
    forwardButton.onclick = forward;
    controlBar.el().insertBefore(forwardButton, controlBar.fullscreenToggle.el());
});
