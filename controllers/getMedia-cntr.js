console.log('------------------------------------------------------')
console.log('-------------getMedia-cntr.js loaded------------------')
console.log('------------------------------------------------------')


const path = require('path')
const fs = require('fs')



// update media
//TODO if not using 'filebrowser' then use 'react-frontend''s public folder
const mediaDir = path.join(__dirname, '../client/react-frontend/public/root/media')
// const mediaDir = path.join(__dirname, '../client/filebrowser/root/media')
let mediaJSON = { }

const readDirectory = () => {
  fs.readdir(mediaDir, function (err, files){
    if (err) return console.log('can not read dir' + err)
  
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    mediaJSON = { "media": files}
    saveData(mediaJSON)
  })
}
readDirectory()


const saveData = (data) => {
  const stringifyData = JSON.stringify(data)
  console.log("------ Writing media1.json-------")
  fs.writeFileSync('json/media1.json', stringifyData), err => {
    if (err) throw err;
    console.log("------done Writing media1.json-------");
  }
}


//TODO run this when when new files are added / deleted
exports.getMedia_cntr_funct = (req, res) => {
  readDirectory()
  res.json(mediaJSON)
}