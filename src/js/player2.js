// export let audio = ''



export const player2 = (source) => {

  const audio = document.querySelector('.player__audio2')
  audio.setAttribute('src', source)
  // eslint-disable-next-line no-console
  console.log(source)
  audio.pause()
  

  let playPromise = audio.play()
  

  if (playPromise !== undefined) {
    playPromise.then(_ => {
      

    const playBtn = document.querySelector('.player__play2')
    const replayBtn = document.querySelector('.player__replay2')
    const progressBar = document.querySelector('.player__status-bar2')
    const playerTime = document.querySelector('.player__time2')

    playBtn.classList.remove('player__stop2')
  

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
        playBtn.classList.add('player__stop2')
      } else {
        audio.pause()
        playBtn.classList.remove('player__stop2')
      }
    }

    playBtn.addEventListener('click', toggleAudioStatus)
    audio.addEventListener('click', toggleAudioStatus)

    replayBtn.addEventListener('click', () => {
      audio.currentTime = 0
      audio.play()
      playBtn.classList.add('player__stop2')
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

      // Automatic playback started!
      // Show playing UI.
    })
    .catch(error => {
      if (error) audio.setAttribute('src', source)
    })
  }
}