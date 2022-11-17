import { player } from '@/js/player'
import { player2 } from '@/js/player2'
import { selfcheckResults } from './js/check'


import songnerdLogo from '@/images/logo.png'
import songnerdLogoBW from '@/images/logo_bw.png'
import rsLogo from '@/images/rs_school_js.svg'
import birdImage from '@/images/bird.jpg'

import ouSound from '/public/ou.mp3'
import ohSound from '/public/oh.mp3'
import vangers from '/public/vangers.mp3'

import { birdsDataEn } from '@/js/birds-en'
import '@/styles/index.scss'

function createText(parent, elementName, className, text) {
  parent.append(elementName)
  elementName.className = className
  elementName.textContent = text
}
function createImage(parent, elementName, className, src) {
  parent.append(elementName)
  elementName.className = className
  elementName.src = src
}

function createButton(parent, elementName, className, src) {
  parent.append(elementName)
  elementName.className = className
  elementName.src = src
}

const startPage = document.querySelector('.start')
const gamePage = document.querySelector('.game')
const resultsPage = document.querySelector('.results')
gamePage.style.display = 'none'
resultsPage.style.display = 'none'

const divLogo = document.querySelector('.logo')
const logo = document.createElement('img')
createImage(divLogo, logo, 'logo__img', songnerdLogoBW)

const startLogo = document.querySelector('.start__biglogo__img')
startLogo.src = songnerdLogo

const startPageButton = document.querySelector('.start-page-button')
const newGameButton = document.querySelector('.new-game-button')
const continueButton = document.querySelector('.game__center__continue__button')
continueButton.style.display = 'none'
const resultsButton = document.querySelector('.results-button')

// const hamMenu = document.querySelector('.hamburger-menu')
const startPageButtonHam = document.querySelector('.start-page-button-ham')
const newGameButtonHam = document.querySelector('.new-game-button-ham')
const resultsButtonHam = document.querySelector('.results-button-ham')


const gameLeftScreen = document.querySelector('.game__left__screen')
const gameRound = document.querySelectorAll('.game__top__group')
const infoRight = document.querySelector('.game__right')
const name = document.querySelector('.game__right__info__name')
const species = document.querySelector('.game__right__info__species')
const description = document.querySelector('.game__right__info__description')
const image = document.querySelector('.bird-image')

const resultsText = document.querySelector('.results__total__block__text')
const resultsScore = document.querySelector('.results__total__block__score')
const resultsTotalButton = document.querySelector('.results__total__button')

const footerLogo = document.querySelector('.footer__logo')
footerLogo.src = rsLogo


const ouAudio = new Audio(ouSound)
const ohAudio = new Audio(ohSound)
const startAudio = new Audio(vangers)


let points = 0
const score = document.querySelector('.menu__item__score')
score.innerHTML = `Score: ${points}`
const roundScore = document.querySelector('.game__center__score__text')
let group = 0

const game = (group) => {
  let counter = 6
  let birds = birdsDataEn[group]
  let bird = birds[Math.floor(Math.random()*birds.length)]
  player(bird.audio)
  roundScore.innerHTML = `Round score: 6`
  // player2(ouAudio)

  if (group != 0)
    gameRound[group - 1].classList.remove('game__top__group-active')
  gameRound[group].classList.add('game__top__group-active')

  let gameButton = document.querySelectorAll('.game-button')

  gameButton.forEach((x) => {
    if (x.classList.contains('game-button-win')) x.classList.remove('game-button-win')
    if (x.classList.contains('game-button-lost')) x.classList.remove('game-button-lost')
  })
  
  gameButton.forEach((x, i, a) => {
    x.setAttribute('value', birds[i].name)
    setTimeout( () =>{
    x.addEventListener('click', () => {
      // player2(ohAudio)
      roundScore.innerHTML = `Round score: ${counter}`
      name.innerHTML = birds[i].name
      species.innerHTML = birds[i].species
      description.innerHTML = birds[i].description
      image.style.display = ''
      image.src = birds[i].image
      player2(birds[i].audio)

      if (x.value === bird.name) {
        infoRight.style.background = 'green'
        gameLeftScreen.style.display = ''
        gameLeftScreen.src = birds[i].image
        logo.src = songnerdLogo
        x.classList.add('game-button-win')
        ouAudio.play()
        points += counter
        score.innerHTML = `Score: ${points}`
        continueButton.style.display = ''
        counter = 0
        player(ouSound)
      } else {
          x.classList.add('game-button-lost')
          ohAudio.play()
          if (counter > 0) counter--
          infoRight.style.background = 'red'
      }
    })
  }, 500)
  })
}

startPageButton.addEventListener('click', () => {
    startAudio.pause()
    startPage.style.display = ''
    gamePage.style.display = 'none'
    resultsPage.style.display = 'none'
})

startPageButtonHam.addEventListener('click', () => {
  startAudio.pause()
  startPage.style.display = ''
  gamePage.style.display = 'none'
  resultsPage.style.display = 'none'
})

newGameButton.addEventListener('click', () => {
    startAudio.pause()
    clearGameInfo()
    group = 0
    points = 0
    score.innerHTML = `Score: ${points}`
    startPage.style.display = ''
    startPage.style.display = 'none'
    gamePage.style.display = ''
    resultsPage.style.display = 'none' 
    game(group)
})

newGameButtonHam.addEventListener('click', () => {
  startAudio.pause()
  clearGameInfo()
  group = 0
  points = 0
  score.innerHTML = `Score: ${points}`
  startPage.style.display = ''
  startPage.style.display = 'none'
  gamePage.style.display = ''
  resultsPage.style.display = 'none'
  game(group)
})

continueButton.addEventListener('click', () => {
    if (group < 5) {
      group++
      clearGameInfo()
      game(group)

    } else {
        clearGameInfo()
        resultsText.innerHTML = 'Congratulations, champ!'
        resultsScore.innerHTML = `Your score is ${points} / 36`
        resultsTotalButton.style.display = ''
        ouAudio.play()
        startPage.style.display = 'none'
        gamePage.style.display = 'none'
        resultsPage.style.display = ''
    }
  })

resultsButton.addEventListener('click', () => {
  startAudio.play()
    startPage.style.display = 'none'
    gamePage.style.display = 'none'
    resultsPage.style.display = ''
    if (!points) resultsTotalButton.style.display = 'none'
    if (points === 36) resultsTotalButton.style.display = 'none'
})

resultsButtonHam.addEventListener('click', () => {
  startAudio.play()
  startPage.style.display = 'none'
  gamePage.style.display = 'none'
  resultsPage.style.display = ''
  if (!points) resultsTotalButton.style.display = 'none'
  if (points === 36) resultsTotalButton.style.display = 'none'
})

resultsTotalButton.addEventListener('click', () => {
  clearGameInfo()
  group = 0
  points = 0
  score.innerHTML = `Score: ${points}`
  startPage.style.display = 'none'
  gamePage.style.display = ''
  resultsPage.style.display = 'none'
  game(group)
})

function clearGameInfo() {
  player2('')
  logo.src = songnerdLogoBW
  gameLeftScreen.src = birdImage
  infoRight.style.background = 'grey'
  name.innerHTML = 'What bird is it?'
  species.innerHTML = "***"
  description.innerHTML = ""
  image.src = birdImage
  continueButton.style.display = 'none'
  gameRound.forEach((x) =>
    x.classList.remove('game__top__group-active')
  )
}

console.log(selfcheckResults)
