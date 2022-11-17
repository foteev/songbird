export const player = (source) => {

  const audio = document.querySelector('.player__audio')
  audio.setAttribute('src', source)
  console.log(source)

  const playBtn = document.querySelector('.player__play')
  const replayBtn = document.querySelector('.player__replay')
  const progressBar = document.querySelector('.player__status-bar')
  const playerTime = document.querySelector('.player__time')

  const getZero = (num) => {
    if (num >= 0 && num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }

  const toggleAudioStatus = () => {
    if (audio.paused) {
      audio.play()
      playBtn.classList.add('player__stop')
    } else {
      audio.pause()
      playBtn.classList.remove('player__stop')
    }
  }
  playBtn.addEventListener('click', toggleAudioStatus)
  audio.addEventListener('click', toggleAudioStatus)

  replayBtn.addEventListener('click', () => {
    audio.currentTime = 0
    audio.play()
    playBtn.classList.add('player__stop')
  })

  audio.addEventListener('timeupdate', () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100

    let minutes = Math.floor(audio.currentTime / 60)
    let seconds = Math.floor(audio.currentTime % 60)

    playerTime.textContent = `${getZero(minutes)}:${getZero(seconds)}`
  })

  progressBar.addEventListener('change', () => {
    audio.currentTime = (progressBar.value * audio.duration) / 100
  })

}
