const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");
const repeatBtn = document.getElementById("repeat");
const songName = document.getElementById("name");
const progressBar = document.querySelector(".progressbar");
const progressFill = document.querySelector(".progress-fill");
const progressHandle = document.querySelector(".progress-handle");
const heartBtn = document.querySelector(".fa-heart");
const songs = [
  "الفاتحة",
  "البقرة",
  "آل عمران",
  "النساء",
  "المائدة",
  "الأنعام",
  "الأعراف",
  "الأنفال",
  "التوبة",
  "يونس",
  "هود",
  "يوسف",
  "الرعد",
  "ابراهيم",
  "الحجر",
  "النحل",
  "الإسراء",
  "الكهف",
  "مريم",
  "طه",
  "الأنبياء",
  "الحج",
  "المؤمنون",
  "النور",
  "الفرقان",
  "الشعراء",
  "النمل",
  "القصص",
  "العنكبوت",
  "الروم",
  "لقمان",
  "السجدة",
  "الأحزاب",
  "سبأ",
  "فاطر",
  "يس",
  "الصافات",
  "ص",
  "الزمر",
  "غافر",
  "فصلت",
  "الشورى",
  "الزخرف",
  "الدخان",
  "الجاثية",
  "الاحقاف",
  "محمد",
  "الفتح",
  "الحجرات",
  "ق",
  "الذاريات",
  "الطور",
  "النجم",
  "القمر",
  "الرحمن",
  "الواقعة",
  "الحديد",
  "المجادلة",
  "الحشر",
  "الممتحنة",
  "الصف",
  "الجمعه",
  "المنافقون",
  "التغابن",
  "الطلاق",
  "التحريم",
  "الملك",
  "القلم",
  "الحاقة",
  "المعارج",
  "نوح",
  "الجن",
  "المزّمّل",
  "المدّثر",
  "القيامة",
  "الإنسان",
  "المرسلات",
  "النبأ",
  "النازعات",
  "عبس",
  "التكوير",
  "الإنفطار",
  "المطفّفين",
  "الإنشقاق",
  "البروج",
  "الطارق",
  "الأعلى",
  "الغاشية",
  "الفجر",
  "البلد",
  "الشمس",
  "الليل",
  "الضحى",
  "الشرح",
  "التين",
  "العلق",
  "القدر",
  "البينة",
  "الزلزلة",
  "العاديات",
  "القارعة",
  "التكاثر",
  "العصر",
  "الهمزة",
  "الفيل",
  "قريش",
  "الماعون",
  "الكوثر",
  "الكافرون",
  "النصر",
  "المسد",
  "الإخلاص",
  "الفلق",
  "الناس",
];

let currentIndex = 0;
let isPlaying = false;
let isRepeat = false;
let isShuffle = false;

const audio = new Audio();
loadSong(currentIndex);

function loadSong(index) {
  songName.textContent = songs[index];
  audio.src = `https://server12.mp3quran.net/maher/${String(index + 1).padStart(
    3,
    0
  )}.mp3`;
  console.log(audio.currentTime);
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
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    isPlaying ? pauseSong() : playSong();
    e.preventDefault();
  }
});
// playback Time
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

audio.addEventListener("timeupdate", () => {
  // Update current time
  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime % 60);
  currentTimeEl.textContent = `${String(currentMinutes).padStart(
    2,
    "0"
  )}:${String(currentSeconds).padStart(2, "0")}`;

  // Update duration
  if (audio.duration) {
    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60);
    durationEl.textContent = `${String(durationMinutes).padStart(
      2,
      "0"
    )}:${String(durationSeconds).padStart(2, "0")}`;
  } else {
    durationEl.textContent = "00:00";
  }
});