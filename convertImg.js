
export function renderImg(image){
    var base64img = image.image_png
    let img = `<img src="` + base64img + `">`
    return img
  }