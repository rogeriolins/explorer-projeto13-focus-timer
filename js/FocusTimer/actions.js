import state from "./states.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")

  if (state.isRunning) {
    el.cursorTimer.classList.add("blink")
  } else {
    el.cursorTimer.classList.remove("blink")
  }
  timer.countdown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  el.cursorTimer.classList.remove("blink")
  timer.updateDisplay()
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on")
}

export function set() {
  el.minutes.setAttribute("contenteditable", true)
  el.minutes.focus()
}
