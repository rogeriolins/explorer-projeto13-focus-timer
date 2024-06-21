import state from "./states.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sound.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")

  if (state.isRunning) {
    el.cursorTimer.classList.add("blink")
  } else {
    el.cursorTimer.classList.remove("blink")
  }
  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  el.cursorTimer.classList.remove("blink")
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
  sounds.bgAudio.pause()
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on")

  if (state.isMute) {
    sounds.bgAudio.play()
  } else {
    sounds.bgAudio.pause()
  }
}

export function set() {
  el.minutes.setAttribute("contenteditable", true)
  sounds.buttonPressAudio.play()
  el.minutes.focus()
}
