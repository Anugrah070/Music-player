const PlayPauseIcon=document.getElementById("PLayPause-Icon")
let audio=document.getElementById("myAudio")
const seekSlider=document.getElementById("seek-slider")
const currentTimeDOM=document.getElementById("Current-time")
const totalTime=document.querySelector("#total_time")
let playbackPosition=0
let currentMusic=0
let isPlaying=false

const musicPlaylist=[
    '/music/chineseFlute.mp3',
    '/music/Faded.mp3',
    '/music/GTA4.mp3',
    '/music/Doom.mp3',
    '/music/GOW.mp3',
    '/music/cyberpunk.mp3',
]

audio.addEventListener("loadedmetadata",()=>{getaudioDuration()})


audio.addEventListener("timeupdate",()=>{
    updateCurrentTime()
    updateSeeker()
    
})

//CHECKS IF MUSIC HAS ENDED AND SKIPS TO NEXT ONE
audio.addEventListener("ended",()=>nextMusic())



//RUNS THE PREVIOUS MUSIC
function prevMusic(){
    if (currentMusic<1) {
        currentMusic=musicPlaylist.length
    }

    else{
        currentMusic=currentMusic-1
        playbackPosition=0
        playAudio()
    }
        
}


//RUNS NEXT MUSIC
function nextMusic(){
    if (currentMusic<(musicPlaylist.length)-1) {
    currentMusic=currentMusic+1
    playbackPosition=0
    playAudio()
    }
    else{
    currentMusic=0
    playAudio()
    }
}


function togglePlayPause(){
    if(audio.paused){
        playAudio()
        console.log(isPlaying)
    }
    else{
        pauseAudio()
    }
}

function playAudio(){
    audio.src=musicPlaylist[currentMusic]
    audio.currentTime=playbackPosition
    audio.play()
    PlayPauseIcon.className='bx bx-pause-circle bx-lg'
    isPlaying=true
    

}

function pauseAudio(){
    audio.pause()
    playbackPosition=audio.currentTime
    PlayPauseIcon.className='bx bx-play-circle bx-lg'
    isPlaying=false
}

function changeVolume(volume){
    audio.volume=volume
}

function changeSeek(seekValue){
    let newTime=(seekValue/100)*audio.duration
    audio.currentTime=newTime
    
}

function updateSeekSlider(){
    const seekVal=(audio.currentTime/audio.duration)*100
    seekSlider.value=seekVal
}

function getaudioDuration(){

    const minutes=Math.floor(audio.duration/60)
    const seconds = Math.floor(audio.duration % 60);
    const finalDuration=`${minutes}:${(seconds<10?0:"")}${seconds}`
    totalTime.textContent=finalDuration
    
}

function updateCurrentTime(){
    const minutes=Math.floor(audio.currentTime/60)
    const seconds = Math.floor(audio.currentTime % 60);
    const finalCurrentDuration=`${minutes}:${(seconds<10?0:"")}${seconds}`
    currentTimeDOM.textContent=finalCurrentDuration
}

function updateSeeker(){
    const currentTime=(audio.currentTime/audio.duration)*100
    seekSlider.value=currentTime
}


//SHUFFLE FUNCTION


function shuffle(){
    const RandomNumber=Math.floor(Math.random()*musicPlaylist.length)
    currentMusic=RandomNumber
    console.log("shuffling")
}