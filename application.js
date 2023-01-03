import { Application } from "./node_modules/@hotwired/stimulus/dist/stimulus.js"

import ImagePickerController from "./js/image_picker_controller.js"

window.Stimulus = Application.start()
Stimulus.register("image-picker", ImagePickerController)
