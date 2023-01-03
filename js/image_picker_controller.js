import { Controller } from "../node_modules/@hotwired/stimulus/dist/stimulus.js"

export default class ImagePickerController extends Controller {
  static targets = ["bg"]

  static images = [
    "balance.jpg", "bike.jpg", "blue.jpg", "car.jpg", "cat-bikes.jpg", "catcar.jpg", "catdrive.jpg", "cats.jpg", "clowning.jpg", "clowns.jpg", "costumes.jpg", "couple.jpg", "dance.jpg", "desert.jpg", "dinner.jpg", "dj.jpg", "dreds.jpg", "ewok.jpg", "faces.jpg", "fire.jpg", "gold.jpg", "halo.jpg", "hats.jpg", "helmets.jpg", "horns.jpg", "man.jpg", "marriage.jpg", "moon.jpg", "motor.jpg", "rept.jpg", "robocar.jpg", "robodance.jpg", "robot.jpg", "robots.jpg", "settlers.jpg", "skull.jpg", "snakes.jpg", "suit.jpg", "temple.jpg", "todd.jpg", "veil.jpg"
  ]


  connect () {
    let images = ImagePickerController.images
    let image = images[Math.floor(Math.random() * images.length)]
    this.bgTarget.src = `./images/${image}`
  }

}
