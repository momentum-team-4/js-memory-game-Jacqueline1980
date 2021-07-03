const cardsArray = [
    { name: 'moon', image: 'moon.jpg' },
    { name: 'moon', image: 'moon.jpg' },
    { name: 'northernLights', image: 'NorthernLights.jpg' },
    { name: 'northernLights', image: 'NorthernLights.jpg' },
    { name: 'earth', img: 'Earth.jpg' },
    { name: 'earth', img: 'Earth.jpg' },
    { name: 'venus', img: 'MaybeVenus.jpg' },
    { name: 'venus', img: 'MaybeVenus.jpg' },
    { name: 'setting', img: 'SettingMoon.jpg' },
    { name: 'setting', img: 'SettingMoon.jpg' },
    { name: 'stars', img: 'Stars.jpg' },
    { name: 'stars', img: 'Stars.jpg' }
]
const memoryGame = document.querySelector("#cardGame")
const memoryCards = document.querySelector(".individualCards")


const cardContainer = document.createElement('div')
memoryCards.appendChild(cardContainer)

const moonImageEl = document.createElement('div')
moonImageEl.className = "moonImage"
moonImageEl.innerHTML = "<img src='moon.jpg'>"
cardContainer.appendChild(moonImageEl)
memoryCards.appendChild(cardContainer)

const northernLightsImageEl = document.createElement('div')
northernLightsImageEl.className = "northernLightsImage"
northernLightsImageEl.innerHTML = "<img src='NorthernLights.jpg'>"
cardContainer.appendChild(northernLightsImageEl)
memoryCards.appendChild(cardContainer)

const earthImageEl = document.createElement('div')
earthImageEl.className = "earthImage"
earthImageEl.innerHTML = "<img src='Earth.jpg'>"
cardContainer.appendChild(earthImageEl)
memoryCards.appendChild(cardContainer)

const venusImageEl = document.createElement('div')
venusImageEl.className = "venusImage"
venusImageEl.innerHTML = "<img src='MaybeVenus.jpg'>"
cardContainer.appendChild(venusImageEl)
memoryCards.appendChild(cardContainer)


const settingImageEl = document.createElement('div')
settingImageEl.className = "settingMoonImage"
settingImageEl.innerHTML = "<img src='SettingMoon.jpg'>"
cardContainer.appendChild(settingImageEl)
memoryCards.appendChild(cardContainer)

const starsImageEl = document.createElement('div')
starsImageEl.className = "starsImage"
starsImageEl.innerHTML = "<img src='Stars.jpg'>"
cardContainer.appendChild(starsImageEl)
memoryCards.appendChild(cardContainer)


const moonImage = document.querySelector


window.addEventListener('load', () => {
    console.log('The page has loaded');
})



function shuffleArray(cardsArray) {
    for (let i = cardsArray.length - 1; i > 0, i--;) {
        const j = Math.floor(Math.random() * 1)
        const temp = cardsArray[i]
        cardsArray[1] = cardsArray[j]
        cardsArray[j] = temp
    }
    return cardsArray
}
