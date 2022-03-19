console.log('getMedia.js loaded')


const path = require('path')
const fs = require('fs')


// update media
const mediaDir = path.join(__dirname, './public/media')
let mediaFiles = []


fs.readdir(mediaDir, function (err, files){
  if (err) return console.log('can not read dir' + err)

  // console.log(files);
  mediaFiles = files
})
//? ########

// build frame elements
// const img_cont = document.getElementById('img-cont')

mediaFiles.forEach( function (file) {
  // console.log(file)
  const div_frame = createElement(
    `
    <div class="frame"><img src="media/${file}" alt="slider image"></div>
    `
  )

  img_cont.appendChild(div_frame)
})

exports.getMedia = (req, res) => {
  console.log('getMedia.js exp');


  // TODO get files
  // use fs & path to get file names
  // files names -> array of strings
  // array -> json
  // get component to push media
  res.json({
    "media": ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]
  })
}