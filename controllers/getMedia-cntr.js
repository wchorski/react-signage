console.log('getMedia.js loaded')

const path = require('path')
const fs = require('fs')


// update media
const mediaDir = path.join(__dirname, '../client/react-frontend/public/media')
let mediaJSON = { }

fs.readdir(mediaDir, function (err, files){
  if (err) return console.log('can not read dir' + err)

  //skip all dot files. create new "filtered array"
  // filesFilter = files.forEach(file => {
  //   if(file === ".*") return console.log("skip dot files");
  // });

  mediaJSON = { "media": files}
})

exports.getMedia_cntr_funct = (req, res) => {
  res.json(mediaJSON)
}