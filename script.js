let getTimeLeft = (dateLimit) => {
    let now = new Date()
    let timeLeft = (new Date(dateLimit) - now + 1000) / 1000
    let secondsLeft = ('0' + Math.floor(timeLeft % 60)).slice(-2)
    let minutesLeft = ('0' + Math.floor(timeLeft / 60 % 60)).slice(-2)
    let hoursLeft = ('0' + Math.floor(timeLeft / 3600 % 60)).slice(-2)
    let daysLeft = ('0' + Math.floor(timeLeft / (3600 * 24))).slice(-2)
    return {
        secondsLeft,
        minutesLeft,
        hoursLeft,
        daysLeft,
        timeLeft
    }
}

const countDown = document.querySelector(".countDown")
const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const state = document.querySelector(".state")
const off = document.querySelector(".off")
const on = document.querySelector(".on")
const audio = new Audio("./sound/sound.mp3")
const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const btn = document.querySelector(".btn")

let countLeft = (timeLeft, message) => {
    let time = "00"
    const timeNow = setInterval(() => {
        state.innerHTML = "Faltan para navidad"
        let t = getTimeLeft(timeLeft)
        days.innerHTML = t.daysLeft
        hours.innerHTML = t.hoursLeft
        minutes.innerHTML = t.minutesLeft
        seconds.innerHTML = t.secondsLeft
        if (t.timeLeft <= 1) {
            clearInterval(timeNow)
            days.innerHTML = time
            hours.innerHTML = time
            minutes.innerHTML = time
            seconds.innerHTML = time
            btn.style.visibility = "visible"
            state.innerHTML = message
            off.style.display = "none"
            on.style.display = "block"
            pause.addEventListener('click', () => {
                play.classList.remove("onH")
                audio.pause()
                pause.classList.add("onH")
            })
            play.addEventListener('click', () => {
                pause.classList.remove("onH")
                audio.play()
                play.classList.add("onH")
            })
        }
    }, 1000)
}


countLeft("Nov 21 2023 16:22:00 GMT-0500", "¡Feliz Navidad!")