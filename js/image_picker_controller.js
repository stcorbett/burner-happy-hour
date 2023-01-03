import { Controller } from "../node_modules/@hotwired/stimulus/dist/stimulus.js"

export default class ImagePickerController extends Controller {
  static targets = ["bg", "text", "showText", "hideText"]

  static images = [
    "balance.jpg", "bike.jpg", "blue.jpg", "car.jpg", "cat-bikes.jpg", "catcar.jpg", "catdrive.jpg", "cats.jpg", "clowning.jpg", "clowns.jpg", "costumes.jpg", "couple.jpg", "dance.jpg", "desert.jpg", "dinner.jpg", "dj.jpg", "dreds.jpg", "ewok.jpg", "faces.jpg", "fire.jpg", "gold.jpg", "halo.jpg", "hats.jpg", "helmets.jpg", "horns.jpg", "man.jpg", "marriage.jpg", "moon.jpg", "motor.jpg", "rept.jpg", "robocar.jpg", "robodance.jpg", "robot.jpg", "robots.jpg", "settlers.jpg", "skull.jpg", "snakes.jpg", "suit.jpg", "temple.jpg", "todd.jpg", "veil.jpg"
  ]

  connect() {
    this.images = ImagePickerController.images
    this.index = Math.floor(Math.random() * this.images.length)

    this.render()
  }

  render() {
    this.bgTarget.src = `./images/${this.images[this.index]}`
  }

  toggleText() {
    this.textTarget.classList.toggle("hidden")
    this.hideTextTarget.classList.toggle("hidden")
    this.showTextTarget.classList.toggle("hidden")
  }

  next() {
    this.index += 1

    if(this.index > this.images.length - 1) {
      this.index = 0
    }

    this.render()
  }

  prev() {
    this.index -= 1

    if(this.index < 0) {
      this.index = this.images.length - 1
    }

    this.render()
  }

}
