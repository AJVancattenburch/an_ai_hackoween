import { logger } from '../utils/Logger.js'
//NOTE - A button w/ the value of `@click="downloadBase64AsPng"` will download the image as a png since image isn't a DOM element.
export const downloadBase64AsPng = () => {
  const image = document.querySelector('#image')
  const dataURL = image.toDataURL()
  const link = document.createElement('a')

  link.href = dataURL
  link.download = 'image.png'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
};

//NOTE - Takes the image and converts it to a base64 string. Enables saving image to the database.
export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  })

//NOTE - Takes the base64 string and converts it to an image
// export const base64ToImage = (base64String) => {
//   const img = new Image();
//   img.src = base64String;
//   return img;
// }


//NOTE - This is the same as the above function, but it returns a promise
export const base64ToImage = (base64String) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = base64String;
    img.onload = () => resolve(img);
    img.onerror = reject;
  })
//Bring it into the component like this:
// import { base64ToImage } from '@/utils/imageHelpers'
//Then use it like this:
//const dataURL = this.image.toDataURL()
// base64ToImage(dataURL)
  // try {
  //   const img = await base64ToImage(dataURL)
  //   this.ctx.drawImage(img, 0, 0)
  // }
  // catch (e) {
  //   logger.error('Error in base64ToImage', e)
  // }
//What is happening here is that we are taking the base64 string and converting it to an image. Then we are drawing that image to the image

//NOTE - Takes hex color and returns the contrast color. Use in conjunction with v-bind your style. Example below:
//:style="{ color: getColorContrast(color) }"
export const getColorContrast = (hexcolor) => {
  const hex = hexcolor.replace('#', '')

  // Convert to RGB value from hex so we can extract individual values
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)

  // Calculate the brightness from RGB value
  const brightness = (r * 299 + g * 587 + b * 114) / 1000

  // Invert brightness, light colors become dark and vice versa
  return brightness > 128 ? 'black' : 'white'
}