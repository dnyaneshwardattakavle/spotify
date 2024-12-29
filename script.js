console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let nextButton = document.getElementById('next');
let previousButton = document.getElementById('previous');
let progressBar = document.getElementById('MyProgressBar');

let songs = [
    {
        songName: "Let Me Love You",
        filepath: "1.mp3",
        cover: "truelove.jpg"
    },
    {
        songName: "wo zhuti khai jo nibhai nahi",
        filepath: "2.mp3",
        cover: "image2.jpg"
    },
    {
        songName: "ki shrab kagaj kalam ",
        filepath: "3.mp3",
        cover: "image3.jpg"
    }
    ,
    {
        songName: "Me yad aunga ",
        filepath: "4.mp3",
        cover: "image3.jpg"
    }
    ,
    {
        songName: "mere pyar ki bate ",
        filepath: "5.mp3",
        cover: "image3.jpg"
    }
    ,
    {
        songName: " Padi jab se ishq me jab se",
        filepath: "6.mp3",
        cover: "image3.jpg"
    }
];

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
});

nextButton.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
});

previousButton.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
});

function loadSong(index) {
    audioElement.src = songs[index].filepath;
    document.querySelector('.songinfo').textContent = `${songs[index].songName}`;
    document.querySelector('.songinfo img').src = songs[index].cover;
}

audioElement.addEventListener('timeupdate', () => {
    if (!audioElement.paused) {
        let progress = (audioElement.currentTime / audioElement.duration) * 100;
        progressBar.value = progress;
    }
});

progressBar.addEventListener('input', () => {
    audioElement.currentTime = (progressBar.value / 100) * audioElement.duration;
});

loadSong(songIndex);
