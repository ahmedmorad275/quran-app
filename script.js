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
  {
    name: "المائدة",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/005.mp3",
  },
  {
    name: "الأنعام",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/006.mp3",
  },
  {
    name: "الأعراف",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/007.mp3",
  },
  {
    name: "الأنفال",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/008.mp3",
  },
  {
    name: "التوبة",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/009.mp3",
  },
  {
    name: "يونس",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/010.mp3",
  },
  {
    name: "هود",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/011.mp3",
  },
  {
    name: "يوسف",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/012.mp3",
  },
  {
    name: "الرعد",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/013.mp3",
  },
  {
    name: "ابراهيم",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/014.mp3",
  },
  {
    name: "الحجر",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/015.mp3",
  },
  {
    name: "النحل",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/016.mp3",
  },
  {
    name: "الإسراء",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/017.mp3",
  },
  {
    name: "الكهف",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/018.mp3",
  },
  {
    name: "مريم",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/019.mp3",
  },
  {
    name: "طه",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/020.mp3",
  },
  {
    name: "الأنبياء",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/021.mp3",
  },
  {
    name: "الحج",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/022.mp3",
  },
  {
    name: "المؤمنون",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/023.mp3",
  },
  {
    name: "النور",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/024.mp3",
  },
  {
    name: "الفرقان",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/025.mp3",
  },
  {
    name: "الشعراء",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/026.mp3",
  },
  {
    name: "النمل",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/027.mp3",
  },
  {
    name: "القصص",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/028.mp3",
  },
  {
    name: "العنكبوت",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/029.mp3",
  },
  {
    name: "الروم",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/030.mp3",
  },
  {
    name: "لقمان",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/031.mp3",
  },
  {
    name: "السجدة",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/032.mp3",
  },
  {
    name: "الأحزاب",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/033.mp3",
  },
  {
    name: "سبأ",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/034.mp3",
  },
  {
    name: "فاطر",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/035.mp3",
  },
  {
    name: "يس",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/036.mp3",
  },
  {
    name: "الصافات",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/037.mp3",
  },
  {
    name: "ص",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/038.mp3",
  },
  {
    name: "الزمر",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/039.mp3",
  },
  {
    name: "غافر",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/040.mp3",
  },
  {
    name: "فصلت",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/041.mp3",
  },
  {
    name: "الشورى",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/042.mp3",
  },
  {
    name: "الزخرف",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/043.mp3",
  },
  {
    name: "الدخان",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/044.mp3",
  },
  {
    name: "الجاثية",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/045.mp3",
  },
  {
    name: "الاحقاف",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/046.mp3",
  },
  {
    name: "محمد",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/047.mp3",
  },
  {
    name: "الفتح",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/048.mp3",
  },
  {
    name: "الحجرات",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/049.mp3",
  },
  {
    name: "ق",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/050.mp3",
  },
  {
    name: "الذاريات",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/051.mp3",
  },
  {
    name: "الطور",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/052.mp3",
  },
  {
    name: "النجم",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/053.mp3",
  },
  {
    name: "القمر",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/054.mp3",
  },
  {
    name: "الرحمن",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/055.mp3",
  },
  {
    name: "الواقعة",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/056.mp3",
  },
  {
    name: "الحديد",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/057.mp3",
  },
  {
    name: "المجادلة",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/058.mp3",
  },
  {
    name: "الحشر",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/059.mp3",
  },
  {
    name: "الممتحنة",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/060.mp3",
  },
  {
    name: "الصف",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/061.mp3",
  },
  {
    name: "الجمعه",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/062.mp3",
  },
  {
    name: "المنافقون",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/063.mp3",
  },
  {
    name: "التغابن",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/064.mp3",
  },
  {
    name: "الطلاق",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/065.mp3",
  },
  {
    name: "التحريم",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/066.mp3",
  },
  {
    name: "الملك",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/067.mp3",
  },
  {
    name: "القلم",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/068.mp3",
  },
  {
    name: "الحاقة",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/069.mp3",
  },
  {
    name: "المعارج",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/070.mp3",
  },
  {
    name: "نوح",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/071.mp3",
  },
  {
    name: "الجن",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/072.mp3",
  },
  {
    name: "المزّمّل",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/073.mp3",
  },
  {
    name: "المدّثر",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/074.mp3",
  },
  {
    name: "القيامة",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/075.mp3",
  },
  {
    name: "الإنسان",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/076.mp3",
  },
  {
    name: "المرسلات",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/077.mp3",
  },
  {
    name: "النبأ",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/078.mp3",
  },
  {
    name: "النازعات",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/079.mp3",
  },
  {
    name: "عبس",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/080.mp3",
  },
  {
    name: "التكوير",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/081.mp3",
  },
  {
    name: "الإنفطار",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/082.mp3",
  },
  {
    name: "المطفّفين",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/083.mp3",
  },
  {
    name: "الإنشقاق",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/084.mp3",
  },
  {
    name: "البروج",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/085.mp3",
  },
  {
    name: "الطارق",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/086.mp3",
  },
  {
    name: "الأعلى",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/087.mp3",
  },
  {
    name: "الغاشية",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/088.mp3",
  },
  {
    name: "الفجر",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/089.mp3",
  },
  {
    name: "البلد",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/090.mp3",
  },
  {
    name: "الشمس",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/091.mp3",
  },
  {
    name: "الليل",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/092.mp3",
  },
  {
    name: "الضحى",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/093.mp3",
  },
  {
    name: "الشرح",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/094.mp3",
  },
  {
    name: "التين",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/095.mp3",
  },
  {
    name: "العلق",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/096.mp3",
  },
  {
    name: "القدر",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/097.mp3",
  },
  {
    name: "البينة",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/098.mp3",
  },
  {
    name: "الزلزلة",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/099.mp3",
  },
  {
    name: "العاديات",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/100.mp3",
  },
  {
    name: "القارعة",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/101.mp3",
  },
  {
    name: "التكاثر",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/102.mp3",
  },
  {
    name: "العصر",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/103.mp3",
  },
  {
    name: "الهمزة",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/104.mp3",
  },
  {
    name: "الفيل",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/105.mp3",
  },
  {
    name: "قريش",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/106.mp3",
  },
  {
    name: "الماعون",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/107.mp3",
  },
  {
    name: "الكوثر",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/108.mp3",
  },
  {
    name: "الكافرون",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/109.mp3",
  },
  {
    name: "النصر",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/110.mp3",
  },
  {
    name: "المسد",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/111.mp3",
  },
  {
    name: "الإخلاص",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/112.mp3",
  },
  {
    name: "الفلق",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/113.mp3",
  },
  {
    name: "الناس",
    artist: "ماهر المعيقلي",
    src: "https://server12.mp3quran.net/maher/114.mp3",
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
