import state from "./states.js"
import * as el from "./elements.js"

export function updateDisplay(minutes, seconds) {
  // Nullish Coalesing Operator
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}
