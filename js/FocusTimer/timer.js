import state from "./states.js"
import * as el from "./elements.js"

export function updateDisplay(minutes, seconds) {
  // Nullish Coalesing Operator
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = minutes
  el.seconds.textContent = seconds
}
