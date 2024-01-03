const PlayPauseIcon=document.getElementById("PLayPause-Icon")
let audio=document.getElementById("myAudio")
let playbackPosition=0
let currentMusic=0
let isPlaying



const musicPlaylist=[
    '/music/chineseFlute.mp3',
    '/music/Faded.mp3'
]

function nextMusic(){
    currentMusic=currentMusic+1
    playAudio()
}


function togglePlayPause(){
    if(audio.paused){
        playAudio()
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

console.log(isPlaying)