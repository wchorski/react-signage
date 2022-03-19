const path = require('path')
const fs = require('fs')


// update media
const mediaDir = path.join(__dirname, '../client/react-frontend/public/media')
let mediaJSON = { }
let mediaJSON_temp = { "hello":  ["chris", "ben", "zach", "damitri", "lucas", "bob", "eric", "tom", "perry"]}

fs.readdir(mediaDir, function (err, files){
  if (err) return console.log('can not read dir' + err)

  mediaJSON = { "media": files}
  // console.log(mediaJSON);
  // console.log(mediaJSON_temp);
})

exports.hello_cntr_funct = (req, res) => {
  console.log('----------- hello-cntr.js exp --------------');



  res.json(mediaJSON)
}