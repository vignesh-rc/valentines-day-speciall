// Fade animation
const faders = document.querySelectorAll('.fade-in');

function checkFadeInElements() {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            el.classList.add('show');
        }
    });
}

// Check on page load
window.addEventListener('load', checkFadeInElements);

// Check on scroll
window.addEventListener('scroll', checkFadeInElements);

// ================= MUSIC PLAYER ================= 
const musicPlayer = document.getElementById('musicPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const progressBar = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const currentTimeEl = document.querySelector('.current-time');
const durationEl = document.querySelector('.duration');

// Format time in MM:SS
function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update duration when metadata loads
musicPlayer.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(musicPlayer.duration);
});

// Update progress bar as music plays
musicPlayer.addEventListener('timeupdate', () => {
    const percentage = (musicPlayer.currentTime / musicPlayer.duration) * 100;
    progressBar.style.width = percentage + '%';
    currentTimeEl.textContent = formatTime(musicPlayer.currentTime);
});

// Click on progress bar to seek
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    musicPlayer.currentTime = (clickX / width) * musicPlayer.duration;
});

// Play button
playBtn.addEventListener('click', () => {
    musicPlayer.play();
});

// Pause button
pauseBtn.addEventListener('click', () => {
    musicPlayer.pause();
});

// Resume button
resumeBtn.addEventListener('click', () => {
    musicPlayer.play();
});

// Floating hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 800);
