const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");
const repeatBtn = document.getElementById("repeat");
const songName = document.getElementById("name");
const artistName = document.getElementById("artist");
const progressBar = document.querySelector(".progressbar");
const progressFill = document.querySelector(".progress-fill");
const progressHandle = document.querySelector(".progress-handle");
const heartBtn = document.querySelector(".fa-heart");
const songs = [
  {
    name: "الفاتحة",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/001.mp3",
  },
  {
    name: "البقرة",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/002.mp3",
  },
  {
    name: "آل عمران",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/003.mp3",
  },
  {
    name: "النساء",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/004.mp3",
  },
];

let currentIndex = 0;
let isPlaying = false;
let isRepeat = false;
let isShuffle = false;

const audio = new Audio();
loadSong(currentIndex);

function loadSong(index) {
  const song = songs[index];
  songName.textContent = song.name;
  artistName.textContent = song.artist;
  audio.src = song.src;
}

function playSong() {
  isPlaying = true;
  audio.play();
  playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}
function pauseSong() {
  isPlaying = false;
  audio.pause();
  playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

function nextSong() {
  if (isShuffle) {
    currentIndex = Math.floor(Math.random() * songs.length);
  } else {
    currentIndex = (currentIndex + 1) % songs.length;
  }
  loadSong(currentIndex);
  playSong();
}
function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  playSong();
}

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

repeatBtn.addEventListener("click", () => {
  isRepeat = !isRepeat;
  repeatBtn.style.color = isRepeat ? "#4527A0" : "#BAA8ED";
});
shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.style.color = isShuffle ? "#4527A0" : "#BAA8ED";
});

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = `${progress}%`;
    progressHandle.style.left = `${progress}%`;
  }
  progressBar.addEventListener("click", (e) => {
    const barWidth = progressBar.clientWidth;
    const clickX = e.offsetX;
    const progressPercent = (clickX / barWidth) * 100;
    const newTime = (audio.duration * progressPercent) / 100;
    audio.currentTime = newTime;
    progressFill.style.width = `${progressPercent}%`;
    progressHandle.style.left = `${progressPercent}%`;
  });
});

audio.addEventListener("ended", () => {
  if (isRepeat) {
    playSong();
  } else {
    nextSong();
  }
});
heartBtn.addEventListener("click", (e) => {
  if (e.target.style.color !== "orangered") {
    e.target.style.color = "orangered";
  } else {
    e.target.style.color = "#00000099";
  }
});
