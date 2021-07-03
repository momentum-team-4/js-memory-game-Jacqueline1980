const cardsArray = [
    { name: 'moon', image: 'moon.jpg' },
    { name: 'moon', image: 'moon.jpg' },
    { name: 'earth', img: 'Earth.jpg' },
    { name: 'earth', img: 'Earth.jpg' },
    { name: 'northernLights', image: 'NorthernLights.jpg' },
    { name: 'northernLights', image: 'NorthernLights.jpg' },
    { name: 'venus', img: 'MaybeVenus.jpg' },
    { name: 'venus', img: 'MaybeVenus.jpg' },
    { name: 'setting', img: 'SettingMoon.jpg' },
    { name: 'setting', img: 'SettingMoon.jpg' },
    { name: 'stars', img: 'Stars.jpg' },
    { name: 'stars', img: 'Stars.jpg' }
]

const cards = document.querySelectorAll('.memoryCard') //selecting all the cards

// Need a click event listener here for every card
cardsArray.forEach (flipOver);
    console.log(flipOver)

 function flipOver() {
     this.classList.toggle('flip');
 }
 