import { controls } from "./elements.js"

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.theaction
    if (action === undefined) {
      return
    }

    console.log(event.target.dataset.theaction)
  })
}
