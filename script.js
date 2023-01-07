const secondHand = document.getElementById('secondHand')
const minuteHand = document.getElementById('minuteHand')
const hourHand = document.getElementById('hourHand')

const audio = new Audio('sounds/analog-clock.ogg')
audio.loop = false
audio.muted = true

setInterval(clockRotating, 1000)
function clockRotating() {
  const date = new Date()
  const getSeconds = date.getSeconds() / 60
  const getMinutes = date.getMinutes() / 60

  // Accurate hour movement
  const getHours = (date.getHours() + date.getMinutes() / 60) / 12

  secondHand.style.transform = 'rotate(' + getSeconds * 360 + 'deg)'
  minuteHand.style.transform = 'rotate(' + getMinutes * 360 + 'deg)'
  hourHand.style.transform = 'rotate(' + getHours * 360 + 'deg)'

  document.getElementById('currentDay').innerHTML = date.toDateString()
  audio.pause()
  audio.currentTime = 0
  audio.play()
}

// mute button
const muteButton = document.getElementById('muteButton')
muteButton.addEventListener('click', () => {
  audio.muted = !audio.muted

  if (audio.muted) {
    muteButton.innerHTML = '🔕'
  } else {
    muteButton.innerHTML = '🔔'
  }
})
