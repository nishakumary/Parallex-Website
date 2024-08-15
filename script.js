console.log("welcome to spotify");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterPlay')
let myprogressBar = document.getElementById('myprogressBar')
let gif = document.getElementById('gif')

let songs = [
    {songName: "salam-e-Ishq", filePath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName: "salam-e-Ishq", filePath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName: "salam-e-Ishq", filePath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName: "salam-e-Ishq", filePath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName: "salam-e-Ishq", filePath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName: "salam-e-Ishq", filePath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName: "salam-e-Ishq", filePath:"song/1.mp3",coverpath:"covers/1.jpg"},
]
//audioElement.play();
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-regular fa-circle-play');
        masterplay.classList.add('fa-regular fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-regular fa-circle-pause');
        masterplay.classList.add('fa-regular fa-circle-play')
    }
   
})
//listen to Events
myprogressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
})